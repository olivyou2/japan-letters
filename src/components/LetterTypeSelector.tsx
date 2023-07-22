import { styled } from "styled-components";
import { LetterType } from "../states/LetterTypeState";
import { useState } from "react";
import LetterTypeSelectorBtn from "./LetterTypeSelectorBtn";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function LetterTypeSelector() {
  const [letterTypes] = useState([
    LetterType.아행,
    LetterType.카행,
    LetterType.사행,
    LetterType.타행,
    LetterType.나행,
    LetterType.하행,
    LetterType.마행,
  ]);

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
