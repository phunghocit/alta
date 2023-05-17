import { Checkbox, Form, Input, SelectProps, Space, message } from "antd";
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
} from "../../DeviceDashboard/ModalFormDevice/styles";
import { addDoc, collection, setDoc, doc, getDocs } from "firebase/firestore";
import { Button,Select,Row,Col } from 'antd'
import { db } from "../../../firebase/firebase";
import { useState } from "react";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useNavigate } from "react-router-dom";


const ModalFormService = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();


  const HandleCreate = async () => {
    const data = await form.validateFields();
    // console.log(data);
    await addDoc(collection(db,"services"), {
      id: data.id,
      name: data.name,
      description: data.description,
        status: data.status
      })  .then((docRef) => {console.log("Document written:", docRef.id)
      message.success('Thêm thành công!')
      navigate(`/ServiceManagement/Table`)

    })
      .catch((error) => {console.error("Error add doc: ", error);
      });

  };
  const HandleCancel = () => {
    navigate(`/ServiceManagement/Table`)

}
  
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  return (
    //Họ và tên
    <Form form={form} layout="vertical" >
      <Row gutter={[48, 16]}>
        <Col span={12}>
          <Form.Item
            label="Mã dịch vụ"
            name="id"
            rules={[{ required: true, message: "Mã dịch vụ là bắt buộc!" }]}
          >
            <Input placeholder="Nhập mã dịch vụ" />
          </Form.Item>
          <Form.Item
            label="Tên dịch vụ"
            name="name"
            rules={[{ required: true, message: "Tên dịch vụ là bắt buộc!" }]}
          >
            <Input placeholder="Nhập Tên dịch vụ" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Mô tả"
            name="description"
            // rules={[{ required: true, message: "Địa chỉ IP là bắt buộc!" }]}
          >
            <Input placeholder="Mô tả dịch vụ" />
          </Form.Item>
          <Form.Item
            name="status"
            label="Tình trạng"
            rules={[{ required: true, message: "Không được để trống" }]}
          >
            <Select
              options={[
                { value: true, label: "Ngưng hoạt động" },
                { value: false, label: "Hoạt động" },
              ]}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row  gutter={[48, 32]}>
        <Form.Item
          label="Quy tắc cấp số"
          name="id"
          rules={[{ required: true, message: "Vui lòng chọn!" }]}
        >
          <Row>
            <Checkbox value="A">Tăng tự động từ: 0001 đến 9999</Checkbox> 
          </Row>
          <Row>
            <Checkbox value="B">Prefix: 0001</Checkbox>
          </Row>
          <Row>
            <Checkbox value="C">Surfix: 0001</Checkbox>
          </Row>
          <Row>
            <Checkbox value="D">Reset mỗi ngày</Checkbox>
          </Row>
        </Form.Item>
      </Row>

      <Row>
        <CancelButton onClick={HandleCancel}>Huỷ bỏ</CancelButton>
        <SubmitButton onClick={HandleCreate}>Thêm Dịch vụ</SubmitButton>
      </Row>
    </Form>
  );
};

export default ModalFormService;