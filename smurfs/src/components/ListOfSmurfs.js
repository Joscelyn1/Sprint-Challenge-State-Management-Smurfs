import React, { Component, useEffect } from "react";
import "./App.css";
import { getData, FETCH_SMURF_DATA_FAILURE } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf.js";
import SmurfForm from "./SmurfForm.js";
import Loader from "react-loader-spinner";

function ListOfSmurfs(props) {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="container">
      <SmurfForm />
      <div className="smurf">
        {props.isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="100" width="100" />
        ) : (
          ""
        )}
        {props.smurfs.map(smurf => (
          <Smurf smurf={smurf} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(ListOfSmurfs);
