import { Form, Input, message } from 'antd'
import React from 'react'
import { CancelButton, SubmitButton } from './styles'
import { collection, getDocs } from '@firebase/firestore'
import form from 'antd/es/form'
import { useNavigate } from 'react-router-dom'
import { db } from '../../../firebase/firebase'
import { FormLogin, ImgBanner, ImgLogo, LoginBanner, LoginForm, LoginWrapper, Title } from '../styles'
import LogoAlta from '../../../shared/images/LogoAlta.png'
import Banner from '../../../shared/images/Frame.png'
const Forgetpassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

    const HandleSubmit = async () => {
      const data = await form.validateFields();

      const querySnapshot = await getDocs(collection(db, "users"));
      let check = "Email chưa đăng kí!";
      querySnapshot.forEach(async (doc: any) => {
        if (
          doc.data().email === data.email
        ) {
          check = "";
        //   localStorage.setItem("token",doc.id);
        navigate(`/ResetPassword/${doc.id}`);

        }
      });
      if (check === "Email chưa đăng kí!") {
        message.error(check);
      }
      // console.log(data);
    }
    const HandleCancel = async () => {
        navigate(`/`);

    }

  return (

        <LoginWrapper>
        <LoginForm>
          <ImgLogo src={LogoAlta} className="logo Alta" alt="Alta logo" />
              <FormLogin form={form} layout="vertical">
              <Title>Đặt lại mật khẩu</Title>
              <Form.Item
              label="Vui lòng nhập email để đặt lại mật khẩu của bạn"
              name="email"
              rules={[{ required: true, message: "Email là bắt buộc!" }]}
              >
              <Input placeholder="Nhập Email của bạn" />
              </Form.Item>
              <CancelButton onClick={HandleCancel}>Huỷ bỏ</CancelButton>
              <SubmitButton onClick={HandleSubmit}>Tiếp tục</SubmitButton>
              </FormLogin>
        </LoginForm>
  
        <LoginBanner>
            <ImgBanner src={Banner} className="logo Banner" alt="Banner logo" />
        </LoginBanner>
      </LoginWrapper>
  )
}

export default Forgetpassword
