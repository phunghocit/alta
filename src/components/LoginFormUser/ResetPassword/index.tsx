import { Form, Input, message } from 'antd'
import React from 'react'
import { CancelButton, SubmitButton } from './styles'
import { collection, doc, getDocs, updateDoc } from '@firebase/firestore'
import form from 'antd/es/form'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../firebase/firebase'
import LogoAlta from '../../../shared/images/LogoAlta.png'
import Banner from '../../../shared/images/Frame.png'
import { FormLogin, ImgBanner, ImgLogo, LoginBanner, LoginForm, LoginWrapper, Title } from '../styles'
const ResetPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  let { iduser } = useParams();
  // console.log(iduser);

    const HandleSubmit = async () => {
      const data = await form.validateFields();

      // console.log(data);
      await updateDoc(doc(db, "users",`${iduser}`), {
        password: data.password,
        
      })
        .then(() => {
          // console.log("Document written:", docRef.id);
          localStorage.setItem("token",`${iduser}`);
          message.success("Cập nhật thành công!");
          navigate('/Dashboard')

        })
        .catch((error) => {
          message.error("Cập nhật thất bại!");
      });

    }

  return (

            <LoginWrapper>
            <LoginForm>
              <ImgLogo src={LogoAlta} className="logo Alta" alt="Alta logo" />
              <FormLogin form={form} layout="vertical">
              <Title>Đặt lại mật khẩu mới</Title>

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
      <SubmitButton onClick={HandleSubmit}>Xác nhận</SubmitButton>
    </FormLogin>
            </LoginForm>
      
            <LoginBanner>
                <ImgBanner src={Banner} className="logo Banner" alt="Banner logo" />
            </LoginBanner>
          </LoginWrapper>
  );
}

export default ResetPassword
