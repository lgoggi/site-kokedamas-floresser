import * as S from './styles'

const ContactBox = () => 
<S.wrapper> {/* MUDAR FONTE HORROROSA E FUNDO TENEBROSO */}
    <a href='https://instagram.com/floresserkokedamas/'  target="_blank" rel="noreferrer">
        <S.card>
            <img className='instagram' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'}/>
        @FLORESSERKOKEDAMAS
        </S.card>
    </a>
    <a className='card' href='https://instagram.com/floresserkokedamas/'  target="_blank" rel="noreferrer">
        <S.card>
            <img className='whatsapp' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png'}/>
            ENVIE UMA MENSAGEM
        </S.card>
    </a>

</S.wrapper>

export default ContactBox