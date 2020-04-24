import React from "react";
import "./style.css";


function ToggleButtons(props) {
    return (
        <div className="col-sm justify-content-end">
            
            {/* <button className="btn ml-3" enabled = {props.btnStatusFalse} disabled = {props.btnStatusTrue} onClick={props.handleToggleClickToList}><i className="fa fa-table"></i></button>
            <button className="btn ml-3" enabled = {props.btnStatusTrue} disabled = {props.btnStatusFalse}  onClick={props.handleToggleClickToCard} ><i className="fa fa-list"></i></button> */}
        {/* <button className="btn ml-3" enabled = "false" disabled = "true" onClick={props.handleToggleClickToList}><i className="fa fa-table"></i></button>
            <button className="btn ml-3" enabled = "true" disabled = "false"  onClick={props.handleToggleClickToCard} ><i className="fa fa-list"></i></button> */}
            <button className="btn ml-3" disabled = {props.btnStatusTrue} onClick={props.handleToggleClickToList}><i className="fa fa-table"></i></button>
            <button className="btn ml-3" disabled = {props.btnStatusFalse}   onClick={props.handleToggleClickToCard} ><i className="fa fa-list"></i></button>
        </div>
    );
}

export default ToggleButtons;

