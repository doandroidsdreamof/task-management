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
    <main className='bg-gray-200 h-screen flex flex-col '>
      <div>
      <div>{topNavbar}</div>
      <div >{asideBar}</div>
      </div>
      <div className=' sm:ml-64 px-2 border items-center  border-black ml-auto  flex-row mt-24 justify-between  flex   w-full   '>
        <div className=''>{addTaskButton} </div>
        <div className=''>{searchInput} </div>
      </div>
    </main>
  );
};

export default HomeLayout;
