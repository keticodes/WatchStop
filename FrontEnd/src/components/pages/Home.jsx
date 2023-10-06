import "../css/home.css";
import Slider from "../Elements/slider";
import Footer from "../footer";
import { watchData } from "../data/watchData";
import WatchesSection from "../watchesSection";

const Home = () => {
  return (
    <div id="Home-page-wrapper">
      <Slider itemData={watchData} />
      <WatchesSection />
      <Footer />
    </div>
  );
};
export default Home;
