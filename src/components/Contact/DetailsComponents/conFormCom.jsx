import React from 'react';
import { Button, Flex, Form, Input} from 'antd';
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
          wrapperCol={{
            offset: 6,
          }}
      >
          <Flex gap="large">
            <Button type="primary" danger htmlType="submit">
              Submit
            </Button>
            <Button danger onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Flex>
      </Form.Item>
    
    </Form>
  );
};
export default ConFormCom;