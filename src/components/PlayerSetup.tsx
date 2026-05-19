"use Client";

import { GameAction, Player } from "@/app/types/game";
import { useState } from "react";
import topics from "@/data/topics.json";
type Props = {
  dispatch: React.Dispatch<GameAction>;
};

export function PlayerSetup({ dispatch }: Props) {
  const [playerCount, setPlayerCount] = useState<number>(2);
  const [playerNames, setPlayerNames] = useState<string[]>([
    "プレイヤー１",
    "プレイヤー２",
  ]);

  const handleChangePlayerCount = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const count = Number(event.target.value);
    setPlayerCount(count);

    const nextPlayerNames = Array.from(
      { length: count },
      (_, index) => playerNames[index] ?? `プレイヤー${index + 1}`,
    );
    setPlayerNames(nextPlayerNames);
  };

  const handleChangePlayerName = (index: number, value: string) => {
    const nextPlayerNames = playerNames.map((name, currentIndex) =>
      currentIndex === index ? value : name,
    );
    setPlayerNames(nextPlayerNames);
  };

  const handleStartGame = () => {
    const players: Player[] = playerNames.map((name, index) => ({
      id: index + 1,
      name: name.trim() || `プレイヤー${index + 1}`,
      score: 0,
    }));

    const randomTopic = topics[Math.floor(Math.random() * topics.length)];

    dispatch({
      type: "START_GAME",
      payload: {
        players,
        topic: randomTopic,
      },
    });
  };

  return (
    <section>
      <h2>プレイヤー設定</h2>

      <label>
        人数:
        <select value={playerCount} onChange={handleChangePlayerCount}>
          <option value={2}>2人</option>
          <option value={3}>3人</option>
          <option value={4}>4人</option>
        </select>
      </label>

      {playerNames.map((name, index) => (
        <div key={index}>
          <label>
            プレイヤー{index + 1}:
            <input
              type="text"
              value={name}
              onChange={(event) =>
                handleChangePlayerName(index, event.target.value)
              }
            />
          </label>
        </div>
      ))}
      <button onClick={handleStartGame}>ゲーム開始</button>
    </section>
  );
}
