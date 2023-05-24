import { Button, Form, Input } from "antd";
import styled, { keyframes } from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  @media screen and (max-width:600px){
    font-size: 16px;
    width: 80vw;
    height: 60vh;
  }
`;
export const LoginForm = styled.div`
display: flex;
 width: 40%;
  background: #b1b1b1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
;
`;
export const LoginBanner = styled.div`
display: flex;

  width: 60%;
  justify-content: center;
  align-items: center;
`;
export const ImgLogo = styled.img`

`
export const ImgBanner = styled.img`
  width: 60%;
`
export const Title1 = styled.p`
position: absolute;
  font-size: 1.5rem;
  margin: 0;
  /* float: right; */
  bottom: 50%;
  left: 73%;
  font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 51px;
/* or 150% */

text-align: center;

/* Orange/$-Orange-500 */

color: #FF7506;
  @media screen and (max-width:600px){
    font-size: 4rem;
  }
`;
export const Title2 = styled.p`
position: absolute;
  font-size: 2rem;
  margin: 0;
  /* float: right; */
  bottom: 40%;
  left: 73%;
  font-family: 'Nunito';
font-style: normal;
font-weight: 1000;
font-size: 36px;
line-height: 54px;
/* identical to box height, or 150% */

text-align: center;

/* Orange/$-Orange-500 */

color: #FF7506;
  @media screen and (max-width:600px){
    font-size: 4rem;
  }
`;


export const FormLogin = styled(Form)`
display: block;
  background: transparent;
  width: 60%;
  margin-top: 3rem; 

`;

export const LabelCustom = styled.h3`
  font-size: 1rem;
  margin: 0;
  /* margin-bottom: 0.1rem;
  margin-top: 3rem; */

  color: black;

  @media screen and (max-width:600px){
    font-size: 1.5rem;
  }
`;

export const InputCustom = styled(Input)`

`

export const ButtonLogin = styled(Button)`
  border: none;
  margin-top: 2rem;
  width: auto;
  height: auto;
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
  background: #FF9138;
  padding: 0.25rem 1.5rem;
  border-radius: 0.5rem;
  @media screen and (max-width:600px){
    font-size: 1rem;
    padding:1rem 2.5rem;
  }
`;

export const SubmitButton = styled(Button)`
    font-size: 1rem;
    font-weight: bold;
    height: auto;
    width: auto;
    padding: 0.25rem 1.25rem;

    background:#4096ff;
    color: white;
    border: 2px solid #4096ff;

    :hover{
        color:#4096ff;
        background: white;
    }
`
export const CancelButton = styled(Button)`
    font-size: 1rem;
    font-weight: bold;
    height: auto;
    width: auto;
    padding: 0.25rem 1.25rem;

    background:#4096ff;
    color: white;
    border: 2px solid #4096ff;

    :hover{
        color:#4096ff;
        background: white;
    }
`

