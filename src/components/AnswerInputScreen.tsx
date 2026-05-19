import { GameAction, GameState } from "@/app/types/game";
import { useState } from "react";

type Props = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export function AnswerInputScreen({ state, dispatch }: Props) {
  const [answer, setAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const answerPlayer = state.players[state.answerPlayerIndex];

  const handleSubmitAnswer = () => {
    const trimedAnswer = answer.trim();

    if (trimedAnswer.length === 0) {
      setErrorMessage("回答を入力してください");
      return;
    }

    dispatch({
      type: "SET_ANSWER",
      payload: trimedAnswer,
    });
  };

  return (
    <section>
      <h2>{answerPlayer.name}さんの回答です</h2>

      <p>ヒント：{state.hint}</p>

      <input
        type="text"
        value={answer}
        onChange={(event) => {
          setAnswer(event.target.value);
          setErrorMessage("");
        }}
      />
      {errorMessage && <p>{errorMessage}</p>}

      <button onClick={handleSubmitAnswer}>回答する！</button>
    </section>
  );
}
