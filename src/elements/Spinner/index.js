import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const StyledFa = styled(FontAwesomeIcon)`
  padding-top: 16px;
  padding-left: 16px;
  font-size: 20px;
`;

const Spinner = () => <StyledFa icon={faSpinner} />;

export default Spinner;
