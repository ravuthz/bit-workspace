import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import React from 'react';
import { AdminLayout } from './admin-layout';

const footer = <span>Admin AntDesign React ©2022 Created by Ravuthz</span>;

const AdminLayoutBasic: React.FC = () => {
  return (
    <AdminLayout>AdminLayout basic</AdminLayout>
  );
}

const AdminLayoutWithFooter: React.FC = () => {
  return (
    <AdminLayout footer={footer}>AdminLayout with footer</AdminLayout>
  );
}

const AdminLayoutWithAllConfig: React.FC = () => {
  const menus: any[] = [
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
  return (
    <AdminLayout footer={footer} menus={menus}>AdminLayout with footer and setting</AdminLayout>
  );
}

export {
  AdminLayoutBasic, AdminLayoutWithFooter, AdminLayoutWithAllConfig
};

