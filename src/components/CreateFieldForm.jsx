import React from "react";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Row } from "react-bootstrap";
import { FetchPost } from "../hooks/FetchPost";
import { useHistory } from "react-router-dom";

const schema = Yup.object({
  nameField: Yup.string().required(),
  typeField: Yup.string().required(),
  notesFiled: Yup.string().required(),
});
let date = new Date();
let dateString = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
const url = `https://green-services.herokuapp.com/field/createfield`;
export const CreateFieldForm = () => {
  const history = useHistory();
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
          <h2>Nuevo lote</h2>
        </Col>

        <Col sm={4} md={4}>
          {" "}
          <button className="btn btn-danger" onClick={handleReturn}>
            Cancelar
          </button>
        </Col>
      </Row>

      <Formik
        validationSchema={schema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            // console.log(JSON.stringify(values));

            FetchPost(url, values);
            setTimeout(() => {
              history.push(`/fields`);
            }, 300);
          }, 400);
        }}
        initialValues={{
          nameField: "",
          typeField: "",
          dateInit: dateString,
          quantitySeeds: 1,
          notesFiled: "",
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
                <Form.Label>Nombre del lote</Form.Label>
                <Form.Control
                  type="text"
                  name="nameField"
                  placeholder="nameField"
                  value={values.nameField}
                  onChange={handleChange}
                  isValid={touched.nameField && !errors.nameField}
                  isInvalid={!!errors.nameField}
                  className="mb-3"
                />

                <Form.Control.Feedback type="invalid" tooltip>
                  {" "}
                  {errors.nameField}
                </Form.Control.Feedback>

                <Form.Label>tipo de lote</Form.Label>
                <Form.Control
                  type="text"
                  name="typeField"
                  placeholder="typeField"
                  value={values.typeField}
                  onChange={handleChange}
                  isValid={touched.typeField && !errors.typeField}
                  isInvalid={!!errors.typeField}
                  className="mb-3"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.typeField}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="mt-3"
                controlId="validationFormik101"
              >
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Notas</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="notesFiled"
                    placeholder="notesFiled"
                    value={values.notesFiled}
                    onChange={handleChange}
                    isValid={touched.notesFiled && !errors.notesFiled}
                    isInvalid={!!errors.notesFiled}
                    rows={6}
                  />

                  <Form.Control.Feedback type="invalid" tooltip>
                    {errors.notesFiled}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Group>
            </Form.Row>

            <Button className="mt-3" type="submit" disabled={isSubmitting}>
              Crear lote
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};
