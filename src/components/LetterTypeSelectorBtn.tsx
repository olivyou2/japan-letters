import { styled } from "styled-components";
import {
  LetterType,
  getLetterTypeName,
  useLetterType,
} from "../states/LetterTypeState";
import { useCorrectState } from "../states/CorretState";

const Wrapper = styled.div<{ $activated: boolean }>`
  width: 40px;
  height: 36px;

  background-color: #${(props) => (props.$activated ? "2f2f2f" : "4f4f4f")};
  transition: background-color 100ms ease-in-out;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 4px;
  margin-right: 4px;
`;

export default function LetterTypeSelectorBtn({
  letterType,
}: {
  letterType: LetterType;
}) {
  const { letterType: letterTypeState, setLetterType } = useLetterType();
  const activated = letterTypeState === letterType;
  const { nextProblem } = useCorrectState();

  const onClick = () => {
    setLetterType(letterType);
    nextProblem(letterType);
  };

  return (
    <Wrapper $activated={activated} onClick={() => onClick()}>
      {getLetterTypeName(letterType)}
    </Wrapper>
  );
}
