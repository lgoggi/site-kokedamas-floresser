import client from "graphql/client";
import { GetStaticProps } from "next";

import GET_LANDING_PAGE from "graphql/queries/getLandingPage";
import { LandingPageProps} from "types/api";

import Logo from "../components/header";
import Buttons from "../components/landingPage/buttons";
import Carousel from "components/landingPage/carousel";



const index = ({mainContent}: LandingPageProps) => (
  <>
    <Logo />
    <Buttons />
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