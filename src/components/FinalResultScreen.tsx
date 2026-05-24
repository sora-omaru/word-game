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
    <section>
      <h2>最終結果</h2>
      <ol>
        {sortedPlayers.map((player,index)=>(
          <li key={index}>
            {index+1}:{player.name}さん／{player.score}点
          </li>
        ))}
      </ol>
      <button onClick={() => dispatch({ type: "GO_TITLE" })}>
        タイトルへ戻る
      </button>
    </section>
  );
}
