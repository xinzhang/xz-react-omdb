import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const PageSize = 10;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  padding-top: 16px;
`;

const StyledPager = styled(FontAwesomeIcon)`
  font-size: 24px;
`;

const StyledContent = styled.div`
  font-size: 14px;
  flex: 1;
`;

const Paging = React.memo(({ totalResults, currentPage, onClick }) => {
  const totalPage = Math.floor(totalResults / PageSize);

  return (
    <StyledWrapper>
      {currentPage > 1 && (
        <StyledPager
          data-testid="prev"
          icon={faCaretLeft}
          onClick={() => onClick(currentPage - 1)}
        />
      )}
      <StyledContent>
        Page {currentPage}
        <br />
        {totalResults} results
      </StyledContent>
      {currentPage < totalPage && (
        <StyledPager
          data-testid="next"
          icon={faCaretRight}
          onClick={() => onClick(currentPage + 1)}
        />
      )}
    </StyledWrapper>
  );
});

export default Paging;
