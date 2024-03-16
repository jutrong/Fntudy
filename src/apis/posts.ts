import axios from 'axios';
import { TPost } from '../types/posts';

export const getPostData = async () => {
  const { data } = await axios.get<TPost[]>(`${process.env.REACT_APP_BASE_URL}/postData`);

  return data;
};

export const getPostDetail = async (postId: number) => {
  const { data } = await axios.get<TPost>(`${process.env.REACT_APP_BASE_URL}/postData/${postId}`);

  return data;
};

export const toggleIsActive = async (postId: number, active: any) => {
  try {
    const { data } = await axios.patch(`${process.env.REACT_APP_BASE_URL}/postData/${postId}`, active);

    return data;
  } catch (e) {
    console.log(e);
  }
};

const postApi = {
  getPostData,
  getPostDetail,
  toggleIsActive,
};

export default postApi;
