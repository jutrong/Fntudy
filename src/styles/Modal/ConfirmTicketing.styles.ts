import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 24px;
`;
export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  p {
    margin: 5px 0;
  }
`;
export const BtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const ConfirmBtn = styled.button`
  background-color: orange;
  width: 90%;
  height: 50px;
`;
export const CancelBtn = styled.button`
  background-color: lightgray;
  width: 90%;
  height: 50px;
`;

export const ConfirmWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: 100%;
`;
export const ConfirmText = styled.p`
  margin-bottom: 40px;
`;
