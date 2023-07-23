import { useState } from "react";
import { styled } from "styled-components";

const BtnWrapper = styled.div<{ $activated: boolean }>`
  width: 100%;
  height: 100px;

  background-color: #${(props) => (props.$activated ? "efefef" : "fff")};
  transition: background-color 100ms ease-in-out;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
`;

export default function SideMenuLabel({ text }: { text: string }) {
    const [activated, setActivated] = useState(false);

    const onHoverIn = () => {
        setActivated(true);
    };

    const onHoverOut = () => {
        setActivated(false);
    };

    return (
        <>
            <BtnWrapper
                $activated={activated}
                onMouseEnter={() => onHoverIn()}
                onMouseLeave={() => onHoverOut()}
                onTouchStart={() => onHoverIn()}
                onTouchEnd={() => onHoverOut()}
            >
                {text}
            </BtnWrapper>
        </>
    );
}
