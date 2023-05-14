import { Form, Input, message } from "antd";
import {
  ButtonShowPassword,
  CancelButton,
  Container,
  FormContainer,
  InputBox,
  InputField,
  Register,
  SubmitButton,
  Title,
} from "./styles";
import { addDoc, collection, setDoc, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Button, Select, Row, Col } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const DEFAULT_USER = {
  fullname: "",
  phone: "",
  email: "",
  role: "",
  username: "",
  password: "",
  confirm_password: "",
  status: "",
};
const RegisterFormUser = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(DEFAULT_USER);

  const HandleSignUp = async () => {
    const data = await form.validateFields();
    // console.log(data);
    await addDoc(collection(db, "users"), {
      fullname: data.fullname,
      phone: data.phone,
      email: data.email,
      role: data.role,
      username: data.username,
      password: data.password,
      status: data.status,
    })
      .then((docRef) => {
        // console.log("Document written:", docRef.id);
        message.success("Thêm thành công!");
        navigate(`/AccountManagement`);
      })
      .catch((error) => {
        message.error("Thêm thất bại!");
        // console.error("Error add doc: ", error);
      });
  };
  const HandleCancel = () => {
    setFormData(DEFAULT_USER);
    navigate(`/AccountManagement`);
  };
  return (
    //Họ và tên
    <Form form={form} layout="vertical">
      <Title>Quản lý tài khoản</Title>
      <Title>Thông tin tài khoản</Title>
      <Row>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            name="fullname"
            label="Họ tên"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input />
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
            <Select
              options={[
                { value: "Kế toán", label: "Kế toán" },
                { value: "Quản lý", label: "Quản lý" },
                { value: "Admin", label: "Admin" },
              ]}
            />
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
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm_password"
            label="Nhập lại mật khẩu"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Vui lòng kiểm tra lại!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="status"
            label="Tình trạng"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Select
              options={[
                { value: "Tất cả", label: "Tất cả" },
                { value: "Ngưng hoạt động", label: "Ngưng hoạt động" },
                { value: "Hoạt động", label: "Hoạt động" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <CancelButton type="primary" onClick={HandleCancel}>
          Huỷ bỏ
        </CancelButton>
        <SubmitButton type="primary" onClick={HandleSignUp}>
          Thêm{" "}
        </SubmitButton>
      </Row>
    </Form>
  );
};

export default RegisterFormUser;
