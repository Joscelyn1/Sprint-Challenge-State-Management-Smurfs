import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button
} from "shards-react";

import React from "react";

function Smurf(props) {
  return (
    <Card style={{ maxWidth: "300px" }}>
      <CardHeader>Smurf</CardHeader>
      <CardImg
        width="200px"
        src="https://i.pinimg.com/originals/df/0d/9f/df0d9ff2a9f4166bb4e02e2ff0513bf6.jpg"
      />
      <CardBody>
        <CardTitle>{props.smurf.name}</CardTitle>
        <p>{props.smurf.age} years old</p>
        <p>{props.smurf.height} tall</p>
      </CardBody>
      <CardFooter>Card footer</CardFooter>
    </Card>
  );
}

export default Smurf;
