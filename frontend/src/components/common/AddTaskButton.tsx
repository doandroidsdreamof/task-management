import React from 'react';

const AddTaskButton = () => {
  return (
    <button
      type='button'

      className='focus:outline-none  p-3 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-base rounded-md text-base   dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
    >
      Add new task
    </button>
  );
};

export default AddTaskButton;
