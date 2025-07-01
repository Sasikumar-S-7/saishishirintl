'use client';
import { useEffect, useState } from 'react';
import { Form, Input, Select, Button, message, Modal, Row, Col, Card, Space } from 'antd';
import { useRouter } from 'next/navigation';
import { CheckCircleOutlined, PhoneOutlined, UserOutlined, MailOutlined, CalendarOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// API configuration
const TELECRM_API_URL = 'https://api.telecrm.in/enterprise/66ec0997759f100018f5cbfe/autoupdatelead';
const TELECRM_BEARER_TOKEN = 'a7c4718a-f44c-4c57-a446-b785ae1892e91740397197874:fe019006-f5b8-4fb5-81c6-7c0bfeaf81fe';

// Country codes for phone number
const countryCodes = [
  { code: '+91', country: 'India', flag: '🇮🇳' },
  { code: '+1', country: 'USA', flag: '🇺🇸' },
  { code: '+44', country: 'UK', flag: '🇬🇧' },
  { code: '+61', country: 'Australia', flag: '🇦🇺' },
  { code: '+65', country: 'Singapore', flag: '🇸🇬' },
  { code: '+971', country: 'UAE', flag: '🇦🇪' },
  { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
  { code: '+81', country: 'Japan', flag: '🇯🇵' },
  { code: '+86', country: 'China', flag: '🇨🇳' },
];

export default function BhutanForm() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');

  useEffect(() => {
    form.setFieldsValue({
      international: 'International',
      pageUrl: window.location.href,
      submissionTime: new Date().toISOString(),
      countryCode: '+91',
    });
  }, [form]);

  // Countdown effect for modal
  useEffect(() => {
    let timer;
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showSuccessModal && countdown === 0) {
      router.push('/bhutan-tour-package-lp/thank-you');
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, router]);

  const triggerConfetti = () => {
    // Load confetti script dynamically
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js';
    script.onload = () => {
      window.confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    };
    document.body.appendChild(script);
  };

  const onFinish = async (values) => {
    setIsSubmitting(true);

    const fields = {
      name: values['your-name'],
      phone: `${values['countryCode']}${values['your-number']}`,
      email: values['your-email'],
    };

    const actions = [
      {
        type: 'SYSTEM_NOTE',
        text: `Lead Source: Bhutan Tour\nTour Month: ${values['tour-month']}\nMessage: ${values['your-message']}\nPackage: ${values['international']}\nPage URL: ${values['pageUrl']}`,
      },
    ];

    const payload = { fields, actions };

    try {
      const res = await fetch(TELECRM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TELECRM_BEARER_TOKEN}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('TeleCRM rejected the submission');

      form.resetFields();
      form.setFieldsValue({
        international: 'International',
        pageUrl: window.location.href,
        submissionTime: new Date().toISOString(),
        countryCode: '+91',
      });
      setSelectedCountryCode('+91');

      message.success('Form submitted successfully!');
      triggerConfetti(); // Trigger confetti effect
      setShowSuccessModal(true);
      setCountdown(5);

    } catch (err) {
      console.error(err);
      message.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    router.push('/bhutan-tour-package-lp/thank-you');
  };

  const handleCountryCodeChange = (value) => {
    setSelectedCountryCode(value);
    form.setFieldsValue({ countryCode: value });
  };

  return (
    <>
    <section >
      <div  className="py-md-5">
        <div className="" id='contact'>
          <div className="row justify-content-center">
            <div className="">
              <Card 
                className="border-0 shadow-lg"
                style={{ 
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  overflow: 'hidden'
                }}
              >
                <div className="p-md-2">
                  <div className="text-center mb-4">
                    <h3 className="text-muted">Talk to a Travel Expert</h3>
                  </div>

                  <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    size="large"
                  >
                    <Row gutter={[16, 8]}>
                      <Col span={24}>
                        <Form.Item 
                          name="your-name" 
                          rules={[{ required: true }]}
                        >
                          <Input 
                            prefix={<UserOutlined className="text-primary pe-1" />}
                            placeholder="Your full name" 
                            className="rounded-pill"
                            style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} sm={8}>
                        <Form.Item 
                          name="countryCode"
                        >
                          <Select
                            value={selectedCountryCode}
                            onChange={handleCountryCodeChange}
                            className="rounded-pill"
                            style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                            optionLabelProp="label"
                          >
                            {countryCodes.map(item => (
                              <Select.Option 
                                key={item.code} 
                                value={item.code}
                                label={`${item.flag} ${item.code}`}
                              >
                                <Space>
                                  <span>{item.flag}</span>
                                  <span>{item.code}</span>
                                </Space>
                              </Select.Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={16}>
                        <Form.Item 
                          name="your-number" 
                          rules={[
                            { required: true },
                            { pattern: /^[0-9]{10,12}$/ }
                          ]}
                        >
                          <Input 
                            prefix={<PhoneOutlined className="text-primary pe-1" />}
                            placeholder="Phone number" 
                            className="rounded-pill"
                            style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                          />
                        </Form.Item>
                      </Col>

                      <Col span={24}>
                        <Form.Item 
                          name="your-email" 
                          rules={[{ type: 'email' }]}
                        >
                          <Input 
                            prefix={<MailOutlined className="text-primary pe-1" />}
                            placeholder="Email address" 
                            className="rounded-pill"
                            style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                          />
                        </Form.Item>
                      </Col>

                      {/* <Col span={24}>
                        <Form.Item name="tour-month">
                          <Select 
                            placeholder="Preferred travel month"
                            className="rounded-pill"
                            style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                            suffixIcon={<CalendarOutlined className="text-primary" />}
                          >
                           
                            <Select.Option value="August 2025">August 2025</Select.Option>
                            <Select.Option value="Sep 2025">September 2025</Select.Option>
                            <Select.Option value="Oct 2025">October 2025</Select.Option>
                            <Select.Option value="Nov 2025">November 2025</Select.Option>
                            <Select.Option value="Dec 2025">December 2025</Select.Option>
                          </Select>
                        </Form.Item>
                      </Col> */}

                      {/* <Col span={24}>
                        <Form.Item name="your-message">
                          <TextArea 
                            placeholder="Special requests or questions"
                            rows={4}
                            className="rounded-3"
                            style={{ border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                          />
                        </Form.Item>
                      </Col> */}
                    </Row>

                    {/* Hidden Fields */}
                    <Form.Item name="international" hidden>
                      <Input />
                    </Form.Item>
                    <Form.Item name="pageUrl" hidden>
                      <Input />
                    </Form.Item>
                    <Form.Item name="submissionTime" hidden>
                      <Input />
                    </Form.Item>

                    <Form.Item className="mt-3">
                      <Button 
                        type="primary" 
                        htmlType="submit" 
                        block
                        size="large"
                        loading={isSubmitting}
                        className="rounded-pill"
                        style={{ 
                          height: '55px',
                          fontSize: '16px',
                          fontWeight: '600',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none',
                          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Start My Journey'}
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Success Modal */}
      <Modal
        open={showSuccessModal}
        footer={null}
        closable={false}
        centered
        width={400}
        maskClosable={false}
        style={{ borderRadius: '20px' }}
      >
        <div className="text-center p-4">
          <div className="mb-4">
            <CheckCircleOutlined 
              style={{ 
                fontSize: '72px', 
                color: '#52c41a',
                filter: 'drop-shadow(0 4px 12px rgba(82, 196, 26, 0.3))'
              }} 
            />
          </div>
          
          <h3 style={{ 
            marginBottom: '16px',
            fontWeight: '600',
            color: '#262626'
          }}>
            Thank You!
          </h3>
          
          <p style={{ 
            color: '#8c8c8c', 
            marginBottom: '24px',
            fontSize: '16px'
          }}>
            Weve received your request and will contact you shortly.
          </p>

          {countdown > 0 && (
            <p style={{ 
              color: '#1890ff', 
              marginBottom: '20px',
              fontSize: '14px'
            }}>
              Redirecting in {countdown} seconds...
            </p>
          )}

          <Button 
            type="primary" 
            onClick={handleModalClose}
            size="large"
            className="rounded-pill"
            style={{ 
              minWidth: '150px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none'
            }}
          >
            Continue
          </Button>
        </div>
      </Modal>
      

      <style jsx global>{`
        .ant-input, .ant-select-selector, .ant-input-affix-wrapper {
          transition: all 0.3s !important;
        }
        
        .ant-input:focus, 
        .ant-select-focused .ant-select-selector,
        .ant-input-affix-wrapper-focused {
          box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2) !important;
          border-color: #667eea !important;
        }
        
        .ant-modal-content {
          border-radius: 20px !important;
        }
        
        @media (max-width: 768px) {
          .container-fluid {
            padding: 20px !important;
          }
        }
      `}</style>
      
    </>
  );
}