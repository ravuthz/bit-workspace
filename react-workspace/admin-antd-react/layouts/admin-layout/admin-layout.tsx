import React, { ReactNode, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;

import 'antd/dist/antd.css';
import './admin-layout.css';

// import { AdminHeader } from '@ravuthz/admin-antd-react.components.admin-header';
// import { AdminSidebar } from '@ravuthz/admin-antd-react.components.admin-sidebar';
// import { AdminRightPanel } from '@ravuthz/admin-antd-react.components.admin-right-panel';

export type AdminLayoutProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AdminLayout({ children }: AdminLayoutProps) {

  const [collapsed, setCollapsed] = useState(true);

  const [showSettings, setShowSettings] = useState(true);
  const [showTagsView, setShowTagsView] = useState(false);
  const [showSideBarLogo, setShowSideBarLogo] = useState(false);
  const [toggleFixHeader, setToggleFixHeader] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(collapsed => !collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {showSideBarLogo && (<div className="logo" />)}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: toggleCollapse,
          })}

          <div className="right-menu">
            <Button>Hello</Button>
          </div>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Admin AntDesign React ©2022 Created by Ravuthz</Footer>
      </Layout>
    </Layout>
  );
}
