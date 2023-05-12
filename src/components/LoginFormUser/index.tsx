// // import { Button, Checkbox, Form, Input, message } from "antd";
// // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // import { ButtonLogin, Circle, FormLogin, InputCustom, LabelCustom, LoginWrapper, Title } from "../styles";
// // // import data from '../../
// // import "firebase/firestore";
// // import { getDatabase, ref, child, get, onValue } from "firebase/database";
// // import { db } from "../../Firebase";
// // import Password from "antd/es/input/Password";
// // const LoginFormUser = () => {
// //     const [form] = Form.useForm();
// //     // const navigate = useNavigate();

// //     // const dbRef = ref(db);
// //     // get(child(dbRef, `users/phunghoc`)).then((snapshot) => {
// //     //   if (snapshot.exists()) {
// //     //     console.log(snapshot.val());
// //     //   } else {
// //     //     console.log("No data available");
// //     //   }
// //     // }).catch((error) => {
// //     //   console.error(error);
// //     // });

// //     //////////
// //     // get(child(dbRef, "users/phunghoc"))
// //     // .then((snapshot) => {
// //     //     snapshot.forEach((child) => {
// //     //         console.log(child.key);
// //     //         console.log("ok");
            
// //     //     })
// //     // })
// //     // .catch((error)=>{
// //     //     console.error(error);
// //     // });

// //     const onSubmit = async () => {
// //         const data = await form.validateFields();
// //         // if(data.username === "admin" && data.password === "admin123"){
// //         //     localStorage.setItem("token",data.username + " loged in");
// //         //     // navigate("/ReactGreen/users")
// //         //         message.warning("ok");

// //         // }
// //         // else{
// //         //     message.error("Tên người dùng hoặc mật khẩu không đúng");
// //         // }

// //         const dbRef = ref(db);
// //          get(child(dbRef, `user`)).then((snapshot) => {
// //             snapshot.forEach((child) => {
// //                 if(data.username === child.val() && data.password === child.val()){
// //                     message.warning("ok");
// //                     console.log("ok");

// //                 }
// //                 else{
// //                     message.error("Tên người dùng hoặc mật khẩu không đúng");
// //                 }
                        
// //                     })
// //         }).catch((error) => {
// //             console.error(error);
// //             message.error("không đúng");

// //           });

// //     }

// //     return(
// //         <div>
// //         <LoginWrapper>
// //             <Title>Đăng nhập</Title>
// //             <FormLogin form={form} layout="vertical">
// //                 <LabelCustom>Tên đăng nhập</LabelCustom>
// //                 <Form.Item name="username" rules={[{required: true, message:"Tên người dùng là bắt buộc"}]}>
// //                     <InputCustom/>
// //                 </Form.Item>
// //                 <LabelCustom>Mật khẩu</LabelCustom>
// //                 <Form.Item name="password" rules={[{required: true, message:"Mật khẩu là bắt buộc"}]}>
// //                     <Input.Password />
// //                 </Form.Item>
// //                 <div className="forgot__pass">
// //               <Form.Item
// //                 name="remember"
// //                 valuePropName="checked"
// //                 className="remember__login text-green-700"
// //               >
// //                 <Checkbox>Remember me</Checkbox>
// //               </Form.Item>
// //               <a >Quên mật khẩu</a>
// //                 </div>
// //             </FormLogin>
// //             <ButtonLogin onClick={onSubmit}>Đăng nhập</ButtonLogin>
       
// //         </LoginWrapper>
// //         {/* <Circle pos="top"/>
// //         <Circle pos="bottom"/> */}
// //         </div>     
// //     );
// // }

// // export default LoginFormUser;
// import React, {useState} from 'react';
// import {  signInWithEmailAndPassword   } from 'firebase/auth';
// import { auth } from '../../Firebase';
// import { NavLink, useNavigate } from 'react-router-dom'
 
// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
       
//     const onLogin = (e:any) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             navigate("/home")
//             console.log(user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage)
//         });
       
//     }
 
//     return(
//         <>
//             <main >        
//                 <section>
//                     <div>                                            
//                         <p> FocusApp </p>                       
                                                       
//                         <form>                                              
//                             <div>
//                                 <label htmlFor="email-address">
//                                     Email address
//                                 </label>
//                                 <input
//                                     id="email-address"
//                                     name="email"
//                                     type="email"                                    
//                                     required                                                                                
//                                     placeholder="Email address"
//                                     onChange={(e)=>setEmail(e.target.value)}
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="password">
//                                     Password
//                                 </label>
//                                 <input
//                                     id="password"
//                                     name="password"
//                                     type="password"                                    
//                                     required                                                                                
//                                     placeholder="Password"
//                                     onChange={(e)=>setPassword(e.target.value)}
//                                 />
//                             </div>
                                                
//                             <div>
//                                 <button                                    
//                                     onClick={onLogin}                                        
//                                 >      
//                                     Login                                                                  
//                                 </button>
//                             </div>                               
//                         </form>
                       
//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/signup">
//                                 Sign up
//                             </NavLink>
//                         </p>
                                                   
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }
 
// export default Login
import React from 'react'
import { ChangeEvent, FormEvent, useState } from 'react'
import LogoAlta from '../../shared/images/LogoAlta.png'
import Banner from '../../shared/images/Group341.png'
import { db } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import  firebase  from '@firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { message } from 'antd'
const defaultFormFields = {
  username: '',
  password: '',
}

const LoginFormUser = () => {

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
      // console.log(`${doc.id} => ${doc.data().username} ${doc.data().password}`);
        if (doc.data().username===username && doc.data().password===password) {
          message.success('Đăng nhập thành công!')
          localStorage.setItem("token",doc.data().username + " loged in");
          resetFormFields()
          navigate('/Dashboard')
        }
    });
    const token = localStorage.getItem(`token`)
      if(!token){
        message.error('Sai mật khẩu hoặc tài khoản!');
  }
    


    // try {
      // Send the username and password to firebase
      // const userCredential = await signInUser(username, password)

      // if (userCredential) {
      //   resetFormFields()
      //   navigate('Alta/Dashboard')
      // }
      
    // } catch (error:any) {
    //   console.log('User Sign In Failed', error.message);
    // }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value })
  }

  return(
    <div className="App">
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
            <input type="submit" />
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
