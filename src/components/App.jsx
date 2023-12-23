import { useState } from 'react';
import Section from './Feedback/Section';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';
import FeedbackOptions from './Feedback/FeedbackOptions';
import './Feedback/feedback.css';

export default function App() {
  const [good, setGood] = useState(null);
  const [neutral, setNeutral] = useState(null);
  const [bad, setBad] = useState(null);
  const feedback = { good, neutral, bad };
  console.log(feedback);

  const nameBtn = Object.keys(feedback);

  const leaveFeedback = event => {
    console.log('click');

    switch (event.target.id) {
      case 'good':
        return setGood(prevState => prevState + 1);

      case 'neutral':
        return setNeutral(prevState => prevState + 1);

      case 'bad':
        return setBad(prevState => prevState + 1);

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;

    const totalFeedback = countTotalFeedback;

    return totalFeedback === 0 ? 0 : (good / totalFeedback()) * 100;
  };

  const total = countTotalFeedback;

  return (
    <>
      <Section title={'Please leave feedback'} typeOfStyles={'mainSection'}>
        <FeedbackOptions options={nameBtn} onLeaveFeedback={leaveFeedback} />
      </Section>

      <Section typeOfStyles={'statisticsSection'} title={'Statistics'}>
        <>
          {total() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              countPercentage={countPositiveFeedbackPercentage}
            />
          )}
        </>
      </Section>
    </>
  );
}
