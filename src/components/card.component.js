import React from 'react';

// reactstrap components
import{
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
// core components



const CardComp = ({name}) => {
    
    return (

        <Card>
        <CardBody>
          <CardTitle tag='h4'>{name}</CardTitle>
          <CardText>
            <div>
                <p>Sample description</p>
            </div>
          </CardText>
        </CardBody>
      </Card>
       
        
    )
}

export default CardComp;