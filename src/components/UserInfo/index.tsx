import { Col, Form, Input, Row } from 'antd';
import React, { useState } from 'react'
import formFields from '../LoginFormUser';
const DEFAULT_USER = {fullname:"",phone:"", email:"", username:"", password:"", role:""}

const UserInfo = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);

  return (
    <Form layout="vertical">
      {/* <Title>Quản lý tài khoản</Title>
    <Title>Thông tin tài khoản</Title> */}
      <Row>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            name="fullname"
            label="Họ tên"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input  placeholder='formFields={}'/>
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (/((09|03|07|08|05||84)+([0-9]{8})\b)/g.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Vui lòng kiểm tra lại!"));
                },
              }),
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email:"
            rules={[
              { required: true, message: "Không được để trống" },
              { type: "email", message: "Định dạng không đúng!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="role"
            label="Vai trò"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default UserInfo
