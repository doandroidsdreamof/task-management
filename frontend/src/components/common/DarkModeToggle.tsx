import React, { useState } from 'react';

const DarkModeToggle = () => {
  const [toggle, setToggle] = useState(false);
  //className="w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1"

  return (
    <>
      <div className='w-fit   px-12 p-2 bg-gray-200 text-center h-fit  rounded-md flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <span className=''>
            <svg className={toggle ? 'h-5 w-5 text-gray-300' : 'h-5 w-5 text-gray-500'} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </span>
          <div className="">
            <div className='w-full h-full flex flex-col justify-center items-center'>
              <div className='flex justify-center items-center'></div>

              <button onClick={() => setToggle(!toggle)} className='flex justify-center items-center '>
                <div className={toggle ? 'w-14 h-7 flex items-center bg-purple-500 rounded-full mx-3 px-1 ' : 'w-14 h-7 flex items-center bg-purple-800 rounded-full mx-3 px-1 '}>
                  <div
                    className={
                      toggle
                        ? 'bg-white w-5 h-5 rounded-full shadow-md transform translate-x-7'
                        : 'bg-white w-5 h-5 rounded-full shadow-md transform '
                    }
                  ></div>
                </div>
              </button>
            </div>
          </div>
          <span className=''>
            <svg className={toggle ? 'h-5 w-5 text-gray-500' : 'h-5 w-5 text-gray-300'} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
};

export default DarkModeToggle;
