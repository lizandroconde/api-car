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
import { NEW_CLIENT } from "../assets/gql/client";
import { VERIFI_CLIENT } from "../assets/gql/client";

const ContainerForm = styled(motion.div)``;
const FormCha = styled(motion.div)``;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  };

const SingUp = () => {
  const router = useRouter();
  const [newClient] = useMutation(NEW_CLIENT);
  const [getVerifi] = useMutation(VERIFI_CLIENT);
  const onFinish = async (values) => {
     
    try {
      const { data } = await newClient({ variables: values });
    
      if (data.crearCliente) {
        message.success("Se creo correctamente tu cuenta");
        router.push("/login");
      }
    } catch (error) {
      message.error("Ohhps ocurrio un error, vuelve a intentarlo mas tarde");
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
      <LoginCard top="15vh">
        <ContainerForm variants={container} initial="hidden" animate="visible">
          <FormCha variants={item}>
            <Form 
                 {...formItemLayout}
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              labelAlign={"left"}
            >
              <Form.Item
                name="username"
                label="Nombre de Usuario"
                hasFeedback
                rules={[
                  { required: true, message: "Por Favor ingrese Nombre de Usuario!" },
                   ({ getFieldValue }) =>  ({
                    async validator(_, value) {
                        const { data } = await getVerifi({ variables: {correo:value} });
                      if (!data.VerificaClient) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "El Usuario ya existe"
                      );
                    }
                  })
                ]}
              >
                <Input size="large"   />
              </Form.Item>
              <Form.Item
                name="name"
                label="Nombre"
                rules={[
                  {
                    required: true,
                    message: "Por Favor ingrese su Nombre!"
                  }
                ]}
                hasFeedback
              >
                <Input   size="large"   />
              </Form.Item>

              <Form.Item
                name="password"
                label="Contraseña"
                rules={[
                  {
                    required: true,
                    message: "Por Favor ingrese Contraseña!"
                  }
                ]}
                hasFeedback
              >
                <Input.Password   size="large"   />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirmar Contraseña"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Por favor confirme tu contrseña!"
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "las 2 Contraseñas debes Coincidir"
                      );
                    }
                  })
                ]}
              >
                <Input.Password size="large"   />
              </Form.Item>

              <Form.Item>
                <ButtonLongin htmlType="submit" size="large">
                  Registrarse
                </ButtonLongin>
              </Form.Item>
              <Form.Item>
                <Button  onClick={()=>{router.push("/login");}} type="primary" style={{width:"100%"}} size="large">
                   Iniciar Sesion
                </Button>
              </Form.Item>
            </Form>
          </FormCha>
        </ContainerForm>
      </LoginCard>
    </LoginBox>
  );
};
export default SingUp;
