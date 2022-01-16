import {Button,Card,CardGroup} from 'react-bootstrap';
import { Link } from "react-router-dom";
const Category = () => {
    return (
      <div>
          <CardGroup  style={{marginBottom:'20px'}}>
            <Card border="dark" style={{marginLeft:'20px',marginRight:'20px'}}>
              <Card.Body style={{backgroundColor:'#F9D371'}}>
                <Card.Title>Pharmaceutical</Card.Title>
                <Card.Text>
                The pharmaceutical industry discovers, develops, produces, and markets drugs or pharmaceutical drugs for use as 
                medications to be administered to patients, with the aim to cure them, vaccinate them, or alleviate the symptoms.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-grid">
                <Link to = "/Pharmaceutical">
                  <Button style={{backgroundColor:'#072227'}}>Explore</Button>
                </Link>
                </div>
              </Card.Footer>
            </Card>
            <Card border="dark" style={{marginRight:'20px'}}>
              <Card.Body style={{backgroundColor:'#CA965C'}}>
                <Card.Title>Technology</Card.Title>
                <Card.Text>
                Technology is the sum of any techniques, skills, methods, and processes used in the production of goods 
                or services or in the accomplishment of objectives, such as scientific investigation..
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-grid">
                <Link to = "/Technology">
                  <Button style={{backgroundColor:'#072227'}}>Explore</Button>
                </Link>
                </div>
              </Card.Footer>
            </Card>
            <Card border="dark" style={{marginRight:'20px'}}>
              <Card.Body style={{backgroundColor:'#EEC373'}}>
                <Card.Title>Agriculture</Card.Title>
                <Card.Text>
                  Agriculture is the practice of cultivating plants and livestock.
                  The agriculture industry is the sector of the economy that produces livestock, poultry, fish and crops.
                </Card.Text>
              </Card.Body>
              <Card.Footer> 
                <div className="d-grid">
                  <Link to = "/Agriculture">
                    <Button style={{backgroundColor:'#072227'}}>Explore</Button>
                  </Link>
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup style={{marginBottom:'20px'}}>
            <Card border="dark" style={{marginLeft:'20px',marginRight:'20px'}}>
              <Card.Body style={{backgroundColor:'#F4DFBA'}}>
                <Card.Title>Food Industry</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-grid">
                  <Link to = "/Food">
                    <Button style={{backgroundColor:'#072227'}}>Explore</Button>
                  </Link>
                </div>
              </Card.Footer>
            </Card>
            <Card  border="dark" style={{marginRight:'20px'}}>
              <Card.Body style={{backgroundColor:'#F3C892'}}>
                <Card.Title>Manufacturing</Card.Title>
                <Card.Text>
                Manufacturing is the production of goods through the use of labour, machinery, tools and 
                biological or chemical processing or formulation. ... The materials are modified during various manufacturing processes to create the finished product.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <div className="d-grid">
                  <Link to = "/Manufacturing">
                    <Button style={{backgroundColor:'#072227'}}>Explore</Button>
                  </Link>
                </div>
              </Card.Footer>
            </Card>
            <Card border="dark" style={{marginRight:'20px'}}>
              <Card.Body style={{backgroundColor:'#FFF1BD'}}>
                <Card.Title>Hospitality</Card.Title>
                <Card.Text>
                  The hospitality industry is a broad category of fields within the service industry 
                  that includes lodging, food and drink service, event planning, theme parks, travel and tourism. 
                  It includes hotels, tourism agencies, restaurants and bars.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <div className="d-grid">
                <Link to = "/Hospitality">
                    <Button style={{backgroundColor:'#072227'}}>Explore</Button>
                </Link>  
                </div>
              </Card.Footer>
            </Card>
          </CardGroup>
      </div>
    );
  };
  
  export default Category;