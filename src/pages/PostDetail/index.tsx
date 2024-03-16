import { useNavigate, useParams } from "react-router-dom";
import postApi from "../../apis/posts";
import { useQuery } from "@tanstack/react-query";
import { GrFormPreviousLink } from "react-icons/gr";
import * as S from '../../styles/PostDetail'
import { useSetRecoilState } from "recoil";
import { ModalName, modalState } from "../../recoil/atom/modal";
import ConfirmTicketing from "../../components/common/Modal/ConfirmTicketing";
import Modal from "../../components/common/Modal";

const PostDetail = () => {
  const params = useParams();
  const navigate = useNavigate();
  const setModal = useSetRecoilState(modalState);

  const { data: postDetailData } = useQuery({
    queryKey: ['postDetail', params.id],
    queryFn: () => postApi.getPostDetail(Number(params.id))
  });

  const onClickPrev = () => {
    navigate(-1);
  }
  const onClickTicketing = () => {
    setModal({ name: ModalName.confirmTicketing, isActive: true })
  }

  return (
    <>
      <Modal name={ModalName.confirmTicketing} >
        <ConfirmTicketing />
      </Modal>
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
        <S.TicketingBtn onClick={onClickTicketing}>예매하기</S.TicketingBtn>
      </div>
    </>
  )
};


export default PostDetail;