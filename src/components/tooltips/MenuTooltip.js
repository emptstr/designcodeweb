import React from "react"
import styled from "styled-components"
import { tooltipData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"

export default function MenuTooltip({ isOpen }) {

  return (
    <Wrapper isOpen={isOpen}>
      {tooltipData.map((item, index) => (
        <MenuButton
          title={item.title}
          link={item.link}
          icon={item.icon}
          key={index}
        />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px 0px rgba(0, 0, 0, 0.25),
    0px 0px 0px 0.5px rgba(255, 255, 255, 0.2) inset;
  backdrop-filter: blur(20px);
  padding: 20px;
  position: absolute;
  top: 60px;
  right: 30px;
  opacity: ${props => (props.isOpen ? "1" : "0.5")};
  z-index: 1;
  display: grid;
  gap: 10px;
  grid-template-columns: 150px;
  transition: 0.2s ease-in-out;
  visibility: ${props => props.isOpen ? "visible" : "hidden"};
  transform: ${props => props.isOpen? "skewY(0) rotate(0) translateY(0)" : "skewY(-5deg) rotate(5deg) translateY(-30px)"};
`
