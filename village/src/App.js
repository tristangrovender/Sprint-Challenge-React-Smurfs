import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
// import './App.css';

//styled components

const WrapperDiv = styled.div`
  font-family: san-serif;
  text-align: center;
  background: lightgrey;
  
`;

const StyledNavLink = styled(NavLink)`
color: blue;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3333/smurfs')
    .then((response) =>{
      this.setState(() =>({smurfs: response.data}))
    })
    .catch(err=>console.log(err))
  }

  addSmurf = (data) => {
    axios.post('http://localhost:3333/smurfs', data)
    .then(response => {console.log(response)
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err))
  }
  
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  
  render() {
    return (
      <WrapperDiv>
        <div className="App">
          <nav>      
            <StyledNavLink exact to="/"> Smurf Village </StyledNavLink>
            |
            <StyledNavLink to="/smurf-form">Add Smurf</StyledNavLink>
          </nav>
            <Route path="/smurf-form" render={props => (
            <SmurfForm updateSmurfs={this.updateSmurfs} {...props} />
          )}/>
            <Route exact path="/" render={props => <Smurfs smurfs={this.state.smurfs} {...props} />}
          />
        </div>
      </WrapperDiv>
    );
  }
}

export default App;