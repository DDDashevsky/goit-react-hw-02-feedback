import React from 'react';

// import Feedback from './Feedback';
import Stats from './Stats';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class App extends React.Component {
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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={'Good'} onLeaveFeedback={this.good} />
          <FeedbackOptions options={'Neutral'} onLeaveFeedback={this.neutral} />
          <FeedbackOptions options={'Bad'} onLeaveFeedback={this.bad} />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Stats
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
