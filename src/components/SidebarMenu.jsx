import React from "react";
import { ListGroup } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
export const SidebarMenu = ({ children }) => {
  return (
    <Container fluid className="mt-3">
      <Row>
        <br />
        <Col sm={4} md={4}>
          <h1>Green Services</h1>
          <hr />
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                {" "}
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/fields"
                >
                  Lotes
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <NavLink
                  activeClassName="active"
                  className="nav-item nav-link"
                  exact
                  to="/events"
                >
                  Eventos
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
        <Col sm={8} md={8}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
