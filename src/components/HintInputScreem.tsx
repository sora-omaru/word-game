"use client";

import { GameAction, GameState } from "@/app/types/game";
import { useState } from "react";

type Props = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export function HintInputScreen({ state, dispatch }: Props) {
  const [hint, setHint] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmitHint = () => {
    const trimedHint = hint.trim();

    if (trimedHint.length === 0) {
      setErrorMessage("ヒントを入力してください");
      return;
    }

  

    dispatch({
      type: "SET_HINT",
      payload: trimedHint,
    });
  };

  return (
    <section>
      <h2>
        {state.players[state.currentPlayerIndex].name}
        さん
      </h2>

      <p>5文字ヒントを入力してください</p>

      <input
        type="text"
        value={hint}
        onChange={(event) => {
          setHint(event.target.value);
        }}
        maxLength={5}
      />
      {errorMessage && <p>{errorMessage}</p>}
      <button onClick={handleSubmitHint}>決定</button>
    </section>
  );
}
