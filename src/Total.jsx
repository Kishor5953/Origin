import React from 'react';
import {  Layout, Menu } from 'antd';
import Sider from './Sider';

const { Header,Footer } = Layout;

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const App = () => {
 
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider />
      </Layout>
      <Footer>Kishor more ©2023 Created MAPUP</Footer>
    </Layout>
  );
};

export default App;