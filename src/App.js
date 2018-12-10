import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from 'goledgereact';
import MaterialTable from 'material-table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          headerTitle="Título do Header"
          menuLinks="wooooo"
        >
          <MaterialTable
            columns={[
              { title: 'Nome', field: 'name' },
              { title: 'Sobrenome', field: 'surname' },
              { title: 'Nascimento', field: 'birthYear', type: 'numeric' },
            ]}
            data={[
              { name: 'Lucas', surname: 'Malta', birthYear: 1995 },
            ]}
            title="Table maneira"
          />
        </Header>
      </div>
    );
  }
}

export default App;
