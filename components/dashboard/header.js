
import { Container } from "../container";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
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
         Dashboard
        </Menu.Item>
        <Menu.Item key="newtravel" onClick={()=>{
          router.push("/new-service")
        }} icon={<SendOutlined />}>
         Nuevo Viaje 
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay" onClick={()=>{
          sessionStorage.removeItem('auth')
          router.push("/login");
        }}>
          
            Cerrar Session
          
        </Menu.Item>
        </Menu>
        </Container>
      </Menu>
    </>
  );
};

export default HeaderDashboard;

