import React, { useState } from "react";
import TemplateAuth from "../assets/auth/template";
import { Container } from "../components/container";
import HeaderDashboard from "../components/dashboard/header";
import { InputNumber,Radio  } from 'antd';

import { NewServiceBox, MainServiceBox } from "../styles/newservice";
import {
  Form,
  Input,
  Tooltip,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Cascader,
  message
} from "antd";
import { QuestionCircleOutlined, CarOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Map from '../components/Maps/first'
import { useMutation } from "@apollo/client";
import { CREATE_SERVICE } from '../assets/gql/service'
import { useRouter } from "next/router";
const { Option } = Select;


const options = [
  {
    value: "toyoya",
    label: "Toyota",
    children: [
      {
        value: "4Runner",
        label: "4Runner",
        children: [
          {
            label: "4 Asientos",
            value: "4"
          }
        ]
      },
      {
        label: "86",
        value: "86",
        children: [
            {
              label: "4 Asientos",
              value: "4"
            }
          ]
      },
      {
        label: "Agya",
        value: "agya",
        children: [
            {
              label: "4 Asientos",
              value: "4"
            },
            {
              label: "7 Asientos",
              value: "7"
            }
          ]
      }
    ]
  },
  
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const newService = () => {
  
  const router = useRouter();
  const [form] = Form.useForm();
  const [createService] = useMutation(CREATE_SERVICE);
  const onFinish = async (values) => {
      let ndata = values;
      let marca = values.descripcion
      let tk = JSON.parse(sessionStorage.getItem("auth"));
       let newtk = {
        "iv":tk.token.iv,
        "content":tk.token.content 
    }
      ndata.cliente  = newtk
   
      let descripcion ={
          "anio":parseInt(marca.anio),
          "detalles": marca.detalles,
          "marca": marca.marca[0],
          "modelo": marca.marca[1],
          "asientos": parseInt(marca.marca[2]),
      }
    
      let desde = {
            "lat":123456,
            "log":12344,
            "direccion":ndata.desde
      }

      let hasta = {
        "lat":123456,
        "log":12344,
        "direccion":ndata.hasta
      }
     ndata.descripcion = descripcion;
     ndata.empieza = desde;
     ndata.termina = hasta;
     console.log(ndata)
     try {
        const { data } = await createService({ variables: ndata });
        message.success("Su viaje ah sido publicado correctamente");
        router.push("/dashboard");
         
      } catch (error) {
        message.error("Ohhps ocurrio un error, vuelve a intentarlo mas tarde");
      } 
  };




  const checkPrice = (_, value) => {
    if (value > 0 && value < 9999) {
      return Promise.resolve();
    }
    return Promise.reject("El Precio debe ser mayor que 0 ");
  };

  return (
    <TemplateAuth>
      <NewServiceBox>
        <Container>
          <MainServiceBox>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ["zhejiang", "hangzhou", "xihu"],
                prefix: "86",
                precio: 0
              }}
              scrollToFirstError
            >
              <Form.Item
                name="titulo"
                label="Titulo"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese el Titulo"
                  }
                ]}
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name={['descripcion', 'detalles']}
                label="Descripcion"
                hasFeedback
              >
                <TextArea size="small" />
              </Form.Item>
              <Form.Item
                name="desde"
                label="Desde"
                hasFeedback
              >
                <Input size="large" />
              </Form.Item>
              <Form.Item
                name="hasta"
                label="Hasta"
                hasFeedback
              >
                <Input size="large" />
              </Form.Item>
                
              <Form.Item
                  name="servicio"
                  label="Servicio"
                  
              >
                <Radio.Group  value={"ida"}>
                  <Radio value="ida">Solo Ida</Radio>
                  <Radio value="idayvuelta">Ida & Vuelta</Radio>
                   
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="precio"
                label="Precio"
                rules={[
                  {
                    required: true,
                    validator: checkPrice
                  }
                ]}
                hasFeedback
              >
                <InputNumber size="large"    defaultValue={1000}
      formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      parser={value => value.replace(/\$\s?|(,*)/g, '')}
     />
              </Form.Item>

              

             
              <Form.Item   name={['descripcion', 'marca']} label="Marca">
                 <Cascader options={options} onChange={(data)=>console.log(data)}>

                 </Cascader>
              </Form.Item>

              <Form.Item   name={['descripcion', 'anio']} label="Año">
                <Select style={{ width: 100 }}>
                  <Option value="2011">
                    <CarOutlined /> 2011
                  </Option>
                  <Option value="2012">
                    <CarOutlined /> 2012
                  </Option>
                  <Option value="2013">
                    <CarOutlined /> 2013
                  </Option>
                  <Option value="2014">
                    <CarOutlined /> 2014
                  </Option>
                  <Option value="2015">
                    <CarOutlined /> 2015
                  </Option>
                  <Option value="2016">
                    <CarOutlined /> 2016
                  </Option>
                  <Option value="2017">
                    <CarOutlined /> 2017
                  </Option>
                  <Option value="2018">
                    <CarOutlined /> 2018
                  </Option>
                  <Option value="2019">
                    <CarOutlined /> 2019
                  </Option>
                  <Option value="2020">
                    <CarOutlined /> 2020
                  </Option>
                </Select>
              </Form.Item>

            
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Publicar
                </Button>
              </Form.Item>
            </Form>
          </MainServiceBox>
          <Map 
            googleMapURL={"https://maps.googleapis.com/maps/api/js?key=AIzaSyATmO1sWFy3Sk9kN_I0LRj1EV5F09prAPQ&v=3.exp&libraries=geometry,drawing,places"}
            loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
            />
        </Container>
      </NewServiceBox>
    </TemplateAuth>
  );
};

export default newService;
