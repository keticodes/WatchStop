import "../css/home.css";
import Slider from "../Elements/slider";
import { watchData } from "../data/watchData";
const Home = () => {
  return (
    <div id="Home-page-wrapper">
      <Slider itemData={watchData} />
    </div>
  );
};
export default Home;
