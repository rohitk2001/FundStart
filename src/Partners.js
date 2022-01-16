import {Carousel} from 'react-bootstrap';
import partnerImage from './combine_images.jpg';
const Partners = () =>{
    return(
        <div>
            <Carousel style={{marginTop:'50px',margin:'20px',backgroundColor:'black'}}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="150px"
                    src={partnerImage}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="150px"
                    src={partnerImage}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    height="150px"
                    src={partnerImage}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    )
}

export default Partners;