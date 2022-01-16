import { Fragment } from "react";
import FeaturedPost from "./FeaturedPost";



const Hospitality = () => {
    return (
        <Fragment>
            <h1 style={{textAlign:'center'}}>Hospitality page</h1>
            <FeaturedPost/>
            <FeaturedPost/>
            <FeaturedPost/>
        </Fragment>
    );

};

export default Hospitality;