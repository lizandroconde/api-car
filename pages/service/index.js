import Avatar from "antd/lib/avatar/avatar";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TemplateAuth from "../../assets/auth/template";
import { Container } from "../../components/container";
import HeaderDashboard from "../../components/dashboard/header";


const Service = ({id}) => {
const [datas, SetData] = useState();
const [loading, Setloading] = useState(true);

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
                              titulo
                              termina
                              subasta
                              precio
                              titulo
                        }
                          
                    }
                    `
              })
            });
    
            let data = await myservicedata.json();
            try {
              if (data.data) {
                let { GwtOneNotification } = data.data;
                if (GwtOneNotification) {
                  Setloading(false);
                  SetData(GwtOneNotification);
                  console.log(GwtOneNotification);
                } else {
                  console.log("err");
                }
              } else {
                console.log("err");
              }
            } catch (error) {
              console.log("err");
            }
          
        })();
      }, []);

 if(loading){
    <h1>Cargando</h1>
 }

    
  return (
    <TemplateAuth>
      <HeaderDashboard />
      <Container>
         <Details>
             <HeaderD>
                 <Avatar  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                 <h3>{datas.cliente.nombre}</h3>
             </HeaderD>
         </Details>
      </Container>
    </TemplateAuth>
  );
};

Service.getInitialProps = async (ctx) => {
    let {query} = ctx
    
    return { id: query.idservice }
  }

export default Service;


const HeaderD = styled.div`

`

const Details = styled.div`
    background:white;
`

