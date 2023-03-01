import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedvackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <FeedbackButton
          type="button"
          name={option}
          key={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeedbackButton>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
