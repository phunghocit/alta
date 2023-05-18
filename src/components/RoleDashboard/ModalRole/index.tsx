import React, { useEffect, useState } from 'react'
import { Checkbox, Col, Divider, Form, Input, Row, message } from 'antd'
import { CancelButton, SubmitButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../../firebase/firebase';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Chức năng X', 'Chức năng Y', 'Chức năng Z'];
const plainOptionsB = ['Chức năng G', 'Chức năng H', 'Chức năng K'];
// const plainOptionsB = ['Chức năng X', 'Chức năng Y', 'Chức năng Z'];
const defaultCheckedList = [''];
// const defaultCheckedListB = [''];
const ModalRole = () => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    // const [form2] = Form.useForm();
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
    const [checkedListB, setCheckedListB] = useState<CheckboxValueType[]>();
    // const [indeterminate, setIndeterminate] = useState(true);
    // const [indeterminateB, setIndeterminateB] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    // const [checkAllB, setCheckAllB] = useState(false);

    
    const HandleCreate = async () => {
        const data = await form.validateFields();
        // console.log(data);
        await addDoc(collection(db,"roles"), {
          name: data.namerole,
          description: data.description,  
          function:checkedList,
          functionb:checkedListB
          })  
  
    
    }
    const HandleCancel = () => {
        // navigate(`/ServiceManagement/Table`)
    
    }
    const onChange = (list: CheckboxValueType[]) => {
        // console.log(list);
        setCheckedList(list);
      };
      const onChangeB = (listB: CheckboxValueType[]) => {
        // console.log(listB);
        setCheckedListB(listB);
        
      };
    // const onCheckAllChange = (e: CheckboxChangeEvent) => {
    //     setCheckedList(e.target.checked ? plainOptions : []);
    //     setIndeterminate(false);
    //     setCheckAll(e.target.checked);
    //   };
    //   useEffect(()=>{
    //     console.log(checkedList);

    //   },[checkedList])

      useEffect(()=>{
        console.log(checkedList);
        console.log(checkedListB);
        // console.log(checkedListB);
      },[checkedList,checkedListB])
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
            <Form.Item label="Nhóm chức năng A" name="Role_group_A">
              {/* <Checkbox
                indeterminate={indeterminate}
                onChange={onCheckAllChange}
                checked={checkAll}
              >
                Check all
              </Checkbox> */}
              {/* <Divider /> */}
              <CheckboxGroup
                options={plainOptions}
                onChange={onChange}
              />
            </Form.Item>
            
            <Form.Item label="Nhóm chức năng B" name="role_group_B">
              <CheckboxGroup      
                options={plainOptionsB}
                onChange={onChangeB}
              />
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
