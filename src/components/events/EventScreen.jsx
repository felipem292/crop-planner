import React from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { FetchPut } from "../../hooks/FetchPut";

import { useFetch } from "../../hooks/useFetch";

export const EventScreen = () => {
  const { eventId } = useParams();
  const history = useHistory();
  const url = `https://green-services.herokuapp.com/field/getevent/${eventId}`;
  const { data, loading } = useFetch(url);
  const { event } = !!data && data;
  // console.log(event);

  return (
    <Container fluid>
      {loading ? (
        <Alert variant="primary">Loading...</Alert>
      ) : (
        <>
          <Row>
            <Col sm={8} md={8}>
              <h2>{event.nameEvent}</h2>
            </Col>

            <Col sm={4} md={4} className=" center-block text-center">
              {" "}
              <button className="btn btn-outline">
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  className="bi bi-x"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
                <Link
                  className="stretched-link .d-{sm,md,lg,xl}-none"
                  to={`/field/${event.field}`}
                ></Link>
              </button>
            </Col>
          </Row>

          <Row>
            <Col sm={8} md={8}>
              <h5>
                <small>{event.dateEvent}</small>
              </h5>
            </Col>
            <Col sm={4} md={4} className=" center-block text-center">
              <Link
                className="stretched-link .d-{sm,md,lg,xl}-none"
                to={`./eventEdit/${eventId}`}
              >
                {" "}
                <i className="fas fa-edit"></i>
              </Link>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md="12">
              <h5>Descripcion</h5>
              <p>{event.detailEvent}</p>
            </Col>
          </Row>
          {event.plannedEvent &&
            (event.executedEvent ? (
              <Alert variant="success">Evento ejecutado</Alert>
            ) : (
              <Row>
                <Button
                  variant="outline-primary"
                  onClick={() => {
                    let checkUrl = `https://green-services.herokuapp.com/field/checkevent/${event._id}`;
                    // console.log(checkUrl);
                    FetchPut(checkUrl);
                    history.goBack();
                  }}
                >
                  Marcar evento como ejecutado
                </Button>
              </Row>
            ))}
        </>
      )}
    </Container>
  );
};
