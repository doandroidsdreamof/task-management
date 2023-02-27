import React, { useEffect } from 'react';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import { DarkModeToggle, BoardIndicator, AddBoard } from '../common/commonIndex';

interface AsideBarProps {
  page: string;
}

const AsideBar = ({ page }: AsideBarProps) => {
  const navbarRedux = useAppSelector((state) => state.store.navbarSlice.navbarState);

  return (
    <aside
      id='logo-sidebar'
      className={
        navbarRedux === false
          ? 'relative  top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
          : 'relative  top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform  -translate-x-full bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700'
      }
      aria-label='Sidebar'
    >
      <div className='h-full flex flex-col  px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
        <div className='overflow-y-auto'>
          <ul className='space-y-2'>
            <li>
              <BoardIndicator />
            </li>
            <li>
              <div className='flex  cursor-pointer items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <span className='ml-3'>Dashboard</span>
              </div>
            </li>
          </ul>
        </div>
        <div className='w-full mt-auto px-1.5 items-center flex flex-col justify-center'>
        <AddBoard />

        <DarkModeToggle />
        </div>

      </div>
    </aside>
  );
};

export default AsideBar;
