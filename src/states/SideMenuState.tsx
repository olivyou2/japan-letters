import { atom, useRecoilState } from "recoil";

const sideMenuAtom = atom({
  default: false,
  key: "sideMenu",
});

export const useSideMenu = () => {
  const [sideMenu, setSideMenu] = useRecoilState(sideMenuAtom);

  const openSideMenu = () => {
    setSideMenu(true);
  };

  const closeSideMenu = () => {
    setSideMenu(false);
  };

  return {
    sideMenu,
    openSideMenu,
    closeSideMenu,
  };
};
