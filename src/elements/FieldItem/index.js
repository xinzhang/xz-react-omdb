import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledItem = styled.div`
  fontsize: '14px';
  padding: 4px 0px;
`;

const FieldItem = ({ field, text }) => {
  return text ? (
    <StyledItem>
      <b>{field}</b>: {text}
    </StyledItem>
  ) : null;
};

FieldItem.prototype = {
  field: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default FieldItem;
