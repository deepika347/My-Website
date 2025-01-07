import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return(
        <>
<section id="header" style={{ backgroundImage: `url(${props.imgsrc})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 oder-lg-1">
                    <h1>{props.name}<strong className="brand-name"> My-website</strong></h1>
                    <h2 className="my-3">
                      Counsult With My Talented Team Of Website Developer.
                    </h2>
                    <div className="mt-3">
                     <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</section>
        </>
    );
};
export default Common;