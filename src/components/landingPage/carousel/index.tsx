import { mainContent } from 'types/api'
import * as S from './styles'
import Link from 'next/link'

type Props = {
    mainContent: mainContent
}

const Carousel = ( mainContent: Props) =>
    <S.wrapper>
        {/* <S.contentTxt>A kokedama é uma técnica japonesa de cultivo de plantas em que a planta é cultivada em uma bola de terra coberta com musgo. Kokedamas são ótimas plantas para cultivar em pequenos espaços, como dentro de casa, e também são muito fáceis de cuidar</S.contentTxt> 
        <Link href='/catalogo'><S.button>CATALOGO</S.button></Link> */}
        <S.wrapper_carousel>      
                {mainContent.mainContent.mainContentImg.data.map((IMG) => {
                    return (
                        <S.carousel_slide key={IMG.id}>
                            <img className='img' src={`http://localhost:1337${IMG.attributes.url}`} alt={IMG.attributes.alternativeText} key={IMG.id}/> 
                            <S.carousel_snapper key={IMG.id}></S.carousel_snapper>
                        </S.carousel_slide>
                    )
                }) }
        </S.wrapper_carousel>
      
        
    </S.wrapper>


export default Carousel