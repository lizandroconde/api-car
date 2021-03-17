import { useQuery } from "@apollo/client";
import { ALL_SERVICES } from "../../assets/gql/service";
import Loading from "../box/loading";
import {
  FieldTimeOutlined,
  NodeIndexOutlined,
  CarOutlined,
  SecurityScanOutlined
} from "@ant-design/icons";
import dayjs from "dayjs";
import "dayjs/locale/es";
import relativeTime from "dayjs/plugin/relativeTime";
import { Cont, Time, ContentR } from "../dashboard/myservice";
import {Tag} from 'antd'
import Link from "next/link";
import styled from "styled-components";

const Detalle =({icon,text})=>{
  return(
    <IconContent>
      <Icon>{icon}</Icon>
      <Text>{text}</Text>
      
    </IconContent>
  )
}

const travel = () => {
    dayjs.extend(relativeTime);
    const date = dayjs();
  const { loading, error, data } = useQuery(ALL_SERVICES);
  if (loading) return <Loading />;
  return (
    <ListTravels>
      {data.Notificacions.map((index=>{
        return(
           <Link href={{pathname:"/service", query: { idservice: index._id }}} as={`/service/${index._id}/`}>
           <Travel  >
             
             <Info>
             <TitleTravel>{index.titulo}</TitleTravel>
             <DescripcionTravel>
             {index.descripcion.detalles}
             </DescripcionTravel>

             <DetallesTravel>
              <Detalle icon={<FieldTimeOutlined/>}
               text={<>Publicado {date.diff(index.fecha, "days") <= 1
               ? dayjs(index.fecha)
                   .locale("es")
                   .fromNow()
               : dayjs(index.fecha)
                   .locale("es")
                   .format("DD MMMM YYYY")} atras - <strong>{index.subasta.length} oferta</strong> </>}/>
              <Detalle icon={<NodeIndexOutlined />} 
                text={<>De <strong>{index.empieza.direccion}</strong> hasta <strong>{index.termina.direccion}</strong></>}
              />
              <Detalle icon={<CarOutlined />} text={<><strong>Marca:&nbsp;</strong>{index.descripcion.marca},&nbsp;<strong>Modelo:&nbsp;</strong>{index.descripcion.modelo},&nbsp;<strong>Aisientos:&nbsp;</strong>{index.descripcion.asientos},&nbsp;<strong>Año:&nbsp;</strong>{index.descripcion.anio}</>} />
              <Detalle icon={<SecurityScanOutlined />}  text= {index.servicio == "ida"? <Tag  color="#2db7f5">
                    <strong>Servicio:</strong> Solo Ida
                  </Tag>:<Tag  color="#87d068">
                    <strong>Servicio:</strong> De Ida y Vuleta
                  </Tag> } />
             </DetallesTravel>
             </Info>
             <Price>
               <h1>
                 s/ {index.precio}
               </h1>
             </Price>
             
           </Travel>
           </Link>
        )
      }))}
    </ListTravels>
   
  );
};

export default travel;

const Info  = styled.div`

`
const Price = styled.div`

`

const Icon = styled.div`
  font-size: .81rem;
  margin-right: .2rem;
`

const Text = styled.div`
  font-size: .81rem;
`

const IconContent = styled.div`
  display: flex;
  margin-left: 1rem;
`

const DetallesTravel = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`

const DescripcionTravel = styled.div`
  color: #a3a3a3;
  font-size: 1rem;
  padding: 10px;
`

const TitleTravel = styled.h2`
  font-size: 1rem;
  font-family: Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 700;
  margin-bottom: 0;
`

const ListTravels = styled.div`
  box-shadow: 0 0 4px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 12%);
  background: white;
`

const Travel = styled.div`
  display: grid; 
  grid-template-columns: 4fr 1fr;
  border: 1px solid #DEDEDE;
  padding: 15px;
  position: relative;
  cursor: pointer;
  &:after{
    transition: all .1s ease-out;
    background: #139ff0;
    bottom: -1px;
    content: "";
    display: block;
    left: 0;
    position: absolute;
    top: -1px;
    width: 0;
  }
  &:hover::after{
    width: 4px;
  }
  &:hover{
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 8%), 0 2px 4px 0 rgb(0 0 0 / 12%);

  }
`