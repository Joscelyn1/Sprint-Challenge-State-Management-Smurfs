import React, { Component, useEffect } from "react";
import "./App.css";
import { getData, FETCH_SMURF_DATA_FAILURE } from "../actions";
import { connect } from "react-redux";
import ListOfSmurfs from "./ListOfSmurfs.js";

function App(props) {
  useEffect(() => {
    props.getData();
  }, []);
  console.log(props, "props");
  return (
    <div className="App">
      <ListOfSmurfs />
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
)(App);
