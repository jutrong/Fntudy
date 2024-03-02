import { Outlet } from 'react-router-dom';
import * as S from '../styles/Layout.styles'
import Footer from './common/Footer';

const Layout = () => {
  return (
    <S.Wrap>
      <Outlet />
      <Footer />
    </S.Wrap>
  )

}

export default Layout;