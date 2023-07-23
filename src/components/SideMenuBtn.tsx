import { useState } from "react";
import { styled } from "styled-components";
import {
  StudyType,
  getStudyName,
  useStudyType,
} from "../states/StudyTypeState";
import { useSideMenu } from "../states/SideMenuState";
import { useCorrectState } from "../states/CorretState";
import { LetterType, useLetterType } from "../states/LetterTypeState";

const BtnWrapper = styled.div<{ $activated: boolean }>`
  width: 100%;
  height: 100px;

  background-color: #${(props) => (props.$activated ? "efefef" : "fff")};
  transition: background-color 100ms ease-in-out;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
  font-weight: 700;
`;

export default function SideMenuBtn({ type }: { type: StudyType }) {
  const { setLetterType } = useLetterType();

  const { closeSideMenu } = useSideMenu();
  const { setStudyType } = useStudyType();
  const { nextProblem } = useCorrectState();

  const [activated, setActivated] = useState(false);

  const onHoverIn = () => {
    setActivated(true);
  };

  const onHoverOut = () => {
    setActivated(false);
  };

  const onClicked = () => {
    setStudyType(type);
    if (type === StudyType.Gatagana) {
      setLetterType(LetterType.가타카나_아행);
    } else if (type === StudyType.Hiragana) {
      setLetterType(LetterType.아행);
    }
    closeSideMenu();

    nextProblem(undefined, type);
  };

  return (
    <>
      <BtnWrapper
        $activated={activated}
        onMouseEnter={() => onHoverIn()}
        onMouseLeave={() => onHoverOut()}
        onTouchStart={() => onHoverIn()}
        onTouchEnd={() => onHoverOut()}
        onClick={() => onClicked()}
      >
        {getStudyName(type)}
      </BtnWrapper>
    </>
  );
}
