import PropTypes from 'prop-types';
import { Notification } from '../Notification/Notification';
import { StatList, StatItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total > 0 && (
        <StatList>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
          <StatItem>Total: {total}</StatItem>
          <StatItem>Positive Feedback: {positivePercentage}%</StatItem>
        </StatList>
      )}
      {total === 0 && <Notification message="There is no feedback" />}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
