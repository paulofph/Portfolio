import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><b>{props.title}</b></Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <ListGroup>
        <ListGroup.Item className="project-card-list-item">
          <h6><b>{props.role}</b></h6>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer>
        <Button
          variant="primary"
          href={props.link}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Link"}
        </Button>
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;
