import propTypes from 'prop-types';
import { StatisticsList, StatisticsItem, StatisticsText, StatisticValue } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePersentage, }) {
    return (
        <StatisticsList>
        <StatisticsItem><StatisticsText>Good: <StatisticValue>{ good }</StatisticValue></StatisticsText></StatisticsItem>
        <StatisticsItem><StatisticsText>Neutral: <StatisticValue>{ neutral }</StatisticValue></StatisticsText></StatisticsItem>
        <StatisticsItem><StatisticsText>Bad: <StatisticValue>{ bad }</StatisticValue></StatisticsText></StatisticsItem>
        <StatisticsItem><StatisticsText>Total: <StatisticValue>{ total }</StatisticValue></StatisticsText></StatisticsItem>
        {/* <StatisticsItem><p>Positive Feedback: <StatisticValue>{ positivePersentage }</StatisticValue></p></StatisticsItem> */}
      </StatisticsList>
    )
}

Statistics.prototype = {
good: propTypes.number.isRequired,
neutral: propTypes.number.isRequired,
bad: propTypes.number.isRequired,
}
export default Statistics;