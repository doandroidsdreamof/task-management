import React, { FC,useRef } from 'react';
import HomeLayout from '../layout/HomeLayout';
import { TopNavbar, AsideBar, AddTaskButton, SearchInput,SelectSort } from '../components/common/commonIndex';
import {BoardModal} from '../components/modals/modalsIndex'

const HomePage = () => {

  return (
    <>
      <HomeLayout
        searchInput={<SearchInput />}
        addTaskButton={<AddTaskButton />}
        topNavbar={<TopNavbar  />}
        asideBar={<AsideBar page={'homePage'}  />}
        selectSort={<SelectSort />}
        boardModal={<BoardModal />}
      />
    </>
  );
};

export default HomePage;
