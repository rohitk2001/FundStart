import { Fragment } from "react";
import FeaturedPost from "./FeaturedPost";



const Pharmaceutical = () => {
    return (
        <Fragment>
           <h1 style={{textAlign:'center'}}>
           Pharmaceutical page
           </h1>
           <FeaturedPost />
           <FeaturedPost />
            <FeaturedPost />
        </Fragment>
    );

};

export default Pharmaceutical;