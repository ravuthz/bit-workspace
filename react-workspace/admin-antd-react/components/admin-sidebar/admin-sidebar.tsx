import { Layout } from 'antd';
import React, { ReactNode } from 'react';

const { Header, Sider, Content } = Layout;

export type AdminSidebarProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function AdminSidebar({ children, ...props }: AdminSidebarProps | any) {
  const { collapsed } = props;

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
    </Sider>
  );
}
