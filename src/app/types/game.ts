export type Screen =
  | "TITLE"
  | "PLAYER_SETUP"
  | "TOPIC"
  | "HINT_INPUT"
  | "ANSWER_INPUT"
  | "RESULT"
  | "FINAL_RESULT";

export type Player = {
  id: number;
  name: string;
  score: number;
};

export type GameState = {
  screen: Screen;
  players: Player[];

  currentPlayerIndex: number; //今出題している人。
  answerPlayerIndex: number; //今回回答する人

  topic: string; //お題
  hint: string; //5文字ヒント
  answer: string; //回答
};
//ゲームの流れ
export type GameAction =
  | { type: "GO_PLAYER_SETUP" }
  | { type: "GO_TOPIC" }
  | { type: "GO_HINT_INPUT" }
  | { type: "GO_ANSWER_INPUT" }
  | { type: "GO_RESULT" }
  | { type: "GO_TITLE" }
  | {
      type: "START_GAME";
      payload: {
        players: Player[];
        topic: string;
      };
    }
  | { type: "SET_TOPIC"; payload: string }
  | { type: "SET_HINT"; payload: string }
  | { type: "SET_ANSWER"; payload: string }
  | { type: "ANSWER_CORRECT" }
  | { type: "ANSWER_INCORRECT" }
  | {
      type: "NEXT_TURN";
      payload: {
        topic: string;
      };
    }
  |{
    type:"FINISH_GAME"
  }
