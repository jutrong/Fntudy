import { useNavigate, useParams } from "react-router-dom";
import { getPostDetail } from "../../apis/posts";
import { useQuery } from "@tanstack/react-query";
import { GrFormPreviousLink } from "react-icons/gr";
import * as S from '../../styles/PostDetail'

const PostDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data: postDetailData } = useQuery({
    queryKey: ['postDetail', params.id],
    queryFn: () => getPostDetail(Number(params.id))
  });

  const onClickPrev = () => {
    navigate(-1);
  }
  return (
    <div>
      <S.HeaderWrap onClick={onClickPrev}>
        <GrFormPreviousLink size={34} />
        <p >뒤로가기</p>
      </S.HeaderWrap>
      <S.ImageWrap>
        <S.PostImage src={postDetailData?.image} />
      </S.ImageWrap>
      <S.ExhibitionContent>
        <p>{postDetailData?.title}</p>
        <p>{postDetailData?.place}</p>
        <p>{postDetailData?.price}원</p>
        <p>{postDetailData?.period}</p>
      </S.ExhibitionContent>
      <S.TicketingBtn>예매하기</S.TicketingBtn>
    </div>
  )
};


export default PostDetail;