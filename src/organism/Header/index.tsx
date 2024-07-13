import * as S from './styles'

import Logo from '../../molecules/Logo'
import Menu from '../Menu'
import Button from '../../atoms/button' 

const Header = () => {
    return (
    <S.box>
        <Logo/>
        <Menu/>
        <Button/>
    </S.box>
    )
}

export default Header
