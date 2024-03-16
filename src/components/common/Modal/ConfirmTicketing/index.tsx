import { useState } from 'react';
import { useCloseModal } from '../../../../recoil/atom/modal';
import * as S from '../../../../styles/Modal'
import { useNavigate } from 'react-router-dom';

const ConfirmTicketing = () => {
  const [isComplete, setIsComplete] = useState<boolean>()
  const closeModal = useCloseModal();
  const navigate = useNavigate();


  const onClickCancel = () => {
    closeModal();
  }
  const onClickConfirm = () => {
    setIsComplete(true);
  }
  const navigateToHome = () => {
    closeModal();
    navigate('/')
  }

  return (
    <S.Wrap>
      {isComplete ?
        <S.ConfirmWrap>
          <S.ConfirmText>예매가 완료되었습니다.</S.ConfirmText>
          <S.ConfirmBtn onClick={navigateToHome}>확인</S.ConfirmBtn>
        </S.ConfirmWrap>
        :
        <>
          <S.TextWrap>
            <p>티켓을 예매하시겠습니까?</p>
            <p>예매 내역은 이메일로 전송됩니다.</p>
          </S.TextWrap>
          <S.BtnWrap>
            <S.ConfirmBtn onClick={onClickConfirm}>확인</S.ConfirmBtn>
            <S.CancelBtn onClick={onClickCancel}>취소</S.CancelBtn>
          </S.BtnWrap>
        </>
      }

    </S.Wrap>
  )
}

export default ConfirmTicketing;