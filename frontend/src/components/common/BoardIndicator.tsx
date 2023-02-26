import React from 'react';

interface BoardIndicator {
  boardCounter: number;
}

const BoardIndicator = () => {
  return (
    <div className=' p-2 ml-4   border-b w-48  flex text-left font-roboto'>
      <span className='text-xl'>All Boards</span>
    </div>
  );
};

export default BoardIndicator;
