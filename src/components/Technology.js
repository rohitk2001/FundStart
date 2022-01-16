import { Fragment } from "react";
import FeaturedPost from "./FeaturedPost";



const Technology = () => {
    return (
        <Fragment>
           <h1 style={{textAlign:'center'}}>
           Technology page
           </h1>
           <FeaturedPost  />
           <FeaturedPost  />
            <FeaturedPost  />
        </Fragment>
    );

};

export default Technology;