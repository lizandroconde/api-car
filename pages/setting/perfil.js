import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import styled from "styled-components";
import TemplateAuth from "../../assets/auth/template";
import { Container } from "../../components/container";
import BannerPerfil from "../../components/perfil/banner";
import Details from "../../components/perfil/details";

const Perfil = () => {
  return (
    <Auth >
      <Banner  url={"https://gestoriaiborra.com/wp-content/uploads/2016/02/banner-SERVICIOS-trafico-2-1.png"}/>
      <Container>
        <Layout style={{ padding: "24px 0",marginTop: "5rem"}}>
          <Content style={{ padding: "0 24px", zIndex: 2}}>
            <Details />
          </Content>
          <Sider width={250} style={{ background: "transparent" }}>
            xd
          </Sider>
        </Layout>
      </Container>
    </Auth>
  );
};

const Auth = styled(TemplateAuth)`
    position:relative;
  
`

const Banner = styled(BannerPerfil)`
    
`

export default Perfil;
