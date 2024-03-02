import { FixedSizeList as List } from 'react-window';
import PostList from '../../components/Home/PostList';
import * as S from '../../styles/Home'
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPostData } from '../../apis/posts';




const Home = () => {
  const { data: postData } = useQuery({ queryKey: ['posts'], queryFn: getPostData });


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