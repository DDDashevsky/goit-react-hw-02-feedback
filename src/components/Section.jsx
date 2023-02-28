import PropTypes from 'prop-types';
import { SectionContainer } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
