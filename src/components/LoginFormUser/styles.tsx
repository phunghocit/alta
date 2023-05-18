import { Button, Form, Input } from "antd";
import styled, { keyframes } from "styled-components";

export const LoginWrapper = styled.div`
  margin: 10rem auto;
  width: 20rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.1px);
  -webkit-backdrop-filter: blur(6.1px);
  border: 3px solid rgba(255, 255, 255, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width:600px){
    font-size: 16px;
    width: 80vw;
    height: 60vh;
  }
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin: 0;

  @media screen and (max-width:600px){
    font-size: 4rem;
  }
`;
export const FormLogin = styled(Form)`
  background: transparent;
  width: 100%;
`;

export const LabelCustom = styled.h3`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 0.1rem;
  margin-top: 3rem;

  color: black;

  @media screen and (max-width:600px){
    font-size: 1.5rem;
  }
`;

export const InputCustom = styled(Input)`
  background: transparent;
  border: transparent;
  border-bottom: 2px solid white;
  border-radius: 0px;
  font-size: 1.5rem;
  padding: 2px 0;
  position: relative;

  &::before {
    content: "asdasd";
    position: absolute;
    width: 100px;
    height: 20px;
    /* background-color: green; */
    top: 100%;
    right: 0;
    z-index: 1;
  }

  :hover {
  }

  :active {
  }

  :focus {
    -webkit-box-shadow: none;
    box-shadow: none;
    border-bottom: 2px solid white;
  }
`;

export const ButtonLogin = styled(Button)`
  border: none;
  margin-top: 3rem;
  width: auto;
  height: auto;
  font-size: 1.25rem;
  font-weight: bold;
  /* color: white; */
  padding: 0.25rem 1.5rem;

  transition: 0.8s ease;
  border-radius: 1rem;

  &:hover {
    /* -webkit-background-clip: text; */
    color: transparent !important;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right bottom, #6a5af9, #f62682);
  }

  @media screen and (max-width:600px){
    font-size: 1rem;
    padding:1rem 2.5rem;
  }
`;

export const Circle = styled.div`
  position: absolute;
  z-index: -1;
  width: 15rem;
  height: 15rem;
  border-radius: 50%;

`;
