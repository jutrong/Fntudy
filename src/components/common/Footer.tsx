import * as S from '../../styles/common'
import { IoTicket } from "react-icons/io5";
import { IoMdBasket } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <S.FooterWrap>
      <S.Exhibition onClick={() => navigate('/')} >
        <IoTicket size={20} />
        <S.ExhibitionText isActive={activePath === '/'}>전시회</S.ExhibitionText>
      </S.Exhibition>
      <S.Basket onClick={() => navigate('/basket')}>
        <IoMdBasket size={20} />
        <S.BasketText isActive={activePath === '/basket'}>장바구니</S.BasketText>
      </S.Basket>
    </S.FooterWrap>
  )
}

export default Footer;
