
import ButtonContact from '../atoms/buttonContact/index.tsx'
import Frontend from '../templates/Frontend'
import * as S from './styles.ts'

import HeroHeaderIgm from '../assets/hero-header-img.png'

function Main() {
  return (
    <Frontend> 
        <S.Container>

          <div>
            <h1>Design driven development of your web product</h1>

            <h6>
            We are a full service digital agency that builds immesive user experience.
            </h6>

            <ButtonContact />
          
            </div>

          <S.CollumnImage>
              <img src={HeroHeaderIgm} alt="Mulher fazendo pesquisa" />
          </S.CollumnImage>


        </S.Container>
     </Frontend>
)
}

export default Main
