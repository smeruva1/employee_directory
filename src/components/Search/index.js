import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div className="searchBox">
            <br />
            <form className="form-inline mr-auto">
                <input
                    name="search"
                    onChange={props.handleInputChange}
                    value={props.search}
                    className="form-control mr-sm-2" type="text" placeholder="Search an employee" aria-label="Search" size="50" align="center" />
            </form>
            <br />
        </div>
    );
}

export default Search;