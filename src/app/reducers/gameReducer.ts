import { GameAction, GameState } from "../types/game";

//初期値
export const initialGameState: GameState = {
  screen: "TITLE",

  players: [],

  currentPlayerIndex: 0,
  answerPlayerIndex: 1,

  topic: "",
  hint: "",
  answer: "",
};

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "GO_PLAYER_SETUP":
      return {
        ...state,
        screen: "PLAYER_SETUP",
      };

    case "GO_TOPIC":
      return {
        ...state,
        screen: "TOPIC",
      };

    case "GO_HINT_INPUT":
      return {
        ...state,
        screen: "HINT_INPUT",
      };

    case "GO_ANSWER_INPUT":
      return {
        ...state,
        screen: "ANSWER_INPUT",
      };

    case "GO_RESULT":
      return {
        ...state,
        screen: "RESULT",
      };

    case "GO_TITLE":
      return {
        ...initialGameState,
      };
    case "START_GAME":
      return {
        ...state,
        players: action.payload.players,
        topic: action.payload.topic,
        screen: "TOPIC",
      };
    case "SET_TOPIC": //再抽選などを作るのであれば必要かも？
      return {
        ...state,
        topic: action.payload,
        screen: "TOPIC",
      };
    case "SET_HINT":
      return {
        ...state,
        hint: action.payload,
        screen: "ANSWER_INPUT",
      };
      

    default:
      return state;
  }
}
