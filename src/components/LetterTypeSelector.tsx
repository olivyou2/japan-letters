import { styled } from "styled-components";
import { LetterType } from "../states/LetterTypeState";
import LetterTypeSelectorBtn from "./LetterTypeSelectorBtn";
import { StudyType, useStudyType } from "../states/StudyTypeState";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function LetterTypeSelector() {
  const { studyType } = useStudyType();

  let letterTypes: LetterType[] = [];

  if (studyType === StudyType.Hiragana) {
    letterTypes = [
      LetterType.아행,
      LetterType.카행,
      LetterType.사행,
      LetterType.타행,
      LetterType.나행,
      LetterType.하행,
      LetterType.마행,
    ];
  } else if (studyType === StudyType.Gatagana) {
    letterTypes = [
      LetterType.가타카나_아행,
      LetterType.가타카나_카행,
      LetterType.가타카나_사행,
      LetterType.가타카나_타행,
      LetterType.가타카나_나행,
      LetterType.가타카나_하행,
      LetterType.가타카나_마행,
    ];
  }

  return (
    <Wrapper>
      {letterTypes.map((letterType) => {
        return (
          <LetterTypeSelectorBtn letterType={letterType} key={letterType} />
        );
      })}
    </Wrapper>
  );
}
