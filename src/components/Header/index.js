import React from "react";
import Search from "../Search";
import RadioButtons from "../RadioButtons";
import "./style.css";

var logoURL = require('../../abc_comp.jpg');

function Header(props) {
    return (

        <div>
            <nav className="navbar navbar-light bg-light">
                <img src={logoURL} alt="ABC Company" />
                <div className="mx-auto">
                    <h1 className="NavbarTitle text-primary"> Employee Directory</h1>
                    <h4 className="NavbarSubTitle text-secondary">The ultimate people directory Experience!</h4>
                </div>
                <a className="navbar-brand" href="#">Welcome Sudar Meruva</a>
            </nav>

            <div className="mx-auto searchCenter">
                <Search 
                search={props.search}
                // handleFormSubmit={props.handleFormSubmit}
                handleInputChange={props.handleInputChange}
                />
            </div>
            <div className="mx-auto radioButtonCenter">
                <RadioButtons />
            </div>
            
        </div>

    );
}

export default Header;