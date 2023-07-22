import { atom, useRecoilState } from "recoil";
import {
  LetterType,
  getLetterTypeName,
  useLetterType,
} from "./LetterTypeState";
import { hiraganaSet } from "../assets/dataset";
import { AnswerClass, useAnswers } from "./AnswersState";
import { useCurrentLetter } from "./CurrentLetterState";
import { useSelect } from "./SelectState";

const correctAtom = atom<string>({
  key: "correct",
  default: "",
});

export const useCorrectState = () => {
  const [correct, setCorrect] = useRecoilState(correctAtom);
  const { setSelect } = useSelect();

  const { setCurrentLetter } = useCurrentLetter();
  const { setAnswers } = useAnswers();
  const { letterType } = useLetterType();

  const nextProblem = (customLetterType: LetterType | undefined) => {
    const letterName = getLetterTypeName(
      customLetterType === undefined ? letterType : customLetterType
    );

    if (letterName === undefined) return;

    const wordSet = hiraganaSet[letterName];

    const problem = wordSet[Math.floor(Math.random() * wordSet.length)];
    const correctAnswer = problem[1];

    const incorrectAnswer = wordSet
      .map((word) => word[1])
      .filter((word) => word !== correctAnswer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const answers = [correctAnswer, ...incorrectAnswer].sort(
      () => Math.random() - 0.5
    );

    setAnswers(new AnswerClass(answers[0], answers[1], answers[2], answers[3]));
    setCorrect(correctAnswer);
    setCurrentLetter(problem[0]);
    setSelect(false, "");
  };

  return {
    correct,
    setCorrect,
    nextProblem,
  };
};
