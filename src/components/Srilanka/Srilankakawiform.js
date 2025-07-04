'use client';
import { useEffect, useState } from 'react';
import { Form, Input, Select, Button, message, Modal, Row, Col, Card, Space, Radio, DatePicker, InputNumber } from 'antd';
import { useRouter } from 'next/navigation';
import { CheckCircleOutlined, PhoneOutlined, UserOutlined, MailOutlined, CalendarOutlined, GlobalOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// API configuration
const TELECRM_API_URL = 'https://api.telecrm.in/enterprise/66ec0997759f100018f5cbfe/autoupdatelead';
const TELECRM_BEARER_TOKEN = 'a7c4718a-f44c-4c57-a446-b785ae1892e91740397197874:fe019006-f5b8-4fb5-81c6-7c0bfeaf81fe';
const MAKE_WEBHOOK_URL = 'https://hook.eu2.make.com/bu99mgw62yhujsbbi084oct1a4yzhmbj';
const WEB3FORMS_ACCESS_KEY = 'e467df79-d92a-46e8-9112-7475f448fd45';

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

// Destination options
const destinations = [
  'INTL',
  'BHUTAN',
  'DUBAI',
  'Nepal',
  'Thailand',
  'Vietnam',
  'SRILANKA',
  'SINGAPORE',
  'GEORGIA',
  'Uzbekistan',
  'Kailash Mansarovar',
  'Bali',
  'Phu Quoc Island',
  'Kazakhstan',
  'Langkawi',
  'OTHER DESTINATION'
];

// Package options
const packageOptions = [
  'International',
  'Domestic',
  'Bhutan Special',
  'Premium Package',
  'Budget Package'
];

export default function SriLankaForm() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+91');

  useEffect(() => {
    form.setFieldsValue({
      international: 'SRILANKA',
      package: 'International',
      pageUrl: window.location.href,
      submissionTime: new Date().toISOString(),
      countryCode: '+91',
      leadSource: 'Sri Lanka Tour Landing Page',
      groupTour: 'Not Specified',
      traveledWithSaishishirtour: 'No',
    });
  }, [form]);

  // Countdown effect for modal
  useEffect(() => {
    let timer;
    if (showSuccessModal && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (showSuccessModal && countdown === 0) {
      router.push('/srilanka-tour-package-lp/thank-you');
    }
    return () => clearTimeout(timer);
  }, [showSuccessModal, countdown, router]);

  const triggerConfetti = () => {
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

  // Send to Web3Forms for email notifications
  const sendToWeb3Forms = async (data) => {
    try {
      const emailPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: data['your-name'],
        email: data['your-email'] || 'noreply@saishishirtour.com',
        phone: data.fullPhone,
        subject: 'New Sri Lanka Tour Inquiry',
        message: `
New Sri Lanka Tour Inquiry Details:

Name: ${data['your-name']}
Phone: ${data.fullPhone}
Email: ${data['your-email'] || 'Not provided'}
Travel Month: ${data['tour-month'] || 'Not specified'}
Special Requests: ${data['your-message'] || 'None'}

Lead Source: ${data.leadSource}
Page URL: ${data.pageUrl}
Submission Time: ${data.submissionTime}
        `,
        reply_to: data['your-email'] || 'noreply@saishishirtour.com',
        from_name: 'Sri Lanka Tour Form',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Web3Forms failed: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      if (result.success) {
        console.log('Web3Forms email sent successfully');
        return true;
      } else {
        throw new Error('Web3Forms returned success: false');
      }
    } catch (error) {
      console.error('Web3Forms error:', error);
      throw error;
    }
  };

  // Send to Make.com webhook
  const sendToMakeWebhook = async (data) => {
    try {
      const webhookPayload = {
        formData: data,
        timestamp: new Date().toISOString(),
        source: 'Sri Lanka Tour Form',
        leadSource: 'Sri Lanka Tour Landing Page'
      };

      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Make.com webhook failed: ${response.status} - ${errorText}`);
      }
      
      console.log('Make.com webhook sent successfully');
      return true;
    } catch (error) {
      console.error('Make.com webhook error:', error);
      throw error;
    }
  };

  // Send to TeleCRM
  const sendToTeleCRM = async (values) => {
    try {
      const fields = {
        name: values['your-name'],
        phone: `${values['countryCode']}${values['your-number']}`,
        email: values['your-email'] || '',
        alternatePhone: values['alternate-phone'] || '',
        SAG: values['sag'] || '',
        DOM: values['dom'] || '',
        INTL: values['international'] || 'SRILANKA',
        travelDate: values['travel-date'] ? values['travel-date'].format('DD/MM/YYYY') : '',
        phoneNumber: values['your-number'] || '',
        month: values['tour-month'] || '',
        message: values['your-message'] || '',
        package: values['package'] || 'International',
        city: values['city'] || '',
        numberOfTravelers: values['number-of-travelers'] || '',
        traveledWithSaishishirtour: values['traveled-with-saishishirtour'] || 'No',
        groupTour: values['group-tour'] || 'Not Specified',
        leadSource: 'Sri Lanka Tour Landing Page',
        score: values['score'] || 0
      };

      const actions = [
        {
          type: 'SYSTEM_NOTE',
          text: `Lead Source: Sri Lanka Tour Landing Page
Destination: ${values['international'] || 'SRILANKA'}
Tour Month: ${values['tour-month'] || 'Not specified'}
Travel Date: ${values['travel-date'] ? values['travel-date'].format('DD/MM/YYYY') : 'Not specified'}
Number of Travelers: ${values['number-of-travelers'] || 'Not specified'}
Group/Private Tour: ${values['group-tour'] || 'Not specified'}
Package: ${values['package'] || 'International'}
City: ${values['city'] || 'Not specified'}
Previously Traveled: ${values['traveled-with-saishishirtour'] || 'No'}
Message: ${values['your-message'] || 'No message'}
Page URL: ${values['pageUrl']}
Submission Time: ${new Date().toISOString()}`,
        },
      ];

      const teleCrmPayload = { fields, actions };

      const response = await fetch(TELECRM_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TELECRM_BEARER_TOKEN}`,
          'Accept': 'application/json',
        },
        body: JSON.stringify(teleCrmPayload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`TeleCRM failed: ${response.status} - ${errorText}`);
      }

      console.log('TeleCRM sent successfully');
      return true;
    } catch (error) {
      console.error('TeleCRM error:', error);
      throw error;
    }
  };

  const onFinish = async (values) => {
    setIsSubmitting(true);

    // Prepare common data for all destinations
    const commonData = {
      ...values,
      fullPhone: `${values['countryCode']}${values['your-number']}`,
      submissionTime: new Date().toISOString(),
      pageUrl: window.location.href,
      leadSource: 'Sri Lanka Tour Landing Page'
    };

    let successCount = 0;
    const errors = [];

    try {
      // Send to all three destinations in parallel
      const promises = [
        sendToTeleCRM(values).catch(error => {
          errors.push(`TeleCRM: ${error.message}`);
          return false;
        }),
        sendToMakeWebhook(commonData).catch(error => {
          errors.push(`Make.com: ${error.message}`);
          return false;
        }),
        sendToWeb3Forms(commonData).catch(error => {
          errors.push(`Web3Forms: ${error.message}`);
          return false;
        })
      ];

      const results = await Promise.all(promises);
      successCount = results.filter(result => result === true).length;

      // Reset form fields
      form.resetFields();
      // Set default values again after reset
      form.setFieldsValue({
        international: 'SRILANKA',
        package: 'International',
        pageUrl: window.location.href,
        submissionTime: new Date().toISOString(),
        countryCode: '+91',
        leadSource: 'Sri Lanka Tour Landing Page',
        groupTour: 'Not Specified',
        traveledWithSaishishirtour: 'No',
      });
      setSelectedCountryCode('+91');

      // Show success message based on results
      if (successCount === 3) {
        message.success('Form submitted successfully to all systems!');
      } else if (successCount > 0) {
        message.warning(`Form submitted to ${successCount}/3 systems. Some submissions failed.`);
        console.warn('Submission errors:', errors);
      } else {
        throw new Error('All submissions failed');
      }

      // Show success modal and confetti if at least one succeeded
      if (successCount > 0) {
        triggerConfetti();
        setShowSuccessModal(true);
        setCountdown(1);
      }

    } catch (error) {
      console.error('Form submission error:', error);
      console.error('All errors:', errors);
      message.error('Failed to submit form. Please try again or contact support.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    router.push('/srilanka-tour-package-lp/thank-you');
  };

  const handleCountryCodeChange = (value) => {
    setSelectedCountryCode(value);
    form.setFieldsValue({ countryCode: value });
  };

  return (
    <>
      <section>
        <div className="py-md-5">
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
                            rules={[{ required: true, message: 'Please enter your name' }]}
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
                          <Form.Item name="countryCode">
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
                              { required: true, message: 'Please enter your phone number' },
                              { pattern: /^[0-9]{10,12}$/, message: 'Please enter a valid phone number' }
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

                        {/* <Col span={24}>
                          <Form.Item 
                            name="your-email" 
                            rules={[{ type: 'email', message: 'Please enter a valid email' }]}
                          >
                            <Input 
                              prefix={<MailOutlined className="text-primary pe-1" />}
                              placeholder="Email address" 
                              className="rounded-pill"
                              style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                            />
                          </Form.Item>
                        </Col> */}

                        <Col xs={24}>
                          <Form.Item name="tour-month">
                            <Select 
                              placeholder="Preferred travel month"
                              className="rounded-pill"
                              style={{ height: '50px', border: 'none', background: 'rgba(240, 240, 240, 0.8)' }}
                              suffixIcon={<CalendarOutlined className="text-primary" />}
                            >
                            <Select.Option value="4D 3N - ₹29,000 - Without Flight">4D 3N - ₹29,000 - Without Flight</Select.Option>
<Select.Option value="5D 4N - ₹39,000 - Without Flight">5D 4N - ₹39,000 - Without Flight</Select.Option>
<Select.Option value="6D 5N - ₹49,000 - Without Flight">6D 5N - ₹49,000 - Without Flight</Select.Option>
<Select.Option value="7D 6N - ₹85,000 - With Flight">7D 6N - ₹85,000 - With Flight</Select.Option>

                            </Select>
                          </Form.Item>
                        </Col>

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

                      <Form.Item name="pageUrl" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="submissionTime" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="leadSource" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="international" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="package" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="groupTour" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="traveledWithSaishishirtour" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="sag" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="dom" hidden>
                        <Input />
                      </Form.Item>
                      <Form.Item name="score" hidden>
                        <InputNumber />
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

      {/* <Modal
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
      </Modal> */}

      <style jsx global>{`
        .ant-input, .ant-select-selector, .ant-input-affix-wrapper, .ant-input-number {
          transition: all 0.3s !important;
        }
        
        .ant-input:focus, 
        .ant-select-focused .ant-select-selector,
        .ant-input-affix-wrapper-focused,
        .ant-input-number-focused {
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