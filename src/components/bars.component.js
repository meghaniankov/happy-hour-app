import React, { Component } from 'react';
import axios from 'axios';
import Collapsible from 'react-collapsible';
import DaysDisplay from './days-display.component';
import DealDisplay from './deals-display.component';

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
  <div class="row Bar-List-Main">
    <div class="Bar-Image">
    </div>
    <div class="Name-Neighborhood-Deal-Container">
      <div class="Bar-Name">
        {props.bar.name}
      </div>
      <div class="Bar-Neighborhood">
        {props.bar.neighborhood}
      </div>
      <div class="Bar-Deal-Type">
        {props.bar.deal_type.map(deal => {
          return <DealDisplay deal={deal} id={deal} /> ;
        })}
      </div>
    </div>
    <div class="Bar-Deal-Days">
        {props.bar.days.map(day => {
          return  <DaysDisplay day={day} id={day} />  ;
        })}
    </div>
  </div>
  <div class="row Bar-List-Expand-Button ">
  <div class="col">
    <Collapsible trigger="See More \/" >
      <div class="Bar-List-Expanded-Inner">
        <div class="Bar-List-Expanded-Full-Deal">
          <p>{props.bar.deal_desc}</p>
        </div>
        <div class="Bar-List-Expanded-Details">
          <div class="Bar-List-Expanded-Left">
            <div class="Bar-List-Expanded-Website">
              <div class="Bar-List-Expanded-SubHeading">
                WEBSITE:
              </div>
              <a href={props.bar.website}>{props.bar.website}</a>
            </div>
            <div class="Bar-List-Expanded-Phone">
              <div class="Bar-List-Expanded-SubHeading">
                PHONE:
              </div>
              <a href={'tel'+props.bar.phone_number}>{props.bar.phone_number} </a>
            </div>
            <div class="Bar-List-Expanded-Address">
              <div class="Bar-List-Expanded-SubHeading">
                ADDRESS:
              </div>
              {props.bar.address}
            </div>
            
          </div>
          <div class="Bar-List-Expanded-Right">
            <div class="Bar-List-Expanded-Facebook">
            <a href={props.bar.facebook}> <i class="fab fa-facebook"></i></a>
            </div>
            <div class="Bar-List-Expanded-Insta">
            <a href={props.bar.instagram}><i class="fab fa-instagram"></i></a>
              
            </div>
            <div class="Bar-List-Expanded-MapIt">
              <a href={'https://maps.google.com/?q='+ props.bar.address}><i class="fas fa-map-marker-alt"></i></a>
            </div>
          </div>

        </div>

        
      </div>

    </Collapsible>
  </div>
  </div>

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
      return <Bar bar={currentbar} key={currentbar._id}/> ;
    })
  }

  render() {
    return (
      <div>
        <Card>
          <CardBody>
            <CardText>
              { this.barsList() } 
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}