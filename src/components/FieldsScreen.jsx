import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { CardGroup, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useFetch } from "../hooks/useFetch";
import { FieldCard } from "./FieldCard";
import { Link } from "react-router-dom";
import "../styles/components/FieldsScreen.css";
export const FieldsScreen = () => {
  const url = "https://green-services.herokuapp.com/field/getfields";
  const { data, loading } = useFetch(url);
  // console.log(data);
  const { fieldsDB } = !!data && data;
  // console.log(fieldsDB.length);
  // const url = "https://green-services.herokuapp.com/field/getfields";

  return (
    <Container fluid>
      <Row>
        <Col sm={8} md={8}>
          <h2>Lotes</h2>
        </Col>

        <Col sm={4} md={4}>
          {" "}
          <Button className="button-primary" variant="primary">
            <Link to="/create_field">Crear nuevo lote</Link>
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          {loading ? (
            <Alert variant="primary">Loading...</Alert>
          ) : (
            <>
              <CardGroup>
                {fieldsDB.map(
                  (field) =>
                    field.active === true && (
                      <Col key={field._id} xs={12} sm={12} md={4} lg={4}>
                        <FieldCard {...field} />
                      </Col>
                    )
                )}
              </CardGroup>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
