
import { mainContent } from 'types/api'
import * as S from './styles'

type Props = {
    mainContent: mainContent
}

const Carousel = ( mainContent: Props) =>
    <S.wrapper>
        <S.contentTxt>{mainContent.mainContent.mainContentTxt}</S.contentTxt> 
        <S.wrapper_carousel>      
                {mainContent.mainContent.mainContentImg.data.map((IMG) => {
                    return (
                        <S.carousel_slide>
                            <img className='img' src={`http://localhost:1337${IMG.attributes.url}`} alt={`http://localhost:1337${IMG.attributes.alternativeText}`}/> 
                            <S.carousel_snapper id={IMG.id}></S.carousel_snapper>
                        </S.carousel_slide>
                    )
                }) }
        </S.wrapper_carousel>
      
        
    </S.wrapper>


export default Carousel