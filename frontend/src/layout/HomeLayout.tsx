import React, { FC } from 'react';
import TopNavbar from '../components/common/TopNavbar';
import AsideBar from '../components/common/AsideBar';

interface FormLayoutProps {
  asideBar: React.ReactNode;
  topNavbar: React.ReactNode;
  addTaskButton: React.ReactNode;
  searchInput: React.ReactNode;
}

const HomeLayout: FC<FormLayoutProps> = ({ asideBar, topNavbar, addTaskButton, searchInput }: FormLayoutProps) => {
  return (
    <main className='bg-gray-200 flex flex-row     '>
      <div className=' md:w-fit w-0 '>
        <div>{topNavbar}</div>
        <div>{asideBar}</div>
      </div>
      <div className=' flex flex-row flex-1  items-center h-fit justify-between px-3 pt-20 relative '>
        <div className=''>{addTaskButton} </div>
        <div className=''>{searchInput} </div>
      </div>
    </main>
  );
};

export default HomeLayout;
