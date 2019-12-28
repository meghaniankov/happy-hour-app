import React, { Component } from 'react';
import axios from 'axios';
import Collapsible from 'react-collapsible';

import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

function Bar (props){
  return(
    <>
  <tr>
    <td>{props.bar.name}</td>
    <td>{props.bar.neighborhood}</td>
    <td>{props.bar.deal_type}</td>
  </tr >
    <Collapsible trigger="Start here" contentContainerTagName="tr">
    <p>{props.bar.deal_desc}</p>
    </Collapsible>

  </>
  )
}

export default class BarsList extends Component {
  constructor(props) {
    super(props);

    this.state = {bars: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/bars/')
      .then(response => {
        this.setState({ bars: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  barsList() {
    return this.state.bars.map(currentbar => {
      return <>
              <Bar bar={currentbar} key={currentbar._id}/> 
          
        
            </>;
    })
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardText>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Name</th>
                    <th>Neighborhood</th>
                    <th>Deal</th>
                  </tr>
                </thead>
                <tbody>
                  { this.barsList() }                
                </tbody>
            </table>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}