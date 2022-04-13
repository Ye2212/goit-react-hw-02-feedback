import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions '
import Statistics from './Statistics/Statistics';
import NotificationMessage from './NotificationMessage/NotificationMessage';


export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = e => {
    const option = e.target.textContent;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {

    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    // console.log(options);

    return (
      <div>
        <Section title='Please, leave your feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        <Section title='Statistics'>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePersentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (<NotificationMessage message="There is no feedback" />)}

        </Section>
      </div>
    );
  }
};
