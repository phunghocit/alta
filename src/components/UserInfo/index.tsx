import { collection, doc, getDoc, getDocs, query, where } from "@firebase/firestore";
import { Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";
const DEFAULT_USER = {
  fullname: "",
  phone: "",
  email: "",
  username: "",
  password: "",
  role: "",
};

interface UserInfo {
  email: string,
  fullname: string,
  password: string,
  phone: string,
  role: string,
  status: string,
  username: string
}

const UserInfo = () => {
  const [formData, setFormData] = useState(DEFAULT_USER);
  const [form] = Form.useForm();
  const { userid } = useParams();
  const [userInfo, setUserInfo] = useState<UserInfo | any>();

  console.log(localStorage.getItem('token'))
  // let idacc=;

  const fetchData = async () => {
    const docRef = doc(db, "users",`${localStorage.getItem('token')}`);
    const docSnap = await getDoc(docRef);
    setUserInfo(docSnap.data())
    // const docRef = query(
    //   collection(db, "users"),
    //   where("username", "==", localStorage.getItem("token"))
    // ); //tra ve collection
    // const docSnap = await getDocs(docRef);
    // // console.log(docSnap)
    // docSnap.forEach((doc) => {
    //   //lấy từng doc trong firebase
    //   console.log(doc.id, " => ", doc.data());
    //   setUserInfo(doc.data());
    // });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(userInfo){
      form.setFieldsValue(userInfo);
    }
    
  }, [userInfo]);
  return (
    <Form form={form} layout="vertical">
      {/* <Title>Quản lý tài khoản</Title>
    <Title>Thông tin tài khoản</Title> */}
      <Row>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            name="fullname"
            label="Họ tên"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input disabled/>
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
            <Input disabled/>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email:"
            rules={[
              { required: true, message: "Không được để trống" },
              { type: "email", message: "Định dạng không đúng!" },
            ]}
          >
            <Input disabled/>
          </Form.Item>
        </Col>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            name="username"
            label="Tên đăng nhập"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input disabled/>
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input disabled/>
          </Form.Item>
          <Form.Item
            name="role"
            label="Vai trò"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Input disabled/>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default UserInfo;
