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
    sortEmp: "",
    // deparment: "",
    // title: "",
    // location: "",
    employees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        this.setState({ employees: [... new Set(res.data.results)] })
        console.log(res.data.results);
        res.data.results.sort(this.compareValues('name'));
      });
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  // compare = (a, b) => {
  //   // Use toUpperCase() to ignore character casing
  //   const firstA = a.first.toUpperCase();
  //   const firstB = b.first.toUpperCase();
  
  //   let comparison = 0;
  //   if (firstA > firstB) {
  //     comparison = 1;
  //   } else if (firstA < firstB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // };
  
  compareValues = (key, order = 'asc') => {
    return function innerSort(a, b) {
      console.log('===========');
      console.log(key);
      console.log(a);
      console.log(b);

      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }


  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    
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
            //console.log(shouldFilter);
            return shouldFilter;
          })
          .sort(this.compareValues('first'))
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
