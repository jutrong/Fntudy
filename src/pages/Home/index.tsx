import { FixedSizeList as List } from 'react-window';
import PostList from '../../components/Home/Post';
import * as S from '../../styles/Home'
import { useQuery } from '@tanstack/react-query';
import { getPostData } from '../../apis/posts';
import { TPost } from '../../types/posts';


const Row = ({ index, style, data }: { index: number, style: React.CSSProperties, data: TPost[] }) => (
  <div style={style}>
    <PostList post={data[index]} />
  </div>
);

const ListComponent = () => {
  const { data: postData } = useQuery({ queryKey: ['posts'], queryFn: getPostData });

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
      <ListComponent />
    </S.Wrap>
  )
}

export default Home;