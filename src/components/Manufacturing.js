import { Fragment } from "react";
import FeaturedPost from "./FeaturedPost";



const Manufacturing = () => {
    return (
        <Fragment>
           <h1 style={{textAlign:'center'}}>
           Manufacturing page
           </h1>
           <FeaturedPost />
           <FeaturedPost />
           <FeaturedPost />
        </Fragment>
    );

};

export default Manufacturing;