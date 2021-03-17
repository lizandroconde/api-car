import { Menu } from "antd"
import { Container } from "../container"
import { useRouter } from "next/router";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    SendOutlined
  } from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";

const HeaderP = () =>{
  const router = useRouter();
    return(
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
        }}   icon={<AppstoreOutlined />}>
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
        <Menu.Item key="alipay">
          
            Cerrar Session
          
        </Menu.Item>
        </Menu>
        </Container>
      </Menu>
    )
}

export default HeaderP