import React from 'react';
import BarsList from './components/bars.component';
import './App.css';
import { Container } from 'reactstrap';
import AppHeader from './components/header.component';



function App() {
  return (
    <div className="App">
          <AppHeader />
          <Container>
            <div><BarsList /></div>
          </Container>
    </div>
  );
}

export default App;
