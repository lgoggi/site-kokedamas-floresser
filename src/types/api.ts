export type CardProps = {
    id: string
    attributes: {
        nome: string
        tamanho: string
        galeria: {
            data: {
                id: String
                attributes: {
                    url: string
                    alternativeText: string
                }
            }[]
        }
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
export type CardsProps = {
    data: CardProps[]
}


export type CatalogoProps = {
    cards:CardsProps
}