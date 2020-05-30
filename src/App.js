import React, {Component} from 'react';

export default class App extends Component{
    constructor(props){
        super(props) 
        this.state = {people: [ {name : "Randy"} ]} 
        this.url = 'http://api.open-notify.org/astros.json'
    }
    makeEles = () =>{  
            let {people} =  this.state
        return people.map(person => <h1>{person.name}</h1>)
    }
    componentDidMount(){  
        console.log(this.url)
        fetch(this.url) 
        .then(res => res.json()) 
        .then(data => this.setState({ people : data.people }))
    }
    

    render(){
        return (<div>{this.makeEles()}</div>)
    }
}