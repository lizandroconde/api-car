import Avatar from "antd/lib/avatar/avatar";
import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TemplateAuth from "../../assets/auth/template";
import { Container } from "../../components/container";
import HeaderDashboard from "../../components/dashboard/header";
import { Cont, ContentR, Time } from "../../components/dashboard/myservice";
import { Comment, Tooltip, List } from "antd";
import { Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import dayjs from "dayjs";
import "dayjs/locale/es";
import relativeTime from "dayjs/plugin/relativeTime";

const Service = ({ id }) => {
  const [datas, SetData] = useState();
  const [loading, Setloading] = useState(true);
  dayjs.extend(relativeTime);
  const date = dayjs();

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
                            precio
                            titulo
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
                    <strong>Año:</strong> {datas.descripcion.anio}
                  </Tag>
                  <Tag>
                    <strong>Asientos:</strong> {datas.descripcion.asientos}
                  </Tag>
                </BodyD>
              </Details>
              {
                datas.subasta && <SubastaD>
                <List
                  className="comment-list"
                  header={<h3>{datas.subasta.length} Propuestas</h3>}
                  itemLayout="horizontal"
                  dataSource={datas.subasta}
                  renderItem={(item) => (
                    <li>
                      <Comment
                        // actions={item.actions}
                        author={<a href={`/perfil/${item.usuario.correo}/`}>{item.usuario.nombre+" "+ item.usuario.apellidos}</a>}
                        avatar={"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}
                        content={item.comentario}
                        datetime={date.diff(item.fecha, "days") <= 1
                        ? dayjs(item.fecha)
                            .locale("es")
                            .fromNow()
                        : dayjs(item.fecha)
                            .locale("es")
                            .format("DD MMMM YYYY")}
                      />
                    </li>
                  )}
                />
              </SubastaD>
              }
            </Content>
            <Sider className="site-layout-background" width={400}>
              Sider
            </Sider>
          </Layout>
        </Container>
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
