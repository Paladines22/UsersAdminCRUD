import React from 'react';
import { useForm } from 'react-hook-form';

const UserForm = ({
  idUserToUpdate,
  handleSubmit,
  register,
  reset,
  handleUpdateCreate,
}) => {
  const emptyValueForm = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: '',
  };

  const myHandleSubmit = async (data) => {
    console.log({ data });

    await handleUpdateCreate(data);
    reset(emptyValueForm);
  };

  return (
    <form
      className=" bg-gradient-to-r from-cyan-700 to-blue-900 p-10 rounded relative"
      onSubmit={handleSubmit(myHandleSubmit)}
    >
      <button className="absolute right-6 top-5">
        <i className="bx bx-x"></i>
      </button>
      <h2 className="text-3xl font-bold italic text-center">
        {' '}
        {idUserToUpdate ? 'Edit' : 'Create'} User
      </h2>

      <div className="flex flex-col gap-8 pt-10">
        <div className="flex justify-between">
          <label htmlFor="nameId" className="font-semibold ">
            First Name{' '}
          </label>

          <input
            className="text-black rounded justify-items-end"
            type="text"
            id="nameId"
            {...register('first_name')}
          />
        </div>

        <div className="flex justify-between gap-8">
          <label htmlFor="lastNameId" className="font-semibold">
            Last Name{' '}
          </label>

          <input
            className="text-black rounded"
            type="text"
            id="lastNameId"
            {...register('last_name')}
          />
        </div>

        <div className="flex justify-between">
          <label htmlFor="emailId" className="font-semibold">
            Email{' '}
          </label>

          <input
            className="text-black justify-items-end rounded"
            type="text"
            id="emailId"
            {...register('email')}
          />
        </div>

        <div className="flex justify-between gap-8">
          <label htmlFor="passwordId" className="font-semibold">
            Password{' '}
          </label>

          <input
            className="text-black rounded"
            type="password"
            id="passwordId"
            {...register('password')}
          />
        </div>

        <div className="flex justify-start ">
          <label htmlFor="" className="font-semibold ">
            Birthday{' '}
          </label>

          <input
            className="text-black rounded ml-12"
            type="date"
            {...register('birthday')}
          />
        </div>
      </div>
      <div className="text-center">
        <button className=" bg-cyan-200 text-gray-700 mt-10 px-2 py-1 cursor-wait border border-transparent hover:border-white  rounded hover:bg-cyan-600 hover:text-white ">
          Add new
        </button>
      </div>
    </form>
  );
};

export default UserForm;
