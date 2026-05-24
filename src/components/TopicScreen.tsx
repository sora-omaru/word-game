import { GameAction, GameState } from "@/app/types/game";

type Props = {
  dispatch: React.Dispatch<GameAction>;
  state: GameState;
};

export function TopicScreen({ state, dispatch }: Props) {
  const currentPlayer = state.players[state.currentPlayerIndex];

  return (
    <section className="game-panel topic-screen">
      <p className="eyebrow">Question Master</p>
      <h2>{currentPlayer.name}さんのお題</h2>

      <div className="topic-card">
        <span>お題</span>
        <p>{state.topic}</p>
      </div>

      <button
        className="game-button primary-button"
        onClick={() => dispatch({ type: "GO_HINT_INPUT" })}
      >
        確認した
      </button>
    </section>
  );
}
