import client from "graphql/client";
import { GetStaticProps } from "next";
import GET_LANDING_PAGE from "graphql/queries/getLandingPage";
import { LandingPageProps, logoHeaderProps } from "types/api";

import Logo from "components/header";
import FonteTeste from "components/fontTest";

const index = ({logoHeader}: LandingPageProps) => 
<>
<Logo logoHeader={logoHeader}/>
<FonteTeste />
</>


export const getStaticProps: GetStaticProps = async () => {
    const { landingPage } = await client.request(GET_LANDING_PAGE)
  
    
    return {
      props: {
        ...landingPage.data.attributes
      }
    }
  }
export default index;