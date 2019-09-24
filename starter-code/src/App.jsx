import React, { Component } from "react";
//import Card from "./components/Card";

import "./App.css";

import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();

    this.state = {
      allperson: contacts,
      person: contacts.slice(0, 5),
      newPerson: []
    };
    this.random = this.random.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.delete = this.delete.bind(this);
  }

  random() {
    const actor = this.state.allperson[
      Math.floor(Math.random() * this.state.allperson.length)
    ];

    this.setState({
      ...this.state,
      // newPerson: this.state.newPerson.push(actor)
      newPerson: [...this.state.newPerson, actor]
    });

    console.log(this.state.newPerson);
    console.log(actor);
  }

  sortByName() {
    this.setState({
      ...this.state,
      person: [
        ...this.state.person.sort(function(a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        })
      ]
    });

    console.log(this.state);
  }

  sortByPopularity() {
    console.log("sort by popularity");
  }

  delete(event) {
    console.log(event.target.value);
    let index = 0;

    for (var i = 0; i < this.state.person.length; i += 1) {
      if (this.state.person[i].name === event.target.value) {
        console.log(i);
        index = i;
      }
    }
    let array4 = [...this.state.person];
    array4.splice(index, 1);
    this.setState({
      ...this.state,
      person: array4
    });
  }

  render() {
    const message = "New actors who got fired";
    const array = this.state.person;
    const array2 = this.state.newPerson;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Actors.com</h1>
          <p>{message}</p>

          <div>
            <button onClick={this.random}>
              Add a random actor to get fired!
            </button>
            <button onClick={this.sortByName}>sort by name</button>
            <button onClick={this.sortByPopularity}>sort by popularity</button>
          </div>

          <div>
            {array2.map(actor => {
              return (
                <div>
                  <div>
                    <hr></hr>
                    <img
                      src={actor.pictureUrl}
                      alt="Logo"
                      width="200"
                      height="auto"
                    />
                    <h1>name: {actor.name}</h1>
                    <h1>popularity: {actor.popularity}</h1>
                    <hr></hr>
                  </div>
                </div>
              );
            })}{" "}
          </div>

          <div>
            {array.map(actor => {
              return (
                <div>
                  <div>
                    <hr></hr>
                    <img
                      src={actor.pictureUrl}
                      alt="Logo"
                      width="200"
                      height="auto"
                    />
                    <h1>name: {actor.name}</h1>
                    <h1>popularity: {actor.popularity}</h1>
                    <button value={actor.name} onClick={this.delete}>
                      delete
                    </button>
                    <hr></hr>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
