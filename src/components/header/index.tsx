import { logoHeaderProps } from 'types/api'
import * as S from './styles'

type Props ={
    logoHeader: logoHeaderProps
    }


const Logo  = ({logoHeader}: Props ) =>
<S.wrapper>
    <S.img src={`http://localhost:1337${logoHeader.data.attributes.url}`} alt={`http://localhost:1337${logoHeader.data.attributes.alternativeText}`}/>
</S.wrapper>
    
export default Logo