import { Outlet } from 'react-router-dom';
import * as S from '../styles/SubLayout.styles'

const SubLayout = () => {
  return (
    <S.Wrap>
      <Outlet />
    </S.Wrap>
  )

}

export default SubLayout;