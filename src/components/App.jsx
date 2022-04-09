import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions '
import Statistics from './Statistics/Statistics';

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

  countTotalFeedback  ()  {
// const { good, neutral, bad } = this.state;
return this.state.good + this.state.neutral + this.state.bad;
  }

  render(){
    const { good, neutral, bad  } = this.state;
    const handleIncrement = this.handleIncrement;
    const countTotalFeedback = this.countTotalFeedback;
    const options = Object.keys(this.state);
    // console.log(options);
  return (
    <div>
    <Section title='Please, leave your feedback'>
      <FeedbackOptions 
      options = { options }
      onLeaveFeedback = { handleIncrement }
      />
      </Section>

      <Section title='Statistics'>
      <Statistics
        good = { good }
        neutral = { neutral }
        bad = { bad }
        total = { countTotalFeedback }
        // positivePersentage = { positivePersentage }
      />
    </Section>
    </div>
    );
  }
};
