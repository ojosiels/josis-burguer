import styled from "styled-components";

const StyledCartCard = styled.li`
  display: flex;

  img {
    background-color: var(--grey-20);
    width: 70px;
    height: 70px;
    object-fit: contain;
    display: flex;
    align-items: center;
    border-radius: 5px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    margin-left: auto;
    text-align: center;
    color: var(--grey-50);
  }

  div > p:nth-child(1) {
    cursor: pointer;
  }

  div > p:nth-child(1):hover {
    font-weight: 600;
  }
`;

export default StyledCartCard;
