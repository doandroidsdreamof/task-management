import React, { FC } from 'react';
import HomeLayout from '../layout/HomeLayout';
import { TopNavbar, AsideBar,AddTaskButton } from '../components/common/commonIndex';

const HomePage = () => {
  return (
    <>
      <HomeLayout addTaskButton={<AddTaskButton />} topNavbar={<TopNavbar />} asideBar={<AsideBar />} />
    </>
  );
};

export default HomePage;
