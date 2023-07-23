import { atom, useRecoilState } from "recoil";
import {
  LetterType,
  getLetterTypeName,
  useLetterType,
} from "./LetterTypeState";
import { hiraganaSet, katakanaSet } from "../assets/dataset";
import { AnswerClass, useAnswers } from "./AnswersState";
import { useCurrentLetter } from "./CurrentLetterState";
import { useSelect } from "./SelectState";
import { StudyType, useStudyType } from "./StudyTypeState";

const correctAtom = atom<string>({
  key: "correct",
  default: "",
});

export const useCorrectState = () => {
  const [correct, setCorrect] = useRecoilState(correctAtom);

  const { setCurrentLetter } = useCurrentLetter();
  const { setAnswers } = useAnswers();
  const { setSelect } = useSelect();

  const { letterType } = useLetterType();
  const { studyType: innerStudyType } = useStudyType();

  const nextProblem = (customLetterType: LetterType | undefined, customStudyType: StudyType | undefined) => {
    const letterName = getLetterTypeName(
      customLetterType === undefined ? letterType : customLetterType
    );

    const studyType = customStudyType === undefined ? innerStudyType : customStudyType;

    if (letterName === undefined) return;

    let wordSet: string[][] = [];

    if (studyType === StudyType.Hiragana) {
      wordSet = hiraganaSet[letterName];
    } else if (studyType === StudyType.Gatagana) {
      wordSet = katakanaSet[letterName];
    }

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
