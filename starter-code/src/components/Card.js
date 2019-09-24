import React, { Component } from "react";

export class Card extends Component {
  render() {
    return (
      <div>
        <hr></hr>
        <img
          src="https://image.tmdb.org/t/p/w500/d9NkfCwczP0TjgrjpF94jF67SK8.jpg"
          alt="Logo"
          width="200"
          height="auto"
        />
        <h1>name: name</h1>
        <h1>popularity: 16</h1>
        <hr></hr>
      </div>
    );
  }
}

export default Card;
