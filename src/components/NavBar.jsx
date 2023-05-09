import React from 'react';

const NavBar = ({ actionAddBtn }) => {
  return (
    <nav className=" w-full flex flex-row justify-around items-center mb-5 bg-gradient-to-r from-cyan-400 to-blue-500 p-10 rounded">
      <h1 className="text-4xl font-bold  text-gray-600 hover:text-gray-700 hover:cursor-pointer">
        {' '}
        <i class="bx bxs-user-account"></i> USER ADMIN{' '}
      </h1>
      <button
        className="bg-cyan-200 text-gray-700 p-2 cursor-wait border border-transparent hover:border-white  rounded hover:bg-cyan-600 hover:text-white "
        onClick={actionAddBtn}
      >
        <i className="bx bx-add-to-queue">
          <span>Add new user</span>
        </i>
      </button>
    </nav>
  );
};

export default NavBar;
