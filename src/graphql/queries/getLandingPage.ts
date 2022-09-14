const GET_LANDING_PAGE = /* GraphQL */`
query GET_landingPage {
  landingPage {
    data {
      attributes {
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