import React from 'react';

import{
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
  } from "reactstrap";

 
function AppHeader ()  {
    return(
      <div>
        <Card>
          <CardBody>
            <CardText>
              <div>
                  <h1>Filter/Search stuff</h1>
              </div>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }


export default AppHeader;