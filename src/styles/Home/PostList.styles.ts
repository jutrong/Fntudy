import styled from 'styled-components';
import { GoStar } from 'react-icons/go';

export const PostListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 14px 20px;
  cursor: pointer;
`;
export const PostImageWrap = styled.div``;
export const PostImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 16px;
`;
export const PostContet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding-left: 14px;
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
export const Place = styled.p`
  font-size: 14px;
`;
export const Price = styled.p`
  font-size: 12px;
`;
export const Period = styled.p`
  font-size: 10px;
`;
export const BtnWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const Basket = styled(GoStar)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
export const Ticketing = styled.button`
  width: 80px;
  height: 20px;
  background-color: #191919;
  border-radius: 10px;
  color: white;
  font-size: 12px;
`;
