import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, FormInput } from "shards-react";
import { addSmurf } from "../actions/index.js";

const SmurfForm = props => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const handleChanges = e => {
    setName(e.target.value);
    setAge(e.target.value);
    setHeight(e.target.value);
  };
  return (
    <Form>
      <FormInput
        className="name-input"
        type="text"
        id="add-name-form"
        name="name"
        value={name}
        onChange={handleChanges}
        placeholder="name"
      />
      <FormInput
        className="age-input"
        type="number"
        id="add-age-form"
        name="age"
        value={age}
        onChange={handleChanges}
        placeholder="age"
      />
      <FormInput
        className="height-input"
        type="text"
        id="add-height-form"
        name="height"
        value={height}
        onChange={handleChanges}
        placeholder="height"
      />
      <Button>Submit</Button>
    </Form>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
