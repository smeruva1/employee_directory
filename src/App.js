import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header";
import API from "./utils/API";
//import { useTable } from 'react-table'

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    search: "",
    deparment: "",
    title: "",
    location: "",
    employees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ employees: [... new Set(res.data.results)] })
        console.log(res.data.results);
      });
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the employees for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();

  //   console.log("inside handleFormSubmit ************* ");
  //   console.log(this.state.search.toLowerCase());
  //   console.log(this.state.employees);

  //   this.state.employees.filter(emp => emp.name.first.toLowerCase() === this.state.search.toLowerCase());
  // };


  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    // {
    //   const headings = [
    //     'Employee First Name',
    //     'Employee Last Name',
    //     'Department',
    //     'City',
    //     'State',
    //   ];
    //   const rows = this.state.employees;     
    //   }
      
    return (
      <div>
        {/* <Title>
          <h1>ABC - Employee Directory</h1>
        </Title> */}
        <Header
          search={this.state.search}
          //handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />

        <Wrapper>
          {console.log(this.state.search)}

          {this.state.employees.filter(({ name }) => {
            const combinedName = `${name.first} ${name.last}`;
            const shouldFilter = combinedName.toLowerCase().includes(this.state.search.toLowerCase());
            console.log(shouldFilter);
            return shouldFilter;
          })
            //  .sort(


            // )
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
            ))}
        </Wrapper>
        {/* <Wrapper>
        <Page title="Data table">
          <DataTable headings={headings} rows={rows} />
        </Page>
          
          
    </Wrapper> */}
      </div>
    );
  }
}

export default App;
