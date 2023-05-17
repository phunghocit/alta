import { Form, Input, SelectProps, Space, message } from "antd";
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
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Button,Select,Row,Col } from 'antd'
import { db } from "../../../firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalFormDevice = () => {
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState([]);
  const [options,setOptions] = useState();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const fetchDataServices = async () => {
    setLoading(true)
    const docRef = collection(db, "services"); //tra ve collection 
    const docSnap = await getDocs(docRef);
    
    let newServices:any = []
    docSnap.forEach((doc) => { //lấy từng doc trong firebase
        newServices.push(
          {
              value: doc.data().name,
              label: doc.data().name,
            }
        );
        console.log(doc.id, " => ", doc.data().name);

    });
      setOptions(newServices)
      setLoading(false)
}

  const SubmitDevice = async () => {
    const data = await form.validateFields();
    // console.log(data);
    await addDoc(collection(db, "devices"), {
      id: data.id,
      namedevice: data.namedevice,
      ip: data.ip,
      active_status: data.active_status,
      type: data.type,
      connection_status: data.connection_status,
      username: data.username,
      password: data.password,
      services_used: data.services_used,
    })
      .then(() => {
        // console.log("Document written:", docRef.id);
        message.success("Thêm thành công!");
        navigate(`/DevicePage/Table`);
      })
      .catch((error) => {
        message.error("Thêm thất bại!");
    });
  };



    useEffect(()=>{
        fetchDataServices();
    },[])
    const HandleCancel = () => {
      navigate(`/DevicePage/Table`)
  
  }
  return (
    //Họ và tên
    <Form form={form} layout="vertical">
      <Row>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            label="Mã thiết bị"
            name="id"
            rules={[{ required: true, message: "Mã thiết bị là bắt buộc!" }]}
          >
            <Input placeholder="Nhập mã thiết bị" />
          </Form.Item>
          <Form.Item
            label="Tên thiết bị"
            name="namedevice"
            rules={[{ required: true, message: "Tên thiết bị là bắt buộc!" }]}
          >
            <Input placeholder="Nhập Tên thiết bị" />
          </Form.Item>
          <Form.Item
            label="Địa chỉ IP"
            name="ip"
            rules={[{ required: true, message: "Địa chỉ IP là bắt buộc!" }]}
          >
            <Input placeholder="Nhập địa chỉ IP" />
          </Form.Item>
          <Form.Item
            label="Trạng thái hoạt động"
            name="active_status"
            rules={[
              { required: true, message: "Vui lòng cập nhật trạng thái!" },
            ]}
          >
            <Select
              options={[
                { value: true, label: "Hoạt động" },
                { value: false, label: "Ngưng hoạt động" },
              ]}
             />
          </Form.Item>
        </Col>
        <Col xs={{ span: 9, offset: 1 }} lg={{ span: 9, offset: 2 }}>
          <Form.Item
            label="Loại thiết bị"
            name="type"
            rules={[{ required: true, message: "Vui lòng chọn loại thiết bị" }]}
          >
            <Select
              placeholder="Chọn loại thiết bị"
              options={[
                { value: "Kiosk", label: "Kiosk" },
                { value: "Display counter", label: "Display counter" },
              ]}
            />
            </Form.Item>
            <Form.Item
              label="Trạng thái kết nối"
              name="connection_status"
              rules={[
                { required: true, message: "Vui lòng cập nhật trạng thái!" },
              ]}
            >
              <Select
                options={[
                  { value: true, label: "Kết nối" },
                  { value: false, label: "Mất kết nối" },
                ]}
              />
          </Form.Item>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: "Tên đăng nhập là bắt buộc!" }]}
          >
            <Input placeholder="Nhập tài khoản" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Mật khẩu là bắt buộc!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Form.Item
          label="Dịch vụ sử dụng"
          name="services_used"
          rules={[{ required: true, message: "Vui lòng chọn dịch vụ" }]}
          style={{ width: "85%" }}
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Vui lòng chọn dịch vụ"
            // onChange={handleChange}
            options={options}
            loading={loading}
           />
        </Form.Item>
      </Row>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <CancelButton onClick={HandleCancel}>Huỷ bỏ</CancelButton>
        <SubmitButton onClick={SubmitDevice}>Thêm thiết bị</SubmitButton>
      </Row>
    </Form>
  );
};

export default ModalFormDevice;

