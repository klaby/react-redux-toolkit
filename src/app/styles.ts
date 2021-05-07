import styled from "styled-components";

import { IButtonProps } from "./types";

export const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  grid-template-rows: 100px 30px 60px 60px;
  margin-top: 50px;
  font-weight: bolder;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Button = Object.assign(
  styled.div<IButtonProps>`
    background: ${({ theme, background }) => theme.colors[background]};
    width: 150px;
    height: 40px;
    margin: 0 10px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
  `,
  {
    Group: styled.div`
      display: flex;
    `,
  }
);

export const Input = styled.input`
  width: 100px;
  height: 30px;
  font-size: 1.1rem;
  padding: 0 7px;
`;

export const CheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
  ...props,
}))`
  margin: 0 7px;
`;

export const Result = styled.span`
  color: #ffffff;
  font-size: 3rem;
`;
