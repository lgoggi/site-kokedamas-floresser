const GET_CATALOGO = /* GraphQL */`
query GET_catalogo {
 cards {	
  data{
    id
    attributes{
      nome
      tamanho
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
export default GET_CATALOGO