import { styled } from "styled-components";
import { useSideMenu } from "../states/SideMenuState";
import SideMenuBtn from "./SideMenuBtn";
import { StudyType } from "../states/StudyTypeState";
import SideMenuLabel from "./SideMenuLabel";

const SideMenuWrapper = styled.div<{ $open: boolean }>`
  position: fixed;
  width: 80vw;
  min-height: 100vh;

  top: 0px;
  left: ${(props) => (props.$open ? 0 : -80)}vw;
  background-color: white;

  transition: left 500ms ease-in-out;
`;

const BackgroundWrapper = styled.div<{ $open: boolean }>`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100vw;
  height: 100vh;
  background-color: #181818;
  opacity: ${(props) => (props.$open ? 0.5 : 0)};
  transition: opacity 300ms ease-in-out;
  pointer-events: ${(props) => (props.$open ? "fill" : "none")};
`;

export default function SideMenu() {
  const { sideMenu, closeSideMenu } = useSideMenu();

  const onClickBackground = () => {
    closeSideMenu();
  };

  return (
    <>
      <BackgroundWrapper $open={sideMenu} onClick={() => onClickBackground()} />
      <SideMenuWrapper $open={sideMenu}>
        <SideMenuBtn type={StudyType.Hiragana} />
        <SideMenuBtn type={StudyType.Gatagana} />
        <SideMenuLabel text={"개발 박원호"} />
      </SideMenuWrapper>
    </>
  );
}
