import { GameAction, GameState } from '@/app/types/game';
import topics from '@/data/topics.json';

type Props = {
    state: GameState;
    dispatch: React.Dispatch<GameAction>;
};

export function ResultScreen({
    state,
    dispatch,
}: Props) {
    const currentPlayer =
        state.players[state.currentPlayerIndex];

    const answerPlayer =
        state.players[state.answerPlayerIndex];

    const handleNextTurn = () => {
        const randomTopic =
            topics[
                Math.floor(
                    Math.random() * topics.length,
                )
            ];

        dispatch({
            type: 'NEXT_TURN',
            payload: {
                topic: randomTopic,
            },
        });
    };

    return (
        <section>
            <h2>結果画面</h2>

            <p>出題者：{currentPlayer.name}</p>

            <p>回答者：{answerPlayer.name}</p>

            <p>お題：{state.topic}</p>

            <p>ヒント：{state.hint}</p>

            <p>回答：{state.answer}</p>

            <button
                onClick={() =>
                    dispatch({
                        type: 'ANSWER_CORRECT',
                    })
                }
            >
                正解
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: 'ANSWER_INCORRECT',
                    })
                }
            >
                不正解
            </button>

            <button onClick={handleNextTurn}>
                次の問題へ
            </button>
        </section>
    );
}