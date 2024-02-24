import PostList from '../../components/Home/PostList';
import * as S from '../../styles/Home'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TPost } from '../../types/posts';



const Home = () => {
  const [postData, setPostData] = useState<TPost[]>();

  // 서버로부터 게시물 데이터를 받아오는 함수
  const getPostData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/postData`);
      setPostData(response.data);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPostData();
  }, [])

  return (
    <S.Wrap>
      {postData?.map((post) => (
        <PostList key={post.id} post={post} /> // 
      ))}
    </S.Wrap>
  )
}

export default Home;