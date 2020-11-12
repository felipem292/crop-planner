import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { FetchDelete } from "../../hooks/FetchDelete";
import { useFetch } from "../../hooks/useFetch";

import { OptionsButtons } from "../OptionsButtons";

export const OneField = () => {
  let history = useHistory();
  const { fieldId } = useParams();
  const url = `https://green-services.herokuapp.com/field/getfields/${fieldId}`;
  const { data, loading } = useFetch(url);
  const { field } = !!data && data;
  // console.log(field);
  const handleDelete = () => {
    console.log("eliminar lote");
    const DeleteFieldurl = `https://green-services.herokuapp.com/field/deletefield/${fieldId}`;
    FetchDelete(DeleteFieldurl);
    setTimeout(() => {
      history.push(`/fields`);
    }, 300);
  };
  return (
    <Container fluid>
      {loading ? (
        <Alert variant="primary">Loading...</Alert>
      ) : (
        <>
          <Row>
            <Col sm={8} md={8}>
              <h2>{field.nameField}</h2>
            </Col>
            <Col sm={4} md={4}>
              {" "}
              <Button className="button-primary" variant="primary">
                <Link to={`/create_event/${field._id}`}>
                  Crear nuevo evento
                </Link>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={2} md={2}>
              <h5>{field.typeField}</h5>
            </Col>
            <Col sm={6} md={6}>
              <h5>{field.dateInit}</h5>
            </Col>
            <Col sm={4} md={4}>
              {" "}
              <Button
                className="button-danger mb-5"
                variant="danger"
                onClick={handleDelete}
              >
                Eliminar lote
              </Button>
            </Col>
          </Row>
          <Row>
            <OptionsButtons {...field} />
          </Row>
        </>
      )}
    </Container>
  );
};
