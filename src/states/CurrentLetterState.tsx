import { atom, useRecoilState } from "recoil";

const currentLetterAtom = atom<string>({
  key: "currentLetter",
  default: "あ",
});

export const useCurrentLetter = () => {
  const [currentLetter, setCurrentLetter] = useRecoilState(currentLetterAtom);

  return {
    currentLetter,
    setCurrentLetter,
  };
};
