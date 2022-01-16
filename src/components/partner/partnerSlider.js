import React from "react";
import Carousel from "react-elastic-carousel";
import "./partner.css";

import Amazon from "./images/amazon.jpg";
import India from "./images/startup_india.jpg";
import Boat from "./images/boat.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function PartnerSlider() {
  return (
    <div className="slider">
      <h2 className="heading text-center">Our Partners</h2>

      <Carousel
        // enableAutoPlay autoPlaySpeed={1500}
        breakPoints={breakPoints}>
        <div className="item-img">
          <img src={Amazon} alt=""></img>
        </div>
        <div className="item-img">
          <img src={India} alt=""></img>
        </div>
        <div className="item-img">
          <img src={Boat} alt=""></img>
        </div>

        <div className="item-img">
          <img src={Amazon} alt=""></img>
        </div>
        <div className="item-img">
          <img src={India} alt=""></img>
        </div>
        <div className="item-img">
          <img src={Boat} alt=""></img>
        </div>

      </Carousel>
    </div>
  );
}

export default PartnerSlider;
