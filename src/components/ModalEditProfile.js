import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const ModalEditProfile = ({ isOpen, onClose, user, onSubmit }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const values = await form.validateFields();
      onSubmit(values);
      onClose();
    } catch (error) {
      console.error("Error updating user profile: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open={isOpen} onCancel={onClose} footer={null}>
      <Form
        form={form}
        initialValues={{ name: user.name, website: user.website, bio: user.bio }}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[{ required: true, message: "Please input your website!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Bio"
          name="bio"
          rules={[{ required: true, message: "Please input your bio!" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleSubmit} loading={isLoading}>
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditProfile;
