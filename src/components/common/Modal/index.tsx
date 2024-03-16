import { ReactNode } from "react";
import { ModalName, modalState, useCloseModal } from "../../../recoil/atom/modal";
import { useRecoilValue } from "recoil";
import Portal from "./Portal";
import * as S from '../../../styles/Modal'

type ModalProps = {
  children: ReactNode;
  name: ModalName;
}

/**
 * @param name 모달 이름
 */

const Modal = ({ children, name }: ModalProps) => {
  const closeModal = useCloseModal();
  const { name: currentModalName, isActive } = useRecoilValue(modalState)

  const handleOuterClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget.firstChild) {
      closeModal();
    }
  };

  if (!isActive || currentModalName !== name) return null;

  return (
    <Portal>
      <S.Backdrop onClick={handleOuterClick}>
        <S.Container>
          <S.Content >
            {children}
          </S.Content>
        </S.Container>
      </S.Backdrop>
    </Portal>
  )
}
export default Modal;