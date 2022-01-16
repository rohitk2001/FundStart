import { Fragment } from "react";
import FeaturedPost from "./FeaturedPost";



const Food = () => {
    return (
        <Fragment>
           <h1 style={{textAlign:'center'}}>
           Food page
           </h1>
           <FeaturedPost date = "12 nov" description = "a card" image = "../partner/image/3.jpg" imageLabel = "nothing" title = "hello" />
           <FeaturedPost date = "12 nov" description = "a card" image = "../partner/image/3.jpg" imageLabel = "nothing" title = "hello" />
            <FeaturedPost date = "12 nov" description = "a card" image = "../partner/image/3.jpg" imageLabel = "nothing" title = "hello" />
        </Fragment>
    );

};

export default Food;