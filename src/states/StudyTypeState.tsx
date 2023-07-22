import { atom, useRecoilState } from "recoil";

export enum StudyType {
  Hiragana,
  Gatagana,
}

const studyTypeAtom = atom<StudyType>({
  default: StudyType.Hiragana,
  key: "studyType",
});

export const getStudyName = (studyType: StudyType) => {
  const name =
    studyType == StudyType.Hiragana
      ? "히라가나"
      : studyType == StudyType.Gatagana
      ? "가타가나"
      : "Unknown";

  return name;
};

export const useStudyType = () => {
  const [studyType, setStudyType] = useRecoilState(studyTypeAtom);

  const name = getStudyName(studyType);

  return {
    studyType,
    setStudyType,
    name,
  };
};
