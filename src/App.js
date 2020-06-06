// create your App component here

import React from 'react';

export default class App extends React.Component {

    state = {

    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {console.log(data)})
    }

    render() {
        return (
          <div>
            WILD
          </div>
        )
      }

}