import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Caption2, SmallText } from "../styles/TextStyles"

export default function PurchaseButton({ title, subtitle }) {
  return (
    <Link to="/page-2">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/icons/credit.svg" />
          <Ring src="/images/icons/icon-ring.svg" />
        </IconWrapper>
        <TextWrapper>
          <Title>{title || "Get Pro Access"}</Title>
          <Subtitle>{subtitle || "$19 per month"}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  height: 77px;
  width: 280px;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(180deg, #fff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;

  *, & {
    transition: 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`

const Title = styled(Caption2)`
  color: black;
`

const Subtitle = styled(SmallText)`
  color: black;
  opacity: 0.7;
`
const Icon = styled.img`
  width: 29px;
  height: 29px;

  ${Wrapper}:hover & {
    transform: scale(1.1) translate(1px, 1px);
  }
`
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background: var(
    --gradient-9,
    linear-gradient(207deg, #4316db 0%, #9076e7 100%)
  );
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;

  ${Wrapper}:hover & {
    filter: hue-rotate(10deg) brightness(100%) saturate(120%);
  }
`
const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`
const Ring = styled.img`
 position: absolute;
 top: -15px;
 left: -16px;

 ${Wrapper}:hover & {
   transform: rotate(30deg) scale(1.1) translate(1px, 1px);
 }
`
