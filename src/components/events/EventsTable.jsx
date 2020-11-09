import React from "react";
import { Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const EventsTable = ({ _id }) => {
  // console.log(_id);
  const url = `https://green-services.herokuapp.com/field/getevents/${_id}`;
  const { data, loading } = useFetch(url);
  const { eventDB } = !!data && data.field;
  // console.log(eventDB);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nombre del evento</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td align="center" colSpan="2">
              <Alert variant="primary">Loading...</Alert>
            </td>
          </tr>
        ) : (
          eventDB.map(
            (event) =>
              event.active === true && (
                <tr key={event._id}>
                  <td>
                    {" "}
                    <Link to={`./event/${event._id}`}> {event.nameEvent}</Link>
                  </td>
                  <td>{event.dateEvent} </td>
                </tr>
              )
          )
        )}
      </tbody>
    </Table>
  );
};
