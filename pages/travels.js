import Layout, { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useEffect, useState } from "react";
import styled from "styled-components";

import TemplateAuth from "../assets/auth/template";
import { Container } from "../components/container";
import HeaderDashboard from "../components/dashboard/header";
import MyService from "../components/dashboard/myservice";
import Travel from "../components/travels/travel";


const Dashboard = () => {
    
  return (
    <TemplateAuth>
      <HeaderDashboard />
      <Container>
        <Layout
           
          style={{ padding: "24px 0"}}
        >
             <Sider width={400} style={{background:"#f0f2f5"}} >
               SideBar
            </Sider>
          <Content style={{ padding: "0 24px"}}>
          <Travel />
          </Content>
          
        </Layout>
      </Container>
    </TemplateAuth>
  );
};

export default Dashboard;

