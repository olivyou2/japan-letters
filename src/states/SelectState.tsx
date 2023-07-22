import { atom, useRecoilState } from "recoil";

export class SelectClass {
  selected: boolean;
  selectedAnswer: string;

  constructor(selected: boolean, selectedAnswer: string) {
    this.selected = selected;
    this.selectedAnswer = selectedAnswer;
  }

  clone() {
    return new SelectClass(this.selected, this.selectedAnswer);
  }
}

const selectAtom = atom<SelectClass>({
  key: "select",
  default: new SelectClass(false, ""),
});

export const useSelect = () => {
  const [select, setSelect] = useRecoilState(selectAtom);

  const setSelected = (selected: boolean) => {
    const newSelect = select.clone();
    newSelect.selected = selected;

    setSelect(newSelect);
  };

  const setSelectedAnswer = (selectedAnswer: string) => {
    const newSelect = select.clone();
    newSelect.selectedAnswer = selectedAnswer;

    setSelect(newSelect);
  };

  const setSelectInner = (selected: boolean, selectedAnswer: string) => {
    const newSelect = select.clone();
    newSelect.selected = selected;
    newSelect.selectedAnswer = selectedAnswer;

    setSelect(newSelect);
  };

  return {
    select,
    setSelect: setSelectInner,
    setSelected,
    setSelectedAnswer,
  };
};
