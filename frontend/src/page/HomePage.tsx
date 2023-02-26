import React, { FC,useRef } from 'react';
import HomeLayout from '../layout/HomeLayout';
import { TopNavbar, AsideBar, AddTaskButton, SearchInput } from '../components/common/commonIndex';

const HomePage = () => {

  return (
    <>
      <HomeLayout
        searchInput={<SearchInput />}
        addTaskButton={<AddTaskButton />}
        topNavbar={<TopNavbar  />}
        asideBar={<AsideBar  />}
      />
    </>
  );
};

export default HomePage;
