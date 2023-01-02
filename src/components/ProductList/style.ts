import styled from "styled-components";

const StyledProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  height: fit-content;

  @media (max-width: 1130px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    margin-bottom: 1rem;
  }
`;

export default StyledProductList;
