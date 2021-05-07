import styled from "styled-components";

import { IButtonProps } from "./types";

export const Wrapper = styled.div`
  height: 150px;
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  margin-top: 80px;
  font-weight: bolder;
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

export const Result = styled.span`
  color: #ffffff;
  font-size: 3rem;
  margin: 50px;
`;
