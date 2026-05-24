"use client";

import { useReducer } from "react";
import { gameReducer, initialGameState } from "./reducers/gameReducer";
import { PlayerSetup } from "@/components/PlayerSetup";
import { TopicScreen } from "@/components/TopicScreen";
import { HintInputScreen } from "@/components/HintInputScreem";
import { AnswerInputScreen } from "@/components/AnswerInputScreen";
import { ResultScreen } from "@/components/ResultScreen";
import { FinalResultScreen } from "@/components/FinalResultScreen";

export default function Home() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return (
    <main className="game-shell">
      {/* メインの画面 */}
      {state.screen === "TITLE" && (
        <section className="game-panel title-screen">
          <p className="eyebrow">5文字ヒントで当てろ</p>
          <h1 className="game-title">ワードゲーム</h1>
          <p className="lead-text">
            出題者のヒントを頼りに、回答者が言葉を推理する対戦ゲームです。
          </p>
          <button
            className="game-button primary-button"
            onClick={() => dispatch({ type: "GO_PLAYER_SETUP" })}
          >
            スタート
          </button>
        </section>
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
      {/* 結果画面 */}
      {state.screen === "RESULT" && (
        <ResultScreen state={state} dispatch={dispatch} />
      )}
      {/* 結果画面 */}
      {state.screen === "FINAL_RESULT" && (
        <FinalResultScreen state={state} dispatch={dispatch} />
      )}

    </main>
  );
}
