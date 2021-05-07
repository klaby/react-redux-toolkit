import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button, Result, Input, CheckBox, Option } from "./styles";
import {
  decrement,
  increment,
  decrementAsync,
  incrementAsync,
} from "../store/counter.store";

export const App: React.FC = () => {
  const { count } = useSelector((state: ReduxState) => state.counter);

  const [quantity, setQuantity] = useState(1);
  const [modeAsync, setModeAsync] = useState(false);

  const dispatch = useDispatch<ReduxDispatch>();

  return (
    <Wrapper>
      <Result>{count}</Result>
      <Input
        type="number"
        value={quantity}
        onChange={({ target }) => setQuantity(+target.value)}
      />
      <Option>
        <CheckBox onClick={() => setModeAsync(!modeAsync)} /> Async
      </Option>

      <Button.Group>
        <Button
          background="blue"
          onClick={() =>
            modeAsync
              ? dispatch(incrementAsync(quantity))
              : dispatch(increment(quantity))
          }
        >
          Increment
        </Button>
        <Button
          background="green"
          onClick={() =>
            modeAsync
              ? dispatch(decrementAsync(quantity))
              : dispatch(decrement(quantity))
          }
        >
          Decrement
        </Button>
      </Button.Group>
    </Wrapper>
  );
};
