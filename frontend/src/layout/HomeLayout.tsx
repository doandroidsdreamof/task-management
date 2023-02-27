import React, { FC } from 'react';

interface FormLayoutProps {
  asideBar: React.ReactNode;
  topNavbar: React.ReactNode;
  addTaskButton: React.ReactNode;
  searchInput: React.ReactNode;
  selectSort: React.ReactNode;
  boardModal: React.ReactNode;
}

const HomeLayout: FC<FormLayoutProps> = ({
  asideBar,
  topNavbar,
  addTaskButton,
  searchInput,

}: FormLayoutProps) => {
  return (
    <main className='bg-gray-200 flex flex-row'>
      <div className=' md:w-fit w-0 '>
        <div className='w-full h-screen bg-opacity-75  bg-black bg-transparent  z-50 fixed justify-center flex'>
          {' '}
          {boardModal}
        </div>

        <div>{topNavbar}</div>
        <div>{asideBar}</div>
      </div>
      <div className=' flex  flex-wrap-reverse lg:justify-between justify-around flex-col-reverse gap-y-4 md:flex-row flex-1  items-center h-fit px-3 pt-20 relative '>
        <div className='flex flex-row gap-3 w-full justify-between lg:w-auto'>
          <div className=''>{addTaskButton} </div>
          <div className=''>{selectSort}</div>
        </div>
        <div className='w-full lg:w-auto '>{searchInput} </div>
      </div>
    </main>
  );
};

export default HomeLayout;
