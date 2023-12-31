import { atom, useRecoilState } from "recoil";

export enum LetterType {
  "아행",
  "카행",
  "사행",
  "타행",
  "나행",
  "하행",
  "마행",
  "히라가나 기타",

  "가타카나_아행",
  "가타카나_카행",
  "가타카나_사행",
  "가타카나_타행",
  "가타카나_나행",
  "가타카나_하행",
  "가타카나_마행",
}

export const getLetterTypeName = (
  letterType: LetterType
): string | undefined => {
  if (letterType == LetterType.아행 || letterType == LetterType.가타카나_아행) {
    return "아";
  } else if (letterType == LetterType.카행 || letterType == LetterType.가타카나_카행) {
    return "카";
  } else if (letterType == LetterType.나행 || letterType == LetterType.가타카나_나행) {
    return "나";
  } else if (letterType == LetterType.하행 || letterType == LetterType.가타카나_하행) {
    return "하";
  } else if (letterType == LetterType.마행 || letterType == LetterType.가타카나_마행) {
    return "마";
  } else if (letterType == LetterType.사행 || letterType == LetterType.가타카나_사행) {
    return "사";
  } else if (letterType == LetterType.타행 || letterType == LetterType.가타카나_타행) {
    return "타";
  }
};

const letterTypeAtom = atom<LetterType>({
  default: LetterType.아행,
  key: "letterType",
});

export const useLetterType = () => {
  const [letterType, setLetterType] = useRecoilState(letterTypeAtom);

  return {
    letterType,
    setLetterType,
  };
};
