const GET_CARD = (id: any)=> /* GraphQL */`
query GET_Card{
    card (id: ${id}){
        data{
            id
            attributes{
              nome
              photo{
                data{
                  id
                  attributes{
                    url
                    alternativeText
                  }
                }
              }
            }
          }
    }
}
`

export default GET_CARD;