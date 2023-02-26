// import propTypes from 'prop-types';
import React from 'react';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  bad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className="buttonSet">
          <button className="button" type="button" onClick={this.good}>
            Good
          </button>
          <button className="button" type="button" onClick={this.neutral}>
            Neutral
          </button>
          <button className="button" type="button" onClick={this.bad}>
            Bad
          </button>
        </div>
        <div className="statsSet">
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </>
    );
  }
}
