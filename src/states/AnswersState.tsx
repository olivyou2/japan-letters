import { atom, useRecoilState } from "recoil";

export class AnswerClass {
  first: string;
  second: string;
  third: string;
  fourth: string;

  constructor(first: string, second: string, third: string, fourth: string) {
    this.first = first;
    this.second = second;
    this.third = third;
    this.fourth = fourth;
  }

  clone() {
    return new AnswerClass(this.first, this.second, this.third, this.fourth);
  }
}

const answersAtom = atom<AnswerClass>({
  key: "answers",
  default: new AnswerClass("あ", "い", "う", "え"),
});

export const useAnswers = () => {
  const [answers, setAnswers] = useRecoilState(answersAtom);

  return {
    answers,
    setAnswers,
  };
};
