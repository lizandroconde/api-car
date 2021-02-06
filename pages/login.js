import React, { useEffect } from "react";
import {
  LoginBox,
  LoginCard,
  ButtonLongin,
  RemenberLogin
} from "../styles/login";
import { Form, Input, Checkbox, message, Button } from "antd";
import { motion } from "framer-motion";
import { useMutation } from "@apollo/client";

import styled from "styled-components";
import { useRouter } from "next/router";
import { LOGIN_CLIENT } from "../assets/gql/client";

const ContainerForm = styled(motion.div)``;
const FormCha = styled(motion.div)``;

const Login = () => {
  const router = useRouter();
  const [getLogin] = useMutation(LOGIN_CLIENT);
  const onFinish = async (values) => {
    try {
      const { data } = await getLogin({ variables: values });
      if (data) {
        let { LoginC } = data;

        if (LoginC.status === true) {
          sessionStorage.setItem("auth", JSON.stringify(LoginC));
          router.push("/dashboard");
        } else {
          message.error("usaurio y / o contraseña incorrectos");
        }
      }
    } catch (error) {
      message.error("Ohhps ocurrio un error");
      console.log(error);
    }
  };

  useEffect(() => {
    let token = JSON.parse(sessionStorage.getItem("auth"));
    (async () => {
      if (token) {
        router.push("/dashboard");
      }
    })();
  }, []);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.9,
        staggerChildren: 0.8
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <LoginBox>
      <LoginCard>
        <ContainerForm variants={container} initial="hidden" animate="visible">
          <FormCha variants={item}>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" }
                ]}
              >
                <Input size="large" placeholder="Usuario" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" }
                ]}
              >
                <Input.Password size="large" placeholder="Contraseña" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  <RemenberLogin>Recordar Contraseña</RemenberLogin>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <ButtonLongin htmlType="submit" size="large">
                  Iniciar Session
                </ButtonLongin>
              </Form.Item>
              <Form.Item>
                <Button onClick={()=>{router.push("/singup");}} type="primary" style={{width:"100%"}} size="large">
                  Registrarse
                </Button>
              </Form.Item>
            </Form>
          </FormCha>
        </ContainerForm>
      </LoginCard>
    </LoginBox>
  );
};
export default Login;
