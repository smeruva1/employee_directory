import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import API from "./utils/API";
import * as ReactBootStrap from "react-bootstrap";
import Table from "react-bootstrap/Table";
import 'bootstrap/dist/css/bootstrap.min.css';


var newKey = "";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    search: "",
    sortEmp: "",
    toggleCardList: "card",
    btnStatusFalse: "",
    btnStatusTrue: "true",
    employees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ employees: [... new Set(res.data.results)] })
        //console.log(res.data.results);
        //res.data.results.sort(this.compareValues('name'));
      });
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleToggleClickToCard = () => {
    this.setState({ toggleCardList: 'list' });
    this.setState({ btnStatusFalse: 'true' });
    this.setState({ btnStatusTrue: "" });
  };

  handleToggleClickToList = () => {
    this.setState({ toggleCardList: 'card' });
    this.setState({ btnStatusFalse: "" });
    this.setState({ btnStatusTrue: "true" });
  };

  compareValues = (key, order = 'asc') => {

    if (key === "department") {
      newKey = 'name';
    } else if (key === "name") {
      newKey = 'first';
    }

    return function innerSort(a, b) {

      if (newKey === 'first') {
        // console.log('===========');
        // console.log(a.name[newKey]);
        // console.log(b.name[newKey]);
        if (!a.name.hasOwnProperty(newKey) || !b.name.hasOwnProperty(newKey)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = (typeof a.name[newKey] === 'string')
          ? a.name[newKey].toUpperCase() : a.name[newKey];
        const varB = (typeof b.name[newKey] === 'string')
          ? b.name[newKey].toUpperCase() : b.name[newKey];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
          console.log("comparison = + 1");
        } else if (varA < varB) {
          comparison = -1;
          console.log("comparison = - 1");
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );


      } else if (newKey === 'name') {

        console.log('===========');
        console.log(a.id[newKey]);
        console.log(b.id[newKey]);

        if (!a.id.hasOwnProperty(newKey) || !b.id.hasOwnProperty(newKey)) {
          // property doesn't exist on either object
          return 0;
        }

        const varA = (typeof a.id[newKey] === 'string')
          ? a.id[newKey].toUpperCase() : a.id[newKey];
        const varB = (typeof b.id[newKey] === 'string')
          ? b.id[newKey].toUpperCase() : b.id[newKey];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
          console.log("comparison = + 1");
        } else if (varA < varB) {
          comparison = -1;
          console.log("comparison = - 1");
        }
        return (
          (order === 'desc') ? (comparison * -1) : comparison
        );
      };
    };
  }

  filterEmployees = () => {

    const filterList = this.state.employees.filter(({ name }) => {
      const combinedName = `${name.first} ${name.last}`;
      const shouldFilter = combinedName.toLowerCase().includes(this.state.search.toLowerCase());
      return shouldFilter;
    })
    return filterList;
  }


  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {

    return (
      <div>
        <Header
          search={this.state.search}
          // sortEmp={this.state.sortEmp}
          btnStatusTrue={this.state.btnStatusTrue}
          btnStatusFalse={this.state.btnStatusFalse}
          handleInputChange={this.handleInputChange}
          handleToggleClickToList={this.handleToggleClickToList}
          handleToggleClickToCard={this.handleToggleClickToCard}
        />

        {this.state.toggleCardList === 'card' ? (
          <Wrapper>
            {this.filterEmployees().length ? this.filterEmployees()
              .sort(this.compareValues(this.state.sortEmp))
              .map(emp => (
                <EmployeeCard
                  id={emp.id.value + ' ' + emp.picture.large + ' ' + emp.name.first + ' ' + emp.name.last}
                  key={emp.id.value + ' ' + emp.picture.large + ' ' + emp.name.first + ' ' + emp.name.last}
                  empname={emp.name.first + ' ' + emp.name.last}
                  image={emp.picture.large}
                  dept={emp.id.name}
                  city={emp.location.city}
                  state={emp.location.state}
                />
              )) : <h3>No Employees found!! </h3>}

          </Wrapper>
        ) : (
            <Wrapper>
              <Table striped bordered hover>
                <thead className="tableheader">
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>City</th>
                    <th>State</th>
                  </tr>
                </thead>
                <tbody>
                  {this.filterEmployees().length ? this.filterEmployees()
                    .sort(this.compareValues(this.state.sortEmp))
                    .map(emp => (
                      <EmployeeTable
                        key={emp.id.value + ' ' + emp.picture.large + ' ' + emp.name.first + ' ' + emp.name.last}
                        empname={emp.name.first + ' ' + emp.name.last}
                        dept={emp.id.name}
                        city={emp.location.city}
                        state={emp.location.state}
                      />
                    ))
                    : <h3>No Employees found!! </h3>}
                </tbody>
              </Table>
            </Wrapper>
          )}
      </div>
    );
  }
}

export default App;
