import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function EmployeeCard(props) {
  return (
    
    <tr key={props.index}>
      <td style={{width: "25%"}}>{props.empname}</td>
      <td style={{width: "25%"}}>{props.dept}</td>
      <td style={{width: "25%"}}>{props.city}</td>
      <td style={{width: "25%"}}>{props.state}</td>
    </tr>
    
  );
}

export default EmployeeCard;
