import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.empname} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.empname}
          </li>
          <li>
            <strong>Department:</strong> {props.dept}
          </li>
          <li>
            <strong>City:</strong> {props.city}
          </li>
          <li>
            <strong>State:</strong> {props.state}
          </li>
        </ul>
      </div>

      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default EmployeeCard;
