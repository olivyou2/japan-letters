import { styled } from "styled-components";
import { useCurrentLetter } from "../states/CurrentLetterState";

const Wrapper = styled.div`
  width: 100px;
  height: 100px;

  font-size: 10rem;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Letter() {
  const { currentLetter } = useCurrentLetter();

  return <Wrapper>{currentLetter}</Wrapper>;
}
