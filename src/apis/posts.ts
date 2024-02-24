import axios from 'axios';

export const getPostData = async () => {
  const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/postData`);

  return response.data;
};
