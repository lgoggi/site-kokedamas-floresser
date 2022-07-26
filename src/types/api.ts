export type imgProps ={ 
    attributes: {
        url: string
        alternativeText: string
    }
}

export type carousel ={
    id: string;
    attributes: {
        url: string
        alternativeText: string
    }
}

export type logoHeaderProps = {
        data: imgProps
        }
    

export type buttonProps={
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

export type LandingPageProps = {
    logoHeader: logoHeaderProps
    button: buttonProps
    mainContent: mainContent
}

