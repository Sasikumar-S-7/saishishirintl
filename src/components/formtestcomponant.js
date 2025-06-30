'use client';
import { useEffect, useState } from 'react';
import { Form, Input, Select, Button, message, Modal } from 'antd';
import { useRouter } from 'next/navigation';
import { CheckCircleOutlined } from '@ant-design/icons';

const { TextArea } = Input;

// ✅ Your actual API token and endpoint
const TELECRM_API_URL = 'https://api.telecrm.in/enterprise/66ec0997759f100018f5cbfe/autoupdatelead';
const TELECRM_BEARER_TOKEN = 'a7c4718a-f44c-4c57-a446-b785ae1892e91740397197874:fe019006-f5b8-4fb5-81c6-7c0bfeaf81fe';

export default function BhutanTourLanding() {
  const [form] = Form.useForm();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    form.setFieldsValue({
      international: 'International',
      pageUrl: window.location.href,
      submissionTime: new Date().toISOString(),
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

  const onFinish = async (values) => {
    setIsSubmitting(true);

    const fields = {
      name: values['your-name'],
      phone: values['your-number'],
      email: values['your-email'],
    };

    const actions = [
      {
        type: 'SYSTEM_NOTE',
        text: `Lead Source: Bhutan Tour\nTour Month: ${values['tour-month']}\nMessage: ${values['your-message']}\nPackage: ${values['international']}\nPage URL: ${values['pageUrl']}`,
      },
    ];

    const payload = { fields, actions };

    console.log("Submitting to TeleCRM:", payload);

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

      // Clear form fields
      form.resetFields();
      // Reset the hidden fields
      form.setFieldsValue({
        international: 'International',
        pageUrl: window.location.href,
        submissionTime: new Date().toISOString(),
      });

      // Show success message
      message.success('Form submitted successfully!');
      
      // Show modal immediately and start countdown
      setShowSuccessModal(true);
      setCountdown(2); // 2 seconds countdown (will redirect when it reaches 0)

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

  return (
    <>
      <div className="container py-5">
        <h1 className="text-center mb-4">Bhutan Tour Package</h1>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="bg-light border rounded p-4"
        >
          <Form.Item name="your-name" label="Full Name" rules={[{ required: true }]}>
            <Input placeholder="Full Name" size="large" />
          </Form.Item>

          <Form.Item name="your-number" label="Phone Number" rules={[{ required: true }]}>
            <Input placeholder="Phone number" size="large" />
          </Form.Item>

          <Form.Item name="your-email" label="Email Address" rules={[{ type: 'email', required: true }]}>
            <Input placeholder="Email Address" size="large" />
          </Form.Item>

          <Form.Item name="tour-month" label="Select Tour Month" rules={[{ required: true }]}>
            <Select placeholder="Select Tour Month" size="large">
              <Select.Option value="June 2025">June 2025</Select.Option>
              <Select.Option value="July 2025">July 2025</Select.Option>
              <Select.Option value="August 2025">August 2025</Select.Option>
              <Select.Option value="Sep 2025">Sep 2025</Select.Option>
              <Select.Option value="Oct 2025">Oct 2025</Select.Option>
              <Select.Option value="Nov 2025">Nov 2025</Select.Option>
              <Select.Option value="Dec 2025">Dec 2025</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="your-message" label="Your Message" rules={[{ required: true }]}>
            <TextArea placeholder="Your Message" rows={4} />
          </Form.Item>

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

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              block 
              size="large"
              loading={isSubmitting}
              style={{ height: '50px', fontSize: '16px' }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Tour Request'}
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Success Modal */}
      <Modal
        title={null}
        open={showSuccessModal}
        footer={null}
        closable={false}
        centered
        width={400}
        maskClosable={false}
      >
        <div className="text-center py-4">
          <CheckCircleOutlined 
            style={{ 
              fontSize: '64px', 
              color: '#52c41a', 
              marginBottom: '16px' 
            }} 
          />
          <h2 style={{ 
            color: '#262626', 
            marginBottom: '12px',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Request Submitted Successfully!
          </h2>
          <p style={{ 
            color: '#8c8c8c', 
            marginBottom: '20px',
            fontSize: '16px'
          }}>
            Thank you for your interest in our Bhutan Tour package.
            <br />
            Our team will contact you shortly.
          </p>
          
          <div style={{
            background: '#f6ffed',
            border: '1px solid #b7eb8f',
            borderRadius: '6px',
            padding: '12px',
            marginBottom: '20px'
          }}>
            <p style={{ 
              margin: 0, 
              color: '#389e0d',
              fontSize: '14px'
            }}>
              ✓ Confirmation email sent
              <br />
              ✓ Tour details will be shared within 24 hours
            </p>
          </div>

          {countdown > 0 && (
            <p style={{ 
              color: '#1890ff', 
              fontSize: '14px',
              margin: '10px 0'
            }}>
              Redirecting in {countdown} seconds...
            </p>
          )}

          <Button 
            type="primary" 
            onClick={handleModalClose}
            size="large"
            style={{ minWidth: '120px' }}
          >
            Continue
          </Button>
        </div>
      </Modal>
    </>
  );
}