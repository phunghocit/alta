import React from 'react'
import { ChangeEvent, FormEvent, useState } from 'react'
import LogoAlta from '../../shared/images/LogoAlta.png'
import Banner from '../../shared/images/Group341.png'
import { db } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import  firebase  from '@firebase/app'
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'
import { Form, message } from 'antd'
import { FormLogin, InputCustom, LabelCustom, LoginWrapper } from './styles'
const defaultFormFields = {
  username: '',
  password: '',
}

const LoginFormUser = () => {
  const [form] = Form.useForm();

  const [formFields, setFormFields] = useState(defaultFormFields)
  const { username, password } = formFields
  const navigate = useNavigate()


  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc:any) => {
        if (doc.data().username===username && doc.data().password===password) {
          message.success('Đăng nhập thành công!')
          localStorage.setItem("token",doc.id);
          resetFormFields()
      // console.log(accountlogin);
      // console.log(`${doc.id} => ${doc.data().username} ${doc.data().password}`);

          navigate('/Dashboard')
        }
    });
    const token = localStorage.getItem(`token`)
      if(!token){
        message.error('Sai mật khẩu hoặc tài khoản!');
  }

  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }

  return(
    <div>
        <LoginWrapper>
        <FormLogin form={form} layout="vertical">
                <LabelCustom>Username</LabelCustom>
                <Form.Item name="username" rules={[{required: true, message:"Tên người dùng là bắt buộc"}]}>
                    <InputCustom/>
                </Form.Item>
                <LabelCustom>Mật khẩu</LabelCustom>
                <Form.Item name="password" rules={[{required: true, message:"Mật khẩu là bắt buộc"}]}>
                    <InputCustom type="password"/>
                </Form.Item>
            </FormLogin>
        </LoginWrapper>

      <div className="card" >
        <div className='logo-alta'>
          <a href="" target="_blank">
            <img src={LogoAlta} className="logo Alta" alt="Alta logo" />
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input type="submit" value="Đăng nhập" />
            {/* <input type="submit" value="Quên mật khẩu ?" /> */}
            
          </div>
        </form>
      </div>
      <div className='logo-banner'>
          <a href="https://reactjs.org" target="_blank">
            <img src={Banner} className="logo Banner" alt="Banner logo" />
          </a>
          <p>Hệ thống</p>
          <p>QUẢN LÝ XẾP HÀNG</p>
        </div>
    </div>
  )
  };
export default LoginFormUser;
