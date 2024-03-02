
import { useSetRecoilState } from 'recoil';
import * as S from '../../styles/Home'
import { basketIdState } from '../../recoil/atom/Basket';
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleIsActive } from '../../apis/posts';

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
  const [isActive, setIsActive] = useState<boolean>()
  const queryClient = useQueryClient();


  const toggleActive = useMutation({
    mutationFn: () => toggleIsActive(post.id, { isActive: !isActive }),
    onSuccess(data) {
      setIsActive(data.isActive);
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError(err) {
      console.log(err);
    },
  });

  // const updateBasket = () => {
  //   setBasket((prev) => {
  //     const isAlreadyInBasket = prev.postId.includes(post.id);

  //     // 이미 장바구니에 있는 경우 제거, 그렇지 않은 경우 추가
  //     if (isAlreadyInBasket) {
  //       return { ...prev, postId: prev.postId.filter((id: number) => id !== post.id) };
  //     } else {
  //       return { ...prev, postId: [...prev.postId, post.id] };
  //     }
  //   });
  // }

  const clickStarBtn = () => {
    toggleActive.mutate();

  }

  useEffect(() => {
    setIsActive(post.isActive)
  }, [post.isActive])

  return (
    <S.PostListWrap>
      <S.PostImageWrap >
        <S.PostImage src={post.image} />
      </S.PostImageWrap>
      <S.PostContet>
        <S.Title>{post.title}</S.Title>
        <S.Place>{post.place}</S.Place>
        <S.Price>{post.price}원</S.Price>
        <S.Period>{post.period}</S.Period>
      </S.PostContet>
      <S.BtnWrap onClick={clickStarBtn}>
        {isActive ? <FaStar /> : <FaRegStar />}
      </S.BtnWrap>
      {/* < S.Ticketing > 예매하기</S.Ticketing> */}
    </S.PostListWrap >
  )
}

export default PostList;