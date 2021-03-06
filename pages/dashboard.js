import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useState } from "react";
import styled from "styled-components";

import TemplateAuth from "../assets/auth/template";
import { Container } from "../components/container";
import HeaderDashboard from "../components/dashboard/header";
import MyService from "../components/dashboard/myservice";
import Perfil from "../components/dashboard/perfil";

const Dashboard = () => {
  return (
    <TemplateAuth>
      <HeaderDashboard />
      <Container>
        <Layout
           
          style={{ padding: "24px 0"}}
        >
          <Content style={{ padding: "0 24px"}}>
            <MyService />
          </Content>
          <Sider width={400} style={{background:"#f0f2f5"}} >
            <Perfil />
          </Sider>
        </Layout>
      </Container>
    </TemplateAuth>
  );
};

export default Dashboard;

