import client from "graphql/client";
import GET_LANDING_PAGE from "graphql/queries/getLandingPage";
import { GetStaticProps } from "next";
import { LandingPageProps} from "types/api";

import Logo from "../components/header";
import Buttons from "../components/buttons";
import Carousel from "components/carousel";
import FonteTeste from "components/fontTest";



const index = ({logoHeader, button, mainContent}: LandingPageProps) => (
  <>
  <Logo logoHeader={logoHeader}/>
  <Buttons button={button}/>
  <Carousel mainContent={mainContent}/>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  const { landingPage } = await client.request(GET_LANDING_PAGE)

  return {
    props: {
      ...landingPage.data.attributes
    }
  }
}

export default index