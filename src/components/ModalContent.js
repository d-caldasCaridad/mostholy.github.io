import React, { useState } from "react";
import { Modal, Input, Button, Form } from "antd";

const ModalContent = ({ isOpen, onClose, onSubmit, title, label }) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const values = await form.validateFields();
      onSubmit(values);
      onClose();
    } catch (error) {
      console.error("Error creating content: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      visible={isOpen}
      onCancel={onClose}
      title={title}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancelar
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
          onClick={handleSubmit}
        >
          Publicar
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          label={label?.charAt(0)?.toUpperCase() + label?.slice(1)}
          name={label}
          rules={[
            {
              required: true,
              message: `Please input your ${label}!`,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalContent;
