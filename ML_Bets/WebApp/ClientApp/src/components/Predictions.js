import React, { Component } from 'react';

export class Predictions extends Component {
    static displayName = Predictions.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
   
  }

  

  render() {
    return (
      <div>
        <h1>Predictions</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}