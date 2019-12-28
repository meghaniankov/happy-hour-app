import React from 'react';
import BarsList from './components/bars.component';
import CardComp from './components/card.component';
import './App.css';
import { Container } from 'reactstrap';
import AppHeader from './components/header.component';


import NavBar from './components/UI_Addon/src/components/Navbars/IndexNavbar';
import { Navbar } from 'reactstrap';



function App() {
  return (
    <div className="App">
        
        <div className="clear-filter" filter-color="white">
          <AppHeader />
         
          <Container>
            <div><BarsList /></div>
          </Container>
     
        </div>
    </div>
    
  );
}

export default App;
