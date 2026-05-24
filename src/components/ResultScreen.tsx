import { GameAction, GameState } from "@/app/types/game";
import topics from "@/data/topics.json";

type Props = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export function ResultScreen({ state, dispatch }: Props) {
  const currentPlayer = state.players[state.currentPlayerIndex];

  const answerPlayer = state.players[state.answerPlayerIndex];

  const createNextTopicPayload = () => {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    return {
      topic: randomTopic,
    };
  };

  return (
    <section className="game-panel result-screen">
      <p className="eyebrow">Judge</p>
      <h2>結果画面</h2>

      <dl className="result-grid">
        <div>
          <dt>出題者</dt>
          <dd>{currentPlayer.name}</dd>
        </div>
        <div>
          <dt>回答者</dt>
          <dd>{answerPlayer.name}</dd>
        </div>
        <div>
          <dt>お題</dt>
          <dd>{state.topic}</dd>
        </div>
        <div>
          <dt>ヒント</dt>
          <dd>{state.hint}</dd>
        </div>
        <div className="wide-result">
          <dt>回答</dt>
          <dd>{state.answer}</dd>
        </div>
      </dl>

      <div className="button-row">
        <button
          className="game-button correct-button"
          onClick={() =>
            dispatch({
              type: "ANSWER_CORRECT",
              payload: createNextTopicPayload(),
            })
          }
        >
          正解
        </button>

        <button
          className="game-button incorrect-button"
          onClick={() =>
            dispatch({
              type: "ANSWER_INCORRECT",
              payload: createNextTopicPayload(),
            })
          }
        >
          不正解
        </button>
      </div>

      <button
        className="game-button secondary-button"
        onClick={() => dispatch({ type: "FINISH_GAME" })}
      >
        ゲーム終了
      </button>
    </section>
  );
}
