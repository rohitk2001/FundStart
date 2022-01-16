import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "./footer.css";

import { IconContext } from "react-icons";

import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { RiMediumFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";

function Footer(props) {
  const data = [
    {
      id: 1,
      url: "https://www.facebook.com/Hills2Home/",
      img: <FaFacebook />,
      name: "FACEBOOK",
    },
    {
      id: 2,
      url: "https://twitter.com/hills2home",
      img: <IoLogoTwitter />,
      name: "TWITTER",
    },

    {
      id: 3,
      url:
        "https://www.linkedin.com/company/hills2home-h2h?originalSubdomain=in",
      img: <SiLinkedin />,
      name: "LINKEDIN",
    },
    {
      id: 4,
      url: "https://www.instagram.com/hills2home_official/",
      img: <GrInstagram />,
      name: "INSTAGRAM",
    },
    {
      id: 5,
      url: "https://medium.com/@hills2home.communication",
      img: <RiMediumFill />,
      name: "MEDIUM",
    },
    {
      id: 6,
      url: "https://www.indiamart.com/hills2home/",
      img: <BiShoppingBag />,
      name: "INDIA MART",
    },
  ];

  const renderFooter = (item) => {
    return (
      <Col key={item.id} md={2} xs={4}>
        <div className="text-center my-2">
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.img}
            <h6 className="text-white font-weight-bold mt-2">{item.name}</h6>
          </a>
        </div>
      </Col>
    );
  };
  return (
    <div className="footer bg-dark overflow-hidden">
      <Row className="pt-3 bg-black">
        <IconContext.Provider
          value={{ style: { color: "#fff" }, size: "1.5em" }}
        >
          {data.map((item) => {
            return renderFooter(item);
          })}
        </IconContext.Provider>
      </Row>
      <div className="divider"></div>
      <div className="text-center text-white mt-1">
        <h6 className="m-0 pb-2 font-weight-bolder text-white">
          &#169; 2021-{new Date().getFullYear()}, FundStart.com, Inc. or its
          affiliates
        </h6>
      </div>
    </div>
  );
}

export default Footer;
