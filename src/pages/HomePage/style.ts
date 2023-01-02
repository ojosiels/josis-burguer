import styled from "styled-components";

export const StyledHomePageMain = styled.main`
  display: flex;
  justify-content: space-between;

  margin: 30px 115px;

  @media (max-width: 1130px) {
    flex-direction: column;
    margin: 30px 10px;
  }
`;
