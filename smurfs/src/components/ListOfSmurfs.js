import React, { Component, useEffect } from "react";
import "./App.css";
import { getData, FETCH_SMURF_DATA_FAILURE } from "../actions";
import { connect } from "react-redux";
import Smurf from "./Smurf.js";

function ListOfSmurfs(props) {
  useEffect(() => {
    props.getData();
  }, []);

  return (
    <div className="smurf">
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} />
      ))}
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
