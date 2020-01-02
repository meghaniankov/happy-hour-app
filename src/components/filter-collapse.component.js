import React, { Component } from 'react';
import axios from 'axios';
import Collapsible from 'react-collapsible';
import Neigborhood from './neighborhoods.component'

import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";




export default class FilterCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {bars: []};
  }



  render() {
    return (
      <Collapsible trigger="open">
        <div class="Filter-Menu-Main">
          <h6>NEIGHBORHOODS</h6>
          <div class="Filter-Menu-Neighborhood">
            <Neigborhood  />
            <Neigborhood  />
          </div>
          <h6>PRICE</h6>
          <div class="Filter-Menu-Neighborhood">
            <Neigborhood  />
          </div>
        </div>
        <h6>APPLY</h6>
      </Collapsible>
    )
  }
}
