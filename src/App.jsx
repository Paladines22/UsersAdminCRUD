import React, { useEffect, useState, useRef } from 'react';
import NavBar from './components/NavBar';
import UserCard from './components/UserCard';
import Modal from './components/Modal';
import { getUser, createUser, deleteUser, updateUser } from './services';
import UserForm from './components/UserForm';
import Footer from './components/Footer';
import { useForm } from 'react-hook-form';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [idUserToUpdate, setIdUserToUpdate] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  const formRef = useRef(null);

  const loadUsers = async () => {
    try {
      setIsLoading(true);
      const users = await getUser();

      setUsers(users);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateCreate = async (dataForm) => {
    setIsLoading(true);

    if (idUserToUpdate) await updateUser(idUserToUpdate, dataForm);
    else await createUser(dataForm);

    await loadUsers();

    setIdUserToUpdate(null);
    setIsLoading(false);
    setIsFormVisible(false);
  };

  const handleClick = () => {
    setIsFormVisible(true);
  };

  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    await loadUsers();
  };

  const loadUserToForm = (userData) => {
    setIsFormVisible(true);
    reset({
      first_name: userData.first_name,
      last_name: userData.last_name,
      password: userData.password,
      email: userData.email,
      birthday: userData.birthday,
    });

    setIdUserToUpdate(userData.id);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="bg-neutral-800 h-screen flex flex-col justify-between items-center p-10 text-white relative">
      <NavBar className="" actionAddBtn={handleClick} />
      <Modal isVisible={isFormVisible}>
        <UserForm
          handleUpdateCreate={handleUpdateCreate}
          idUserToUpdate={idUserToUpdate}
          handleSubmit={handleSubmit}
          register={register}
          reset={reset}
        />
      </Modal>
      <div className="flex flex-wrap ">
        {isLoading ? (
          <p>Loading users...</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={handleDeleteUser}
              loadUserToForm={loadUserToForm}
            />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
