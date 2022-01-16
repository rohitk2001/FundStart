import '../App.css';
import About from '../About';
import Category from '../Category';
import PartnerSlider from './partner/partnerSlider';
function Homepage() {
  return (
    <div className="App">
      <About/>
      <Category/>
      <PartnerSlider/>
    </div>
  );
}

export default Homepage;
