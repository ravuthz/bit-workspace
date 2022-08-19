import React, { ReactNode, useState } from 'react';
import { Menu, Dropdown, Modal, Layout, Avatar } from 'antd';
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from '@ant-design/icons';

const { Header } = Layout;


// import { Link } from 'react-router-dom';



export type AdminHeaderProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AdminHeader({ children, ...props }: AdminHeaderProps | any) {

  const {
    token,
    avatar,
    sidebarCollapsed,
    logout,
    getUserInfo,
    showSettings,
    fixedHeader,
  } = props;

  const [toggleSiderBar, setToggleSiderBar] = useState(false);

  const handleLogout = () => {
    Modal.confirm({
      title: "注销",
      content: "确定要退出系统吗?",
      okText: "确定",
      cancelText: "取消",
      onOk: () => {
        logout();
      },
    });
  };
  
  const onClick = ({ key }) => {
    switch (key) {
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="dashboard">
        {/* <Link to="/dashboard">首页</Link> */}
        sdasds
      </Menu.Item>
      <Menu.Item key="project">
        <a
          target="_blank"
          href="https://github.com/NLRX-WJC/react-antd-admin-template"
          rel="noopener noreferrer"
        >
          项目地址
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header>
        {React.createElement(toggleSiderBar ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}

        <div className="right-menu">
          <div className="dropdown-wrap">
            <Dropdown overlay={menu}>
              <div>
                {/* <Avatar shape="square" src={avatar} /> */}
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
  );
}
