import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export const EventsTable = ({ radioValue, _id }) => {
  // console.log(radioValue);
  const [planned, setPlanned] = useState(radioValue);
  useEffect(() => {
    setPlanned(!planned);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioValue]);
  // console.log("planned", planned);
  const url = `https://green-services.herokuapp.com/field/getevents/${_id}`;
  const { data, loading } = useFetch(url);
  const { eventDB } = !!data && data.field;
  console.log(eventDB);

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nombre del evento</th>
          <th>Fecha</th>
          <th id="status">Estado</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td align="center" colSpan="3">
              <Alert variant="primary">Loading...</Alert>
            </td>
          </tr>
        ) : (
          eventDB.map(
            (event) =>
              event.plannedEvent === !!planned && (
                <tr key={event._id}>
                  <td>
                    {" "}
                    <Link to={`./event/${event._id}`}> {event.nameEvent}</Link>
                  </td>
                  <td>{event.dateEvent} </td>

                  {event.plannedEvent
                    ? ((document.getElementById("status").style.display =
                        "block"),
                      event.executedEvent ? (
                        <td className="status-data d-flex justify-content-center">
                          <i class="far fa-check-circle"></i>
                        </td>
                      ) : (
                        <td className="status-data d-flex justify-content-center">
                          {" "}
                          <i class="far fa-clock"></i>
                        </td>
                      ))
                    : ((document.getElementById("status").style.display =
                        "none"),
                      console.log("hlas"))}
                </tr>
              )
          )
        )}
      </tbody>
    </Table>
  );
};
