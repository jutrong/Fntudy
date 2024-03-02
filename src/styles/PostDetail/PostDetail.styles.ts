import styled from 'styled-components';

export const HeaderWrap = styled.div`
  padding: 40px 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 24px;
  cursor: pointer;
`;
export const ImageWrap = styled.div`
  margin: 20px 0;
`;
export const PostImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
`;
export const ExhibitionContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const TicketingBtn = styled.button`
  width: 100%;
  height: 60px;
  background-color: orange;
`;
