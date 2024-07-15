import Header from '../../organism/Header'
import * as S from './styles'

type FrontendProps = {
    children: React.ReactNode
}
const Frontend = ({children}: FrontendProps) => {
    return <S.Container>
        <Header></Header>

        <main>
            {children}
        </main>
    </S.Container>
}
export default Frontend