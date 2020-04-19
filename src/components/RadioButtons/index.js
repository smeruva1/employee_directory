import React from "react";
import "./style.css";


function Dropdowns(props) {
    return (
        <div className="dropdowns container">
            <div className="row">
                <div className="col-sm d-flex justify-content-end">
                    <h6>Sort by: </h6>
                </div>
                <div className="col-sm dropdown d-flex justify-content-start">
                    <form>
                        <fieldset id="sortEmp">
                            <input type="radio" id="department" value="department" name="sortEmp" className="ml-3" checked />
                            <label for="department">Department</label>
                            <input type="radio" id="title" value="title" name="sortEmp" className="ml-3" />
                            <label for="title">Title</label>
                            <input type="radio" id="location" value="location" name="sortEmp" className="ml-3" />
                            <label for="location">Location</label>
                        </fieldset>
                    </form>
                    {/* <label for="Department" className="mr-2">Department</label>
                    <select id="Department" name="department" onChange={props.handleInputChange} className="mr-4">
                        <option value="Retail">BSN</option>
                        <option value="Retail">CPR</option>
                        <option value="Marketing">FN</option>
                        <option value="Human Resources">HETU</option>
                        <option value="Retail">INSEE</option>
                        <option value="Retail">PPS</option>
                        <option value="Engineering">TFN</option>
                    </select>

                    <label for="Title" className="mr-2">City</label>
                    <select id="title" name="title" onChange={props.handleInputChange} className="mr-4">
                        <option value="Associate">Aubervilliers</option>
                        <option value="Manager">Hekendorp</option>
                        <option value="Director">Montpellier</option>
                        <option value="VP">Belfast</option>
                    </select>

                    <label for="Location" className="mr-2">State</label>
                    <select id="Location" name="location" onChange={props.handleInputChange} className="mr-4">
                        <option value="Seattle">Oppland</option>
                        <option value="Parsippany">Gelderland</option>
                        <option value="Frisco">Loiret</option>
                        <option value="Kansas">Wellington</option>
                    </select> */}
                    <br />
                </div>
                <div className="col-sm justify-content-end">
                    <button className="btn ml-3"><i className="fa fa-list"></i></button>
                    <button className="btn ml-3"><i className="fa fa-table"></i></button>
                </div>
            </div>
            <br />
        </div>

    );
}

export default Dropdowns;