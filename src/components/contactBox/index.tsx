import { Icon } from '@iconify/react'
import * as S from './styles'

const ContactBox = () => 
<S.wrapper> 
    <a href='https://instagram.com/floresserkokedamas/'  target="_blank" rel="noreferrer">
        <S.card className='instagram'>
            <Icon icon='ant-design:instagram-filled' width={65}/>
            FLORESSERKOKEDAMAS
        </S.card>
    </a>
    <a className='card' href='https://wa.me/'  target="_blank" rel="noreferrer">
        <S.card className='whatsapp'>
            <Icon icon='dashicons:whatsapp' width={65}/>
            ENVIE UMA MENSAGEM
        </S.card>
    </a>

</S.wrapper>

export default ContactBox