const GET_LANDING_PAGE = /* GraphQL */`
query GET_landingPage {
  landingPage {
    data {
      attributes {
        logoHeader {
          data {
            attributes {
              url
              alternativeText
            }
          }
        }
      button{
        ButtonName
        ButtonName2
        ButtonName3
      }
      mainContent{
        mainContentImg{
          data{
            attributes{
              url
              alternativeText
            }
          }
        }
    		mainContentTxt
        }
      }   
        }
      }
    }
`
export default GET_LANDING_PAGE