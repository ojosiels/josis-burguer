import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--grey-0);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 115px;

  box-shadow: 0px -5px 10px var(--grey-50);
  transition: 0.3s linear;

  span {
    color: var(--color-secondary);
  }

  .divFormButton {
    display: flex;
    align-items: center;
    gap: 2rem;

    > button {
      display: flex;

      background-color: transparent;
      border-radius: 50%;
      width: fit-content;
      height: fit-content;
      padding: 5px;
      color: var(--grey-100);
      font-size: 2rem;
      transition: 0.5s;

      &:hover {
        color: var(--grey-50);
      }
    }
  }
  @media (max-width: 1130px) {
    padding: 0.8rem 0;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default StyledHeader;
