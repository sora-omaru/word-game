"use client";

import { useReducer } from "react";
import { gameReducer, initialGameState } from "./reducers/gameReducer";
import { PlayerSetup } from "@/components/PlayerSetup";
import { TopicScreen } from "@/components/TopicScreen";
import { HintInputScreen } from "@/components/HintInputScreem";
import { AnswerInputScreen } from "@/components/AnswerInputScreen";

export default function Home() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <main>
      {/* メインの画面 */}
      {state.screen === "TITLE" && (
        <div>
          <h1>ワードゲーム</h1>
          <button onClick={() => dispatch({ type: "GO_PLAYER_SETUP" })}>
            スタート
          </button>
        </div>
      )}
      {/* プレイヤー情報 */}
      {state.screen === "PLAYER_SETUP" && <PlayerSetup dispatch={dispatch} />}
      {/* お題画面 */}
      {state.screen === "TOPIC" && (
        <TopicScreen state={state} dispatch={dispatch} />
      )}
      {/* ヒント画面 */}
      {state.screen === "HINT_INPUT" && (
        <HintInputScreen state={state} dispatch={dispatch} />
      )}
      {/* 回答画面 */}
      {state.screen === "ANSWER_INPUT" && (
        <AnswerInputScreen state={state} dispatch={dispatch} />
      )}
    </main>
  );
}
