import React, { FC } from 'react';
import TopNavbar from '../components/common/TopNavbar';
import AsideBar from '../components/common/AsideBar';

interface FormLayoutProps {
  asideBar: React.ReactNode;
  topNavbar: React.ReactNode;
  addTaskButton: React.ReactNode;
}

const HomeLayout: FC<FormLayoutProps> = ({ asideBar, topNavbar, addTaskButton }: FormLayoutProps) => {
  return (
    <main>
      <div>{topNavbar}</div>
      <div>{asideBar}</div>
      <div className='bg-gray-200  flex pt-5 px-2   w-full h-screen'>
        <div className='mt-16'>{addTaskButton}</div>
      </div>


    </main>
  );
};

export default HomeLayout;
