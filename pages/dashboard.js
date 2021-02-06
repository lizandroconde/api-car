import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useState } from "react";

import TemplateAuth from "../assets/auth/template";
import { Container } from "../components/container";
import HeaderDashboard from "../components/dashboard/header";
import MyService from "../components/dashboard/myservice";

const Dashboard = () => {
  return (
    <TemplateAuth>
      <HeaderDashboard />
      <Container>
        <Layout
           
          style={{ padding: "24px 0",background:"white" }}
        >
          <Content style={{ padding: "0 24px" }}>
            <MyService />
          </Content>
          <Sider className="site-layout-background" width={400}>
            Sider
          </Sider>
        </Layout>
      </Container>
    </TemplateAuth>
  );
};

export default Dashboard;
