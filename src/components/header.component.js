import React from 'react';
import BrittImage from './britt.jpg';
import FilterBar from './filter-bar.component';

import{
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";

 
function AppHeader ()  {
    return(
      <>
      <div>
        <Card>
          <CardBody>
            <CardText>
              <div class="Header-Image-Logo"><img src={BrittImage} /> </div>
              <div class="Header-App-Title">Brittany's Happy Hours</div>
            </CardText>
          </CardBody>
          <div>
        <FilterBar />
      </div>
        </Card>
        
      </div>
      
      </>
    )
  }


export default AppHeader;