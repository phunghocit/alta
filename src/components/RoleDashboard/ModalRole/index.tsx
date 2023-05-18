import React from 'react'
import { Checkbox, Col, Form, Input, Row, message } from 'antd'
import { CancelButton, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../../firebase/firebase';

const ModalRole = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    // const [form2] = Form.useForm();


    const HandleCreate = async () => {
        const data = await form.validateFields();
        // console.log(data);
        await addDoc(collection(db,"roles"), {
          name: data.namerole,
          description: data.description,  
          })  
        await addDoc(collection(db, "roles","setrole"), {
          id: 'roleA',
        })
          .then((docRef) => {
            console.log("Document written:", docRef.id);
            message.success("Thêm thành công!");
            // navigate(`/ServiceManagement/Table`);
          })
          .catch((error) => {
            console.error("Error add doc: ", error);
          });
    
    }
    const HandleCancel = () => {
        // navigate(`/ServiceManagement/Table`)
    
    }
  return (
    <Form form={form} layout="vertical">
      <Row gutter={[48, 32]}>
        <Col span={12}>
          <Form.Item
            label="Tên vai trò"
            name="namerole"
            rules={[{ required: true, message: "Tên vai trò là bắt buộc!" }]}
          >
            <Input placeholder="Nhập Tên vai trò" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Phân quyền chức năng"
            name="setrole"
            // rules={[{ required: true, message: "Vui lòng chọn chức năng!" }]}
          >
                      <Form.Item
            label="Nhóm chức năng A"
            name="Role_group_A"
          >
              <Row>
                <Checkbox value="A">Tất cả</Checkbox>
              </Row>
              <Row>
                <Checkbox value="B">Chắc năng x</Checkbox>
              </Row>
              <Row>
                <Checkbox value="C">Chắc năng y</Checkbox>
              </Row>
              <Row>
                <Checkbox value="D">Chắc năng Z</Checkbox>
              </Row>
              </Form.Item>

              <Form.Item
            label="Nhóm chức năng B"
            name="role_group_B"
          >
              <Row>
                <Checkbox value="A">Tất cả</Checkbox>
              </Row>
              <Row>
                <Checkbox value="B">Chắc năng x</Checkbox>
              </Row>
              <Row>
                <Checkbox value="C">Chắc năng y</Checkbox>
              </Row>
              <Row>
                <Checkbox value="D">Chắc năng Z</Checkbox>
              </Row>
              </Form.Item>

          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Mô tả"
            name="description"
            // rules={[{ required: true, message: "Địa chỉ IP là bắt buộc!" }]}
          >
            <Input placeholder="Nhập mô tả" />
          </Form.Item>
        </Col>

        <Col span={12} />
      </Row>
      <Row gutter={[48, 32]}>
      <CancelButton onClick={HandleCancel}>Huỷ bỏ</CancelButton>
        <SubmitButton onClick={HandleCreate}>Thêm Dịch vụ</SubmitButton>
      </Row>
    </Form>
  );
}

export default ModalRole
