import { Component } from 'react';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrementG = event => {
    // console.log(event.target);
    this.setState(prevState => {
      return {
        good: prevState.good +1,
      }
    })
  }
  handleIncrementN = event => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral +1,
      }
    })
  }
  handleIncrementB = event => {
    this.setState(prevState => {
      return {
        bad: prevState.bad +1,
      }
    })
  }

  render(){
const { good, neutral, bad } = this.state;
return (
    <section>
      <h1>Please, leave your feedback</h1>
      <ul>
        <li>
          <button type='button' onClick={this.handleIncrementG}>Good</button>
        </li>
        <li>
          <button type='button' onClick={this.handleIncrementN}>Neutral</button>
        </li>
        <li>
          <button type='button' onClick={this.handleIncrementB}>Bad</button>
        </li>
      </ul>
      <div>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral} </li>
        <li>Bad: {bad}</li>
      </ul>
      </div>
    </section>
    );
  }

};
