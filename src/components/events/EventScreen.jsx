import React from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { FetchDelete } from "../../hooks/FetchDelete";
import { useFetch } from "../../hooks/useFetch";

export const EventScreen = () => {
  const { eventId } = useParams();
  const history = useHistory();

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  const handleUpdate = () => {
    // const deleteUrl = `https://green-services.herokuapp.com/field/deletefield/${eventId}`;
    // FetchDelete(deleteUrl);
    // history.push({´/eventEdit/´});
  };
  // console.log(eventId);
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

            <Col sm={4} md={4}>
              {" "}
              <button className="btn btn-outline" onClick={handleReturn}>
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
              </button>
              <Link
                className="stretched-link .d-{sm,md,lg,xl}-none"
                to={`./eventEdit/${eventId}`}
              >
                {" "}
                <i className="fas fa-edit"></i>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col md="2">
              <h5>
                <small>{event.dateEvent}</small>
              </h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md="12">
              <h5>Descripcion</h5>
              <p>{event.detailEvent}</p>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
