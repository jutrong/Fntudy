
import { useSetRecoilState } from 'recoil';
import * as S from '../../styles/Home'
import { basketIdState } from '../../recoil/atom/Basket';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';

type PostListProps = {
  post: {
    id: number;
    title: string;
    image: string;
    place: string;
    price: number;
    period: string;
    isActive: boolean;
  }
}

const PostList = ({ post }: PostListProps) => {
  const setBasket = useSetRecoilState(basketIdState);
  const [isActive, setIsActive] = useState<boolean>()

  const toggleIsActive = async (postId: number) => {
    try {
      const { data } = await axios.patch(`${process.env.REACT_APP_BASE_URL}/postData/${postId}`, { isActive: !isActive });
      setIsActive(data.isActive);
    } catch (e) {
      console.log(e)
    }
  }
  const handleBasket = (postId: number) => {
    setBasket((prev) => {
      const isAlreadyInBasket = Array.isArray(prev.postId) && prev.postId.includes(postId);

      if (isAlreadyInBasket) {
        return { ...prev, postId: prev.postId.filter((id: number) => id !== postId) };
      } else {
        return { ...prev, postId: [...prev.postId, postId] };
      }
    });
  }

  const clickStarBtn = (postId: number) => {
    toggleIsActive(postId);
    handleBasket(postId);
  }

  useEffect(() => {
    setIsActive(post.isActive)
  }, [post.isActive])

  return (
    <S.PostListWrap>
      <S.PostImageWrap>
        <S.PostImage src={post.image} />
      </S.PostImageWrap>
      <S.PostContet>
        <S.Title>{post.title}</S.Title>
        <S.Place>{post.place}</S.Place>
        <S.Price>{post.price}원</S.Price>
        <S.Period>{post.period}</S.Period>
      </S.PostContet>
      <S.BtnWrap onClick={() => clickStarBtn(post.id)}>
        {isActive ? <FaStar /> : <FaRegStar />}
      </S.BtnWrap>
      {/* < S.Ticketing > 예매하기</S.Ticketing> */}
    </S.PostListWrap >
  )
}

export default PostList;