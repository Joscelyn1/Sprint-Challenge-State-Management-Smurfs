import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, withFormik } from "formik";
import { Form as FormikForm } from "formik";
import * as Yup from "yup";
import { Button } from "shards-react";
import { getData, addSmurf } from "../actions/index.js";
import { connect } from "react-redux";

const SmurfForm = ({
  getData,
  errors,
  touched,
  values,
  handleSubmit,
  status
}) => {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    if (status) {
      setSmurfs(status);
    }
    getData();
  }, [status]);

  return (
    <div className="new-smurf-form">
      <h1>Smurftastic!</h1>
      <FormikForm className="form-container">
        <div className="form-row">
          <p>Name: </p>
          <Field
            className="form-item"
            type="text"
            name="name"
            placeholder="Name"
          />
        </div>
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <div className="form-row">
          <p>Age: </p>
          <Field
            className="form-item"
            type="number"
            name="age"
            placeholder="Age"
          />
        </div>
        {touched.age && errors.age && <p className="error">{errors.age}</p>}
        <div className="form-row">
          <p>Height: </p>
          <Field
            className="form-item"
            type="text"
            name="height"
            placeholder="Height"
          />
        </div>
        {touched.height && errors.height && (
          <p className="error">{errors.height}</p>
        )}

        <Button theme="primary" type="submit">
          Submit!
        </Button>
      </FormikForm>

      {/* {users.map(user => (
        <p key={user.name}>{user.name}</p>
      ))} */}
    </div>
  );
};

// Higher Order Component - HOC
// Hard to share component / stateful logic (custom hooks)
// Function that takes in a component, extends some logic onto that component,
// returns a _new_ component (copy of the passed in component with the extended logic)
const FormikUserForm = withFormik({
  mapPropsToValues({ smurfs, getData, name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.string().required(),
    height: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("http://localhost:3333/smurfs", values)
      .then(res => {
        setStatus(res.data);
        addSmurf(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(SmurfForm);

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(FormikUserForm);
