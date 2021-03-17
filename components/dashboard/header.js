
import { Container } from "../container";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  CarTwoTone,
  SendOutlined
} from "@ant-design/icons";
import { useRouter } from "next/router";
const { SubMenu } = Menu;

const HeaderDashboard = () => {
  const router = useRouter();
  return (
    <>
    
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Container>
        <Menu
        mode="horizontal"
        theme="dark"
        
      >
        <Menu.Item key="dash" onClick={()=>{
          router.push("/dashboard")
        }} icon={<AppstoreOutlined />}>
         Mis Viajes
        </Menu.Item>
        <Menu.Item key="newtravel" onClick={()=>{
          router.push("/new-service")
        }} icon={<SendOutlined />}>
         Nuevo Viaje 
        </Menu.Item>
        <Menu.Item key="travels" onClick={()=>{
          router.push("/travels")
        }} icon={<CarTwoTone />}>
         Descubrir Viajes
        </Menu.Item>
      
     
      
        </Menu>
        </Container>
      </Menu>
    </>
  );
};

export default HeaderDashboard;

