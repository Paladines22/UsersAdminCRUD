import axios from 'axios';

const BASE_URL = 'https://users-crud-sxpq.onrender.com/';

export const getUser = async () => {
  try {
    const res = await axios.get(BASE_URL + 'users/');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
export const createUser = async (dataUsers) => {
  try {
    await axios.post(BASE_URL + 'users/', dataUsers);

    console.log('Se creo existosamente');
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axios.delete(BASE_URL + `users/${userId}/`);

    console.log(`El usuario con el id <${userId}> fue eliminado`);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, newDataUser) => {
  try {
    await axios.put(BASE_URL + `users/${userId}/`, newDataUser);

    console.log(`La pelicula ${newDataUser.name} fue actualizada exitosamente`);
  } catch (error) {
    console.error(error);
  }
};
