import { styled } from "styled-components";
import Header from "./components/Header";
import LetterTypeSelector from "./components/LetterTypeSelector";
import SideMenu from "./components/SideMenu";
import Letter from "./components/Letter";
import AnswerSelector from "./components/AnswerSelector";
import { useCorrectState } from "./states/CorretState";
import { useEffect } from "react";
import ReactGA from "react-ga4";

const Content = styled.div`
  margin-top: 80px;

  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
`;

const HorizonPadding = styled.div<{ $height: number }>`
  height: ${(props) => props.$height}px;
`;

function App() {
  const { nextProblem } = useCorrectState();

  useEffect(() => {
    nextProblem(undefined, undefined);

    ReactGA.initialize("G-850MRBM53D");
  }, []);

  return (
    <>
      <Header />
      <SideMenu />

      <Content>
        <LetterTypeSelector />
        <HorizonPadding $height={100} />
        <Letter />
        <HorizonPadding $height={100} />
        <AnswerSelector />
        <HorizonPadding $height={50} />
      </Content>
    </>
  );
}

export default App;
