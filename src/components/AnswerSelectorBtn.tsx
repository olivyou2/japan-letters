import { useState } from "react";
import { styled } from "styled-components";

export type colorTypes = "default" | "clicked" | "wrong" | "answer";

const getWrapperColor = (colorType: colorTypes): string => {
  if (colorType == "default") {
    return "dedede";
  } else if (colorType == "clicked") {
    return "c0c0c0";
  } else if (colorType == "wrong") {
    return "ff4d4d";
  } else if (colorType == "answer") {
    return "00b300";
  }

  return "dedede";
};

const Wrapper = styled.div<{
  $color: colorTypes;
}>`
  background-color: #${(props) => getWrapperColor(props.$color)};
  transition: background-color 0.1s ease-in-out;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
`;

export default function AnswerSelectorBtn({
  content,
  state,
  onClick,
}: {
  content: string;
  state: colorTypes;
  onClick: (answer: string) => void;
}) {
  const [clicked, setClicked] = useState(false);

  let bgColor: colorTypes = "default";

  if (state == "default") {
    if (clicked) {
      bgColor = "clicked";
    }
  } else {
    bgColor = state;
  }

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const onClickInside = () => {
    onClick(content);
  };

  return (
    <Wrapper
      $color={bgColor}
      onMouseDown={() => onMouseDown()}
      onMouseUp={() => onMouseUp()}
      onMouseLeave={() => onMouseUp()}
      onTouchStart={() => onMouseDown()}
      onTouchEnd={() => onMouseUp()}
      onClick={() => onClickInside()}
    >
      {content}
    </Wrapper>
  );
}
