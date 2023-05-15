import { doc, getDoc } from '@firebase/firestore';
import { Button, Descriptions } from 'antd'
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase/firebase';
import { useParams } from 'react-router-dom';
interface DeviceInfo {
  id: string,
  namedevice: string,
  ip: string,
  active_status: string,
  type: string,
  connection_status: string,
  username: string,
  password: string,
  services_used: string,
}

const DetailDevice = () => {
  const [device] = useState<DeviceInfo | any>();
  let { iddevices } = useParams();
  console.log(iddevices);
  
  const fetchDataServices = async () => {
    const docRef = doc(db, "devices",`iddevices`);
    const docSnap = await getDoc(docRef);
    device(docSnap.data())
    console.log(device);
    
  };
  useEffect(()=>{
    fetchDataServices();
},[])
  
  return (
    <div>
      <Descriptions
        title="Custom Size"
        column={{  md: 2 }}
        extra={
          <Button type="primary" >
            Cập nhật thiết bị
          </Button>
        }
      >
        <Descriptions.Item label="Mã thiết bị:">
          Cloud Database
        </Descriptions.Item>
        <Descriptions.Item label="Tên thiết bị:">sad</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ IP:">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Loại thiết bị:">$80.00</Descriptions.Item>
        <Descriptions.Item label="Tên đăng nhập:">$20.00</Descriptions.Item>
        <Descriptions.Item label="Mật khẩu:">$60.00</Descriptions.Item>
        <Descriptions.Item label="Dịch vụ sử dụng:">$60.00</Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default DetailDevice
