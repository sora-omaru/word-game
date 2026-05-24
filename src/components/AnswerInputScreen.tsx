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
    const trimmedAnswer = answer.trim();

    if (trimmedAnswer.length === 0) {
      setErrorMessage("回答を入力してください");
      return;
    }

    dispatch({
      type: "SET_ANSWER",
      payload: trimmedAnswer,
    });
  };

  return (
    <section className="game-panel input-screen">
      <p className="eyebrow">Answer Phase</p>
      <h2>{answerPlayer.name}さんの回答です</h2>

      <div className="hint-chip">
        <span>ヒント</span>
        <strong>{state.hint}</strong>
      </div>

      <label className="form-control">
        <span>回答</span>
        <input
          type="text"
          value={answer}
          onChange={(event) => {
            setAnswer(event.target.value);
            setErrorMessage("");
          }}
        />
      </label>
      {errorMessage && <p className="error-text">{errorMessage}</p>}

      <button className="game-button primary-button" onClick={handleSubmitAnswer}>
        回答する！
      </button>
    </section>
  );
}
