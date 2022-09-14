
export type imgProps = { 
    attributes: {
        url: string
        alternativeText: string
    }
}

export type carousel = {
    id: string;
    attributes: {
        url: string
        alternativeText: string
    }
}

export type buttonProps= {
    ButtonName: string
    ButtonName2: string
    ButtonName3: string
}

export type mainContentImgProps = {
    data: Array< carousel >
    }
    
export type mainContent = { 
    mainContentImg: mainContentImgProps
    mainContentTxt: string
}

export type CardProps = {
    id: string
    attributes: {
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
export type CardsProps = {
    data: CardProps[]
}
export type LandingPageProps = {
    button: buttonProps
    mainContent: mainContent
}


export type CatalogoProps = {
    cards:CardsProps
}