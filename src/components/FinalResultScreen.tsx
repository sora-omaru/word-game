import { GameAction, GameState } from "@/app/types/game";

type Props = {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
};

export function FinalResultScreen({ state, dispatch }: Props) {
  const sortedPlayers = [...state.players].sort(
    (previousPlayer, nextPlayer) => nextPlayer.score - previousPlayer.score,
  );

  return (
    <section className="game-panel final-screen">
      <p className="eyebrow">Ranking</p>
      <h2>最終結果</h2>
      <ol className="leaderboard">
        {sortedPlayers.map((player, index) => (
          <li key={index}>
            <span className="rank-number">{index + 1}</span>
            <span>{player.name}さん</span>
            <strong>{player.score}点</strong>
          </li>
        ))}
      </ol>
      <button
        className="game-button primary-button"
        onClick={() => dispatch({ type: "GO_TITLE" })}
      >
        タイトルへ戻る
      </button>
    </section>
  );
}
