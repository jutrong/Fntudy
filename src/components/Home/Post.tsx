
import * as S from '../../styles/Home'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleIsActive } from '../../apis/posts';
import { useNavigate } from 'react-router-dom';

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

const Post = ({ post }: PostListProps) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState<boolean>()


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

  const clickStarBtn = () => {
    toggleActive.mutate();
  }
  const clickTicketingBtn = () => {
    navigate(`/postdetail/${post.id}`)
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

      <S.BtnWrap>
        <S.BasketBtn onClick={clickStarBtn}>
          {isActive ? <FaStar /> : <FaRegStar />}
        </S.BasketBtn>
        < S.Ticketing onClick={clickTicketingBtn}> 예매하기</S.Ticketing>
      </S.BtnWrap>
    </S.PostListWrap >
  )
}

export default Post;