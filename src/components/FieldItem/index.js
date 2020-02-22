import React from 'react';
import styled from 'styled-components';

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

export default FieldItem;
