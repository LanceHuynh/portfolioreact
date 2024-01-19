import React from 'react';
import "./CrudEmployee.css"

const CrudEmployee = () => {

  return (
    <div id='scrollTo' className='crud-employee-container'>
      <div className='crud-employee-entry'>
        <h2>CRD(Create, Read, Delete) Employee List</h2>
        <a href="https://lancehuynh.github.io/employeeListClient">Link to app</a>
        <p>The app is the result of 3 working parts interacting with one another: a client, a server and a database each hosted at different locations. Functionalities including:
        </p>
        <p>Read: The server gets the employees details from the server, send to the client and have it render the data</p>
        <p>Create: the server has the database add employee entries at request of the client</p>
        <p>Delete: the server has the database delete employee entries at request of the client</p>
        <p>Created by React to allow real-time information update without needing to refresh the browser</p>
      </div>
    </div>
  );
};

export default CrudEmployee;