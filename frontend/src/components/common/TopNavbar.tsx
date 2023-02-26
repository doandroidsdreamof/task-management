import React from 'react';
import AvatarPlaceHolder from '../../assets/images/avatar-placeholder.png';

//? redux-toolkit //
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { toggleNavBar } from '../../store/slices/slicesIndex';

import { Dropdown, Avatar } from 'flowbite-react';

//? react-router-dom //
import { Link } from 'react-router-dom';

const TopNavbar = () => {
  const dispatch = useAppDispatch();
  const navbarRedux = useAppSelector((state) => state.store.navbarSlice.navbarState);

  const handleToggle = function () {
    dispatch(toggleNavBar());
  };

  return (
    <nav className='fixed top-0 z-50 w-full   bg-opacity-60 backdrop-filter backdrop-blur-lg bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <button
              onClick={() => handleToggle()}
              data-drawer-target='logo-sidebar'
              data-drawer-toggle='logo-sidebar'
              aria-controls='logo-sidebar'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            >
              {navbarRedux ? (
                <>
                  <span className='sr-only'>Open sidebar</span>
                  <svg
                    className='w-6 h-6'
                    aria-hidden='true'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      clipRule='evenodd'
                      fillRule='evenodd'
                      d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-x'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                  <span className='sr-only'>Close sidebar</span>
                </>
              )}
            </button>
            <span className='self-center ml-1 md:ml-5  font-roboto  text-2xl font-bold sm:text-2xl whitespace-nowrap dark:text-white'>
              Kanban.
            </span>
          </div>
          <div className='flex items-center'>
            <div className='flex items-center ml-3'>
              <div>
                <Dropdown
                  className='w-40'
                  arrowIcon={false}
                  inline={true}
                  label={
                    <Avatar
                      className='border-gray-300 border rounded-full  '
                      alt='User settings'
                      img={AvatarPlaceHolder}
                      rounded={true}
                    />
                  }
                >
                  <Dropdown.Header>
                    <span className='block text-sm '>User name</span>
                  </Dropdown.Header>
                  <Link to={'/'}>
                    <Dropdown.Item>Home Page</Dropdown.Item>
                  </Link>
                  <Link to={'/profile'}>
                    <Dropdown.Item>Profile Page</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
