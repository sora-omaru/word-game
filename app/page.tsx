"use client";

import { useReducer } from "react";
import { gameReducer, initialGameState } from "./reducers/gameReducer";

export default function Home() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <main>
      {state.screen === "TITLE" && (
        <div>
          <h1>ワードゲーム</h1>
          <button onClick={() => dispatch({ type: "GO_PLAYER_SETUP" })}>
            スタート
          </button>
        </div>
      )}

      {state.screen === "PLAYER_SETUP" && (
        <div>
          <h2>プレイヤー設定</h2>
          <button onClick={() => dispatch({ type: "GO_TOPIC" })}>次へ</button>
        </div>
      )}
    </main>
  );
}
