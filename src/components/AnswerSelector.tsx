import { styled } from "styled-components";
import { useAnswers } from "../states/AnswersState";
import AnswerSelectorBtn from "./AnswerSelectorBtn";
import { useCorrectState } from "../states/CorretState";
import { useSelect } from "../states/SelectState";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 170px 170px;
  grid-template-rows: 140px 140px;
  grid-gap: 10px;
`;

export default function AnswerSelector() {
  const { answers } = useAnswers();

  const { select, setSelect } = useSelect();

  const selected = select.selected;
  const selectedAnswer = select.selectedAnswer;

  const { correct: correctAnswer, nextProblem } = useCorrectState();

  const answerArray = [
    answers.first,
    answers.second,
    answers.third,
    answers.fourth,
  ];

  const onClickAnswer = (answer: string) => {
    if (selected) return;

    setSelect(true, answer);

    setTimeout(() => {
      nextProblem(undefined, undefined);
    }, 1000);
  };

  return (
    <Wrapper>
      {answerArray.map((answer, idx) => (
        <AnswerSelectorBtn
          key={idx}
          content={answer}
          state={
            selected && (answer == correctAnswer || answer == selectedAnswer)
              ? answer == correctAnswer
                ? "answer"
                : "wrong"
              : "default"
          }
          onClick={onClickAnswer}
        />
      ))}
    </Wrapper>
  );
}
