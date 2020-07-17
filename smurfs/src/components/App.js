import React, { Component, useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchSmurf, addSmurf } from "../store/actions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: "",
    };
  }

  componentDidMount() {
    this.props.fetchSmurf();
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.loadingSmurf && <p>validating your smurfness</p>}
          <h1>SMURFS UP</h1>
          {this.props.smurfs.map((smurf) => (
            <div key={smurf.id}>
              <h2>{smurf.name}</h2>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          ))}
          {this.props.error && <p>{this.props.error.message}</p>}
        </div>
        <div>
          <form>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            Age:{" "}
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <br />
            Height:{" "}
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.handleChange}
            />
            <br />
            <button onClick={this.props.addSmurf(this.state)}>Add Smurf</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingSmurf: state.loadingSmurf,
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurf, addSmurf })(App);
