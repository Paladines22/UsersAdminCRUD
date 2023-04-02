import React from 'react';

const UserCard = ({ user, deleteUser, loadUserToForm }) => {
  return (
    <article className="w-60  border-white p-3 rounded-md cursor-pointer hover:border-cyan-200 border-2 m-4">
      <h2 className="text-cyan-500 text-xl font-bold text-center mb-5">
        {user.first_name} {user.last_name}
      </h2>
      <ul>
        <li className="mb-3">
          <span className="font-medium text-gray-400">
            <i className="bx bx-mail-send"></i>EMAIL{' '}
          </span>{' '}
          <br></br>
          {user.email}
        </li>
        <li>
          <span className="font-medium  text-gray-400">
            <i className="bx bx-gift"></i>BIRTHDAY{' '}
          </span>{' '}
          <br></br>
          {user.birthday}
        </li>
        <div className="flex flex-row justify-center">
          <button
            className="border mr-2 p-3 cursor-wait border-transparent hover:border-red-500 hover:text-red-500 rounded  bg-gray-900"
            onClick={() => deleteUser(user.id)}
          >
            <i className="bx bx-trash"></i>
          </button>
          <button
            className="border cursor-wait border-transparent hover:border-amber-400 hover:text-amber-400 rounded p-3 bg-gray-900"
            onClick={() => loadUserToForm(user)}
          >
            <i className="bx bxs-edit"></i>
          </button>
        </div>
      </ul>
    </article>
  );
};

export default UserCard;
