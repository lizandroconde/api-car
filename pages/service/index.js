import Avatar from "antd/lib/avatar/avatar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TemplateAuth from "../../assets/auth/template";
import { Container } from "../../components/container";
import HeaderDashboard from "../../components/dashboard/header";
import { Cont, ContentR, Time } from "../../components/dashboard/myservice";
import { Comment, Modal, List, Button, Form, Input, Checkbox, InputNumber, message } from "antd";
import { Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import dayjs from "dayjs";
import "dayjs/locale/es";
import relativeTime from "dayjs/plugin/relativeTime";
import HeaderP from "../../components/proyect/header";
import { useMutation } from "@apollo/client";
import { POST_SUBASTA } from "../../assets/gql/service";

const Service = ({ id }) => {
  const [datas, SetData] = useState();
  const [loading, Setloading] = useState(true);
  const [modal, setModal] = useState(false);
  dayjs.extend(relativeTime);
  const date = dayjs();

  const [postSubasta] = useMutation(POST_SUBASTA);
  const onFinish = async (values) =>{
    let token = JSON.parse(sessionStorage.getItem("auth"));
    let usuario = {
      "iv":token.token.iv,
      "content":token.token.content 
  }
    try {
      const { data } = await postSubasta({ variables:{notificacion: id,input:values,usuario }});
      if (data) {
        message.success("Se publico correctamente");
        setModal(false)
      }else{
        message.error("No se pudo publicar tu Subasta");
      }
    } catch (error) {
      message.error("Ohhps ocurrio un error");
      console.log(error);
    }
  }

  const checkPrice = (_, value) => {
    console.log(value);
    if (value > 0 && value < 9999) {
      return Promise.resolve();
    }
    return Promise.reject("El Precio debe ser mayor que 0 ");
  };
  
  useEffect(() => {
    (async () => {
      let myservicedata = await fetch("http://localhost:4000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaGVjayI6dHJ1ZSwiaWF0IjoxNjA2MzE4Nzc1fQ.S7dBrv3ZP8knJlRJYvineuMBucuoO7uNC7o1wMfBrDM`
        },
        body: JSON.stringify({
          query: `
                  {
                      GwtOneNotification(notificacion:"${id}"
                      ){
                          _id
                          cliente{
                              nombre
                            }
                            descripcion{
                              detalles
                              anio
                              modelo
                              asientos
                              marca
                            }
                            empieza{
                              direccion
                            }
                            termina{
                              direccion
                            }
                            precio
                            titulo
                            servicio
                            subasta{
                              comentario
                              precio
                              fecha
                              usuario{
                                _id
                                nombre
                                correo
                                apellidos
                              }
                            }
                      }
                        
                  }
                  `
        })
      });

      let data = await myservicedata.json();
      console.log(myservicedata);
      try {
        if (data.data) {
          let { GwtOneNotification } = data.data;
          if (GwtOneNotification) {
            SetData(GwtOneNotification);
            Setloading(false);

            console.log(GwtOneNotification);
          } else {
            console.log("err");
          }
        } else {
          console.log("erro 2");
        }
      } catch (error) {
        console.log("un errorsaso xd");
      }
    })();
  }, []);

  if (loading) {
    <h1>Cargando</h1>;
  }

  if (datas) {
    return (
      <TemplateAuth>
        <HeaderDashboard />
        <Container>
          <Layout style={{ padding: "20px 0" }}>
            <Content style={{ padding: "0 20px" }}>
              <Details>
                {/* <HeaderD>
                  <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <div>
                    <h3> {datas.cliente.nombre}</h3>
                    <ContentR>
                          <Time>

                          </Time>
                          <Cont>{datas} </Cont>
                      </ContentR>
                  </div>
              </HeaderD> */}
                <HeadD>
                  <h2>{datas.titulo}</h2>
                  <h3>S/. {datas.precio}</h3>
                </HeadD>
                <HeadD>
                  <span><strong>Desde: </strong>{datas.empieza.direccion}</span>
                  <span><strong>Hasta: </strong>{datas.termina.direccion}</span>
                
                </HeadD>
                <BodyD>
                  {datas.descripcion.detalles}
                  <h3>Especificaciones</h3>
                  <Tag>
                    <strong>Marca:</strong> {datas.descripcion.marca}
                  </Tag>
                  <Tag>
                    <strong>Modelo:</strong> {datas.descripcion.modelo}
                  </Tag>
                  <Tag>
                    <strong>A??o:</strong> {datas.descripcion.anio}
                  </Tag>
                  <Tag>
                    <strong>Asientos:</strong> {datas.descripcion.asientos}
                  </Tag>
                  {datas.servicio == "ida"? <Tag  color="#2db7f5">
                    <strong>Servicio:</strong> Solo Ida
                  </Tag>:<Tag  color="#87d068">
                    <strong>Servicio:</strong> De Ida y Vuleta
                  </Tag> }
                  
                  

                </BodyD>
                <FooterD>
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      setModal(true);
                    }}
                  >
                    Subastar
                  </Button>
                </FooterD>
              </Details>
              {datas.subasta && (
                <SubastaD>
                  <List
                    className="comment-list"
                    header={<h3>{datas.subasta.length} Propuestas</h3>}
                    itemLayout="horizontal"
                    dataSource={datas.subasta}
                    renderItem={(item) => (
                      <li>
                        <Comment
                          // actions={item.actions}
                          author={
                            <a href={`/perfil/${item.usuario.correo}/`}>
                              {item.usuario.nombre +
                                " " +
                                item.usuario.apellidos}
                            </a>
                          }
                          avatar={
                            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          }
                          content={item.comentario}
                          datetime={
                            date.diff(item.fecha, "days") <= 1
                              ? dayjs(item.fecha)
                                  .locale("es")
                                  .fromNow()
                              : dayjs(item.fecha)
                                  .locale("es")
                                  .format("DD MMMM YYYY")
                          }
                        />
                      </li>
                    )}
                  />
                </SubastaD>
              )}
            </Content>
            <Sider className="site-layout-background" width={400}>
              Sider
            </Sider>
          </Layout>
        </Container>
        <Modal
          visible={modal}
          title={datas.titulo}
        
          footer={<></>}
        >
          <Form name="basic" 
          onFinish={onFinish}
          
         >
            <Form.Item
              label="Comentario"
              name="comentario"
              rules={[
                { required: true, message: "Por Favor ingrese Comentario!" }
              ]}
            >
              <Input />
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
              <InputNumber
                size="large"
                defaultValue={datas.precio}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
              />
            </Form.Item>

         
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Publicar Subasta
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </TemplateAuth>
    );
  }

  return <h1>dlll</h1>;
};

Service.getInitialProps = async (ctx) => {
  let { query } = ctx;

  return { id: query.idservice };
};

export default Service;

const HeaderD = styled.div``;

const FooterD = styled.div`
  padding: 20px;
`;

const HeadD = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #a3a3a3;
`;
const BodyD = styled.div`
  padding: 20px;
`;

const SubastaD = styled.div`
  background: white;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding: 20px;
`;

const Details = styled.div`
  background: white;
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  margin-bottom: 20px;
  padding-bottom: 20px;
`;
