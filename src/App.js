// create your App component here
import React, { Component } from 'react'

export default class App extends Component {
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(r => r.json())
        .then(j => console.log(j))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
