import React, { Component } from 'react';
import axios from "axios";
import Smurf from './Smurf';
import styled from 'styled-components';

//styled components

const SmurfTitleWrapper = styled.div`
color: green;
font-size: 2rem;
`;

const SmurfWrapper = styled.div`
margin-bottom: 3%;
`;

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data }))
      .catch(error => console.log(error));
  }


  render() {
    return (
      <div className="Smurfs">
        <SmurfTitleWrapper><h1>Smurf Village</h1></SmurfTitleWrapper>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfWrapper>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
              </SmurfWrapper>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
