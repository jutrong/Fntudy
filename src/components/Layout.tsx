import * as S from '../styles/Layout.styles'
import Footer from './common/Footer';

const Layout = ({ children }: any) => {
  return (
    <S.Wrap>
      {children}
      <Footer />
    </S.Wrap>
  )

}

export default Layout;