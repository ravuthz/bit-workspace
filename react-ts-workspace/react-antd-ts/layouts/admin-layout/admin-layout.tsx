import {
  CheckOutlined,
  CloseOutlined,
  MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UploadOutlined, UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import Drawer from 'antd/lib/drawer';
import Layout from 'antd/lib/layout';
import List from 'antd/lib/list';
import Menu from 'antd/lib/menu';
import Switch from 'antd/lib/switch';

import React, { ReactNode, useCallback } from 'react';

import 'antd/dist/antd.css';
import { useAtom } from 'jotai';

import { adminLayoutConfigAtom } from './admin-layout-store';
import './admin-layout.css';

const { Header, Sider, Content, Footer } = Layout;


export type AdminLayoutProps = {
  children?: ReactNode;
  footer?: ReactNode;
  menus?: any[];
};

const menuItems: any[] = [
  {
    key: 1,
    icon: <UserOutlined />,
    label: 'Nav 1'
  },
  {
    key: 2,
    icon: <VideoCameraOutlined />,
    label: 'Nav 2'
  },
  {
    key: 3,
    icon: <UploadOutlined />,
    label: 'Nav 3'
  },
];

const SwitchKey: React.FC<any> = (props) => {
  return (
    <Switch
      {...props}
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
    />
  );
};

export function AdminLayout({ children, footer, menus }: AdminLayoutProps) {
  const [config, setConfig] = useAtom(adminLayoutConfigAtom);

  const toggleConfig = useCallback((key: string) => {
    console.log('toggleConfig.key: ', key);
    setConfig(config => ({ ...config, [key]: !config[key] }));
  }, [setConfig]);

  const { theme, showSetting, showFixHeader, showFixSideBar, showSideBarLogo, collapsedSideBar } = config;

  return (
    <Layout className="admin-layout">
      <Sider theme={config.theme} trigger={null} collapsible collapsed={collapsedSideBar} className={`${showFixSideBar} ? 'fixed-sidebar': ''`}>
        {showSideBarLogo && <div className="logo" />}
        <Menu theme={config.theme} mode="inline" items={menus}></Menu>
      </Sider>
      <Drawer closable={false} placement="right" visible={showSetting} onClose={() => toggleConfig('showSetting')}>
        <List header={<div className="setting-title">Settings</div>} bordered={false}>
          <List.Item key="collapsedSideBar">
            Collapsed SideBar
            <SwitchKey style={{ float: 'right' }} checked={collapsedSideBar} onChange={() => toggleConfig('collapsedSideBar')} />
          </List.Item>
          <List.Item key='showSideBarLogo'>
            Show Icon
            <SwitchKey style={{ float: 'right' }} checked={showSideBarLogo} onChange={() => toggleConfig('showSideBarLogo')} />
          </List.Item>
          <List.Item key="showFixHeader">
            Fixed Header
            <SwitchKey style={{ float: 'right' }} checked={showFixHeader} onChange={() => toggleConfig('showFixHeader')} />
          </List.Item>
          <List.Item key="showFixSideBar">
            Fixed SideBar
            <SwitchKey style={{ float: 'right' }} hecked={showFixSideBar} onChange={() => toggleConfig('showFixSideBar')} />
          </List.Item>
          <List.Item key="theme">
            Theme
            <Switch
              style={{ float: 'right' }}
              checked={theme === 'dark'}
              onChange={(checked) => setConfig(config => ({ ...config, theme: checked ? 'dark' : 'light' }))}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </List.Item>
        </List>
      </Drawer>
      <Layout className="site-layout">
        <Header className={`admin-layout-header ${theme} ${showFixHeader ? 'fixed-header' : ''} `}>
          {React.createElement(collapsedSideBar ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => toggleConfig('collapsedSideBar'),
          })}
          {React.createElement(SettingOutlined, {
            className: 'setting',
            onClick: () => toggleConfig('showSetting')
          })}
        </Header>
        <Content
          className={`admin-layout-content ${theme}`}
        >
          {children}
        </Content>
        {footer && <Footer className={`admin-layout-footer ${theme}`}>{footer}</Footer>}
      </Layout>
    </Layout>
  );
}
