import Link from "next/link"
import React from "react"


import * as S from './styles'

type Props = {
    button: {
        ButtonName: string
        ButtonName2: string
        ButtonName3: string
    }
}

const Buttons = (button: Props) =>
    <S.wrapper>
        <Link href="/catalogo"><S.buttonNav>{button.button.ButtonName}</S.buttonNav></Link>
        <Link href="/catalogo"><S.buttonNav>{button.button.ButtonName2}</S.buttonNav></Link>
        <Link href="/catalogo"><S.buttonNav>{button.button.ButtonName3}</S.buttonNav></Link>
    </S.wrapper>


export default Buttons