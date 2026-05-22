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

    case "SET_ANSWER":
      return {
        ...state,
        answer: action.payload,
        screen: "RESULT",
      };

    case "ANSWER_CORRECT": //正解者に2点、出題者に1点。そのほかのプレイヤーは1点
      return {
        ...state,
        players: state.players.map((player, index) => {
          if (index === state.answerPlayerIndex) {
            return {
              ...player,
              score: player.score + 2,
            };
          }

          if (index === state.currentPlayerIndex) {
            return {
              ...player,
              score: player.score + 1,
            };
          }

          return player;
        }),
      };

    case "ANSWER_INCORRECT":
      return {
        ...state,
      };

    default:
      return state;

   case 'NEXT_TURN': {
  const nextCurrentPlayerIndex =
    (state.currentPlayerIndex + 1) % state.players.length;

  const nextAnswerPlayerIndex =
    (nextCurrentPlayerIndex + 1) % state.players.length;

  return {
    ...state,
    currentPlayerIndex: nextCurrentPlayerIndex,
    answerPlayerIndex: nextAnswerPlayerIndex,
    topic: action.payload.topic,
    hint: '',
    answer: '',
    screen: 'TOPIC',
  };
}
  }
}
