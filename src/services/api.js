import axios from 'axios';

axios.defaults.baseURL = 'https://642682fc556bad2a5b513e9a.mockapi.io/';

export const getUsers = async (page = 1, limit = 3) => {
  const res = await axios.get('users', { params: { page, limit } });
  return res.data;
};
