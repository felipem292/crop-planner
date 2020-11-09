import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FieldCard = ({
  _id,
  nameField,
  typeField,
  dateInit,
  notesFiled,
  quantitySeeds,
}) => {
  //console.log(nameField);
  return (
    <Card className="mt-3 mb-3">
      <Card.Img
        variant="top"
        src={`./assets/samaria1.jpeg`}
        atl="Foto del lote"
      />
      <Card.Body>
        <Card.Title>{nameField}</Card.Title>
        <Card.Text>{notesFiled}</Card.Text>

        <Link
          className="stretched-link .d-{sm,md,lg,xl}-none"
          to={`./field/${_id}`}
        ></Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Created: {dateInit}</small>
      </Card.Footer>
    </Card>
  );
};
