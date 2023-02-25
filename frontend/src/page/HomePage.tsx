import React, { FC } from 'react';
import HomeLayout from '../layout/HomeLayout';
import { TopNavbar, AsideBar } from '../components/common/commonIndex';

const HomePage = () => {
  return (
    <>
      <HomeLayout topNavbar={<TopNavbar />} asideBar={<AsideBar />} />
    </>
  );
};

export default HomePage;
