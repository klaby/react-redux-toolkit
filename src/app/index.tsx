import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button, Result } from "./styles";
import { decrement, incrementAsync } from "../store/count.store";

export const App: React.FC = () => {
  const { count } = useSelector((state: ReduxState) => state.counter);

  const dispatch = useDispatch<ReduxDispatch>();

  return (
    <Wrapper>
      <Result>{count}</Result>
      <Button.Group>
        <Button background="blue" onClick={() => dispatch(incrementAsync())}>
          Increment
        </Button>
        <Button background="green" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </Button.Group>
    </Wrapper>
  );
};
