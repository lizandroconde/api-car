
import { Container } from "../container"
import styled from "styled-components";
import Avatar from "antd/lib/avatar/avatar";
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { SettingOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';
import { useRouter } from "next/router";
import { ButtonLongin } from "../../styles/login";



const Headers = ({user}) =>{
    const router = useRouter();
    const menu = (
        <Menu >
          <Menu.Item key="1" onClick={()=>{ router.push("/setting/perfil")}} icon={<UserOutlined />}>
            Ver Perfil
          </Menu.Item>
          <Menu.Item key="2" icon={<SettingOutlined />}>
            Ajustes
          </Menu.Item>
          <Menu.Item key="3" onClick={()=>{
          sessionStorage.removeItem('auth')
          router.push("/login");
        }} icon={<LogoutOutlined />}>
           Cerrar Sesion
          </Menu.Item>
        </Menu>
      );

    return(

        <Header>
        <Container>
          <HeaderD>
            <div>
              <ImgLogo src="/logo.png"  />
              <Button onClick={()=>{
                router.push("/dashboard")
                }} >Mis Viajes</Button>
            </div>
            <HeaderDD>
             <ButtonLongin size="middle" onClick={()=>{
                router.push("/new-service")
                }} >
                 Publicar Nuevo Viaje
             </ButtonLongin>
            <Space wrap>
              <Dropdown overlay={menu} placement="bottomLeft" arrow>
                <Perfil >
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size="large" />
                    <Name >
                        @{user}
                    </Name>
                </Perfil>
                </Dropdown>
                </Space>
            </HeaderDD>
          </HeaderD>
        </Container>
      </Header>
    )
}

export default Headers

const HeaderD = styled.div`
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.header`
  background: white;
`;

const HeaderDD = styled.div`
 display: flex;
 align-items: center;
`

const Perfil = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
`

const Name = styled.div`
    font-weight: bold;
`

const ImgLogo = styled.img`
  height: 60px;
  object-fit: contain;
  width: 120px;

`