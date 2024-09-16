import React from 'react';
import { Button, Form, Input } from 'antd';
const ConFormCom = () => {
  const [form] = Form.useForm();
  return (

    <Form
      form={form}
      layout="vertical"

    >

      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        className='pt-1'
        name="Email"
        label="Email"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        className='pt-1'
        name="Subject"
        label="Subject"
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item
        className='pt-1'
        name="Message"
        label="Message"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea rows={10} size="large" />
      </Form.Item>

      <Form.Item
        className='d-flex justify-content-start align-items-center'
      >
        <Button className='me-3' type="primary" danger htmlType="submit">
          Submit
        </Button>
        <Button danger onClick={() => form.resetFields()}>
          Reset
        </Button>
      </Form.Item>

    </Form >
  );
};
export default ConFormCom;