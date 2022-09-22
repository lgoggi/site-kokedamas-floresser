import * as S from './styles'

type Props ={
    content: {
        nome: string
        photo: {
            data: {
                id: String
                attributes: {
                    url: string
                    alternativeText: string
                }
            }
        }
    }
}

const MainBox = (content: Props) => 
<>
    <S.mainbox_wrapper>
        <S.img src={`http://localhost:1337${content.content.photo.data.attributes.url}`}/>
        <S.info_wrapper>
            <S.nome>{content.content.nome}</S.nome>
        </S.info_wrapper>
    </S.mainbox_wrapper>
</>

export default MainBox