import axios from 'axios';
import { BASE_URL } from 'utils';

axios.defaults.baseURL = BASE_URL;

export const getUsers = async (page = 1, limit = 6) => {
  const res = await axios.get('users', { params: { page, limit } });
  return res.data;
};
