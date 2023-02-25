import React, { FC } from 'react';
import TopNavbar from '../components/common/TopNavbar';
import AsideBar from '../components/common/AsideBar';

interface FormLayoutProps {
  asideBar: React.ReactNode;
  topNavbar: React.ReactNode;
}

const HomeLayout: FC<FormLayoutProps> = ({ asideBar, topNavbar }: FormLayoutProps) => {
  return (
    <>
      <div>{topNavbar}</div>
      <div>{asideBar}</div>
    </>
  );
};

export default HomeLayout;
