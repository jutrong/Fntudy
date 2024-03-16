import { FixedSizeList as List } from 'react-window';
import Post from '../../components/Home/Post';
import * as S from '../../styles/Home'
import { useQuery } from '@tanstack/react-query';
import postApi from '../../apis/posts';
import { TPost } from '../../types/posts';


const Row = ({ index, style, data }: { index: number, style: React.CSSProperties, data: TPost[] }) => (
  <div style={style} >
    <Post post={data[index]} />
  </div >
);

const PostList = () => {
  const { data: postData } = useQuery({ queryKey: ['posts'], queryFn: postApi.getPostData });

  return (
    <List
      height={820}
      width={500}
      itemSize={120}
      itemCount={postData?.length || 0}
      itemData={postData}
    >
      {Row}
    </List >
  )
}

const Home = () => {

  return (
    <S.Wrap>
      <PostList />
    </S.Wrap>
  )
}

export default Home;