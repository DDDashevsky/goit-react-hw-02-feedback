import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedvackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <FeedbackButton type="button" onClick={onLeaveFeedback}>
        {options}
      </FeedbackButton>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
