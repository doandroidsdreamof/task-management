import React, { useEffect, useState, useRef, MouseEventHandler } from 'react';

const Notification = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const notificationRef = React.useRef<any>(null);
  const iconRef = React.useRef<any>(null);

  useEffect(() => {
    document.addEventListener('mousedown', closeOpenMenus);
    return () => document.removeEventListener('mousedown', closeOpenMenus);
  }, []);

  const closeOpenMenus = (e: MouseEvent): void => {
    if (
      !iconRef.current.contains(e.target) &&
      notificationRef.current &&
      notificationRef &&
      !notificationRef.current.contains(e.target)
    ) {
      setToggle(false);
    }
  };

  return (
    <>
      <button
        ref={iconRef}
        onClick={() => setToggle(!toggle)}
        type='button'
        className='p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>View notifications</span>

        <svg
          aria-hidden='true'
          className='w-6 h-6'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z'></path>
        </svg>
      </button>

      <div
        ref={notificationRef}
        className={
          toggle === false
            ? 'hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700'
            : 'top-16  right-5 fixed overflow-hidden z-50  max-w-sm text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700'
        }
        id='notification-dropdown'
      >
        <div className='block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          Notifications
        </div>
        <div className='overflow-y-auto max-h-72'>
          <a href='#' className='flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600'>
            <div className='flex-shrink-0'></div>
            <div className='pl-3 w-full'>
              <div className='text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400'>
                New message from <span className='font-semibold text-gray-900 dark:text-white'>Bonnie Green</span>:
                "Hey, what's up? All set for the presentation?"
              </div>
              <div className='text-xs font-medium text-primary-700 dark:text-primary-400'>a few moments ago</div>
            </div>
          </a>

        </div>

      </div>
    </>
  );
};

export default Notification;
