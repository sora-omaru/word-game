import { GameAction, GameState } from "@/app/types/game";

type Props = {
  dispatch: React.Dispatch<GameAction>;
  state: GameState;
};

export function TopicScreen({ state, dispatch }: Props) {
  const currentPlayer = state.players[state.currentPlayerIndex];

  return (
    <section>
      <h2>{currentPlayer.name}さんのお題</h2>

      <p>{state.topic}</p>

      <button onClick={() => dispatch({ type: "GO_HINT_INPUT" })}>
        確認した
      </button>
    </section>
  );
}
