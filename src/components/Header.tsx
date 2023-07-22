import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useSideMenu } from "../states/SideMenuState";
import { useStudyType } from "../states/StudyTypeState";

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0px;

  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  background-color: #eeeeee;
`;

const MenuWrapper = styled.div`
  margin-left: 20px;

  display: flex;
  flex-direction: row;
`;

const NameWrapper = styled.div`
  margin-left: 10px;
  font-size: 1.1rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default function Header() {
  const { openSideMenu } = useSideMenu();
  const { name } = useStudyType();

  const onClickMenu = () => {
    openSideMenu();
  };

  return (
    <>
      <Wrapper>
        <MenuWrapper>
          <FontAwesomeIcon
            icon={faBars}
            size={"xl"}
            onClick={() => onClickMenu()}
          />
          <NameWrapper>{name}</NameWrapper>
        </MenuWrapper>
      </Wrapper>
    </>
  );
}
