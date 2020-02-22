import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  padding: 8px;
  border: 2px solid #cdcdcd;
  border-color: rgba(0, 0, 0, 0.14);
  background-color: AliceBlue;
  font-size: 14px;
  margin-bottom: 8px;

  & hover {
    background-color: #ffdafb;
    cursor: pointer;
  }
`;

export const StyledTitle = styled.div`
  font-weight: 500;
`;

export const StyledFavor = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
`;

export const StyledFontSize = styled.div`
  font-size: ${(props) => props.fontSize};
`;
