import React, { Component } from 'react';
import axios from 'axios';
import { DropdownItem, Button, Form, FormGroup, Label, Input, FormText, CustomInput } from 'reactstrap';



function Neighborhood (props){


  return(
    <>

      <div class="Filter-Neighborhood-Name">
        {props.neighborhood.name} 
      </div>
      <div class="Filter-Checkbox">
        <input type="checkbox"/>
      </div>
    </>
  )
}

export default class NeighborhoodsList extends Component {
  constructor(props) {
    super(props);
    this.state = {neighborhoods: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/neighborhoods/')
      .then(response => {
        this.setState({ neighborhoods: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  neighborhoodsList() {
    return this.state.neighborhoods.map(currentneighborhood => {
      return <Neighborhood neighborhood={currentneighborhood} key={currentneighborhood._id}/>;
    })
  }



  // handleCheckClick = () => {
  //   this.setState({ checked: !this.state.checked });
  // }

  render() {
    return (
      <div class="Filter-Neighborhoods-List">

        { this.neighborhoodsList() }
      </div>
    )
  }
}