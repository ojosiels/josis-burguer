import styled from "styled-components";

const StyledProductCard = styled.li`
  border: 2px solid var(--grey-20);
  border-radius: 5px;
  min-width: 300px;
  height: fit-content;

  img {
    display: block;
    background-color: var(--grey-0);
    width: 100%;
    object-fit: contain;
    height: 20vh;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  button {
    width: fit-content;
  }
`;

export default StyledProductCard;
