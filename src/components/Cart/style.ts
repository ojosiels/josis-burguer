import styled from "styled-components";

export const StyledCart = styled.section`
  background-color: var(--grey-0);
  min-width: 500px;
  max-width: 500px;
  height: 60vh;

  h2 {
    border-radius: 5px 5px 0 0;
    padding: 1rem;
    color: white;
    background-color: var(--color-primary);
  }

  ul {
    display: flex;
    flex-direction: column-reverse;
    gap: 1rem;
    height: 40vh;
    overflow-x: auto;

    padding: 1rem;
  }

  > section {
    border: 2px solid transparent;
    border-top-color: var(--grey-20);
    display: flex;
    flex-direction: column;
    padding: 1rem;
    min-height: fit-content;
  }

  > section div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
  }
  > section p:nth-child(2) {
    color: var(--grey-50);
  }

  @media (max-width: 1130px) {
    min-width: 100%;

    ul {
      flex-direction: column;
    }
  }
`;

export const StyledEmptyCart = styled.section`
  background-color: var(--grey-0);
  min-width: 500px;
  max-width: 500px;

  height: 30vh;
  h2 {
    border-radius: 5px 5px 0 0;
    padding: 1rem;
    color: white;
    background-color: var(--color-primary);
  }
  .heading3 {
    margin-top: 10%;

    text-align: center;
  }
  .bodyText {
    margin-top: 10px;
    text-align: center;
  }

  @media (max-width: 1130px) {
    min-width: 100%;
    max-width: 10vw;
  }
`;
