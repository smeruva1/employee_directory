import React from "react";
import "./style.css";
import ToggleButtons from "../ToggleButtons";



function RadioButtons(props) {
    return (
        <div className="RadioButton container">
            <div className="row">
                <div className="col-sm d-flex justify-content-end">
                    <h6>Sort by: </h6>
                </div>
                <div className="col-sm dropdown d-flex justify-content-start">
                    <form>
                        <fieldset id="sortEmp">
                            <input type="radio" id="name" value="name" name="sortEmp" className="ml-3"
                                onChange={props.handleInputChange}
                            //    value={props.sortEmp}
                            />
                            <label for="name">Name</label>
                            <input type="radio" id="department" value="department" name="sortEmp" className="ml-3"
                                onChange={props.handleInputChange}
                            // value={props.sortEmp}
                            />
                            <label for="department">Department</label>

                        </fieldset>
                    </form>

                    <br />
                </div>

                <ToggleButtons
                    btnStatusTrue={props.btnStatusTrue}
                    btnStatusFalse={props.btnStatusFalse}
                    handleToggleClickToList={props.handleToggleClickToList}
                    handleToggleClickToCard={props.handleToggleClickToCard}
                />

            </div>
            <br />
        </div>

    );
}

export default RadioButtons;