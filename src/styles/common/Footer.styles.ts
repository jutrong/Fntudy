import styled from 'styled-components';

export const FooterWrap = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  p {
    margin: 5px 0;
    font-size: 12px;
  }
  div {
    cursor: pointer;
  }
`;
export const Exhibition = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ExhibitionText = styled.p<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'black' : 'lightgray')};
`;
export const Basket = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BasketText = styled.p<{ isActive: boolean }>`
  color: ${(props) => (props.isActive ? 'black' : 'lightgray')};
`;
