// create your App component here
import React, { Component } from 'react';

export default class App extends React.Component {
  state = {
    peopleInSpace: []
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }
  render() {
    return (
      <div>
        <h2>People in Space</h2>
        <ul>{this.state.peopleInSpace.map(person => <li>{person.name}</li>)}</ul>
      </div>
    )
  }
}
