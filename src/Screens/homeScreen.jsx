
import AboutPg from "../components/About/aboutpage";
import Adds from "../components/Adds/adds";
import Card from "../components/Card/fleetCard";
import NewsCard from "../components/Card/newsCard";
import Footer from "../components/Footer/footer";
import FormTabs from "../components/Form/form";
import Banner from "../components/Header/bannerUi";
import Services from "../components/Services/services";
import Testimonal from "../components/Testimonals/testimonal";

function Home() {
  return (
    <>
      <Banner />
      <Services />
      <FormTabs />
      <Card />
      <Testimonal />
      <AboutPg />
      <Adds />
      <NewsCard />
      <Footer />
    </>
  )
}
export default Home;