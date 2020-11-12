import React from "react";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as Yup from "yup";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { FetchUpdate } from "../../hooks/FetchUpdate";

const schema = Yup.object({
  nameEvent: Yup.string().required(),
  detailEvent: Yup.string().required(),
});
let date = new Date();
let dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];

export const EditEvent = () => {
  const { eventId } = useParams();
  const history = useHistory();
  const updateEventUrl = `https://green-services.herokuapp.com/field/updateevent/${eventId}`;
  const eventUrl = `https://green-services.herokuapp.com/field/getevent/${eventId}`;
  const { data, loading } = useFetch(eventUrl);
  const { event } = !!data && data;
  const { field, nameEvent, detailEvent } = !!event && event;
  // console.log(field, nameEvent, dateEvent, detailEvent);
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };
  return (
    <>
      <Row>
        <Col sm={8} md={8}>
          <h2>Editar evento</h2>
        </Col>

        <Col sm={4} md={4}>
          {" "}
          <button className="btn btn-danger" onClick={handleReturn}>
            Cancelar
          </button>
        </Col>
      </Row>
      {loading ? (
        <Alert variant="primary">Loading...</Alert>
      ) : (
        <Formik
          validationSchema={schema}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            setTimeout(async () => {
              // console.log(JSON.stringify(values));

              await FetchUpdate(updateEventUrl, values);
              setTimeout(() => {
                history.push(`/field/event/${eventId}`);
              }, 300);
            }, 400);
          }}
          initialValues={{
            field: field,
            nameEvent: nameEvent,
            dateEvent: dateString,
            detailEvent: detailEvent,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group
                  as={Col}
                  md="4"
                  className="mr-5 mt-3"
                  controlId="validationFormik101"
                >
                  <Form.Label>Id del lote</Form.Label>
                  <Form.Control
                    type="text"
                    name="field"
                    value={field}
                    onChange={handleChange}
                    isValid={touched.field && !errors.field}
                    isInvalid={!!errors.field}
                    className="mb-3"
                    readOnly
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {" "}
                    {errors.idField}
                  </Form.Control.Feedback>

                  <Form.Label>Nombre del evento</Form.Label>
                  <Form.Control
                    type="text"
                    name="nameEvent"
                    placeholder={nameEvent}
                    value={values.nameEvent}
                    onChange={handleChange}
                    isValid={touched.nameEvent && !errors.nameEvent}
                    isInvalid={!!errors.nameEvent}
                    className="mb-3"
                  />
                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.nameEvent}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  className="mt-3"
                  controlId="validationFormik101"
                >
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Detalles del evento</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="detailEvent"
                      placeholder={detailEvent}
                      value={values.detailEvent}
                      onChange={handleChange}
                      isValid={touched.detailEvent && !errors.detailEvent}
                      isInvalid={!!errors.detailEvent}
                      rows={6}
                    />

                    <Form.Control.Feedback type="invalid" tooltip>
                      {errors.detailEvent}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Group>
              </Form.Row>

              <Button className="mt-3" type="submit" disabled={isSubmitting}>
                Editar evento
              </Button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
