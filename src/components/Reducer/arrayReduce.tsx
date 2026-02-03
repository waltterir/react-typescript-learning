import React from "react";

const words = ["omena", "banaani", "omena"];

export const WordCounts = () => {
  const counts = words.reduce<Record<string, number>>((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <h2>Word counts</h2>
      <ul>
        {Object.entries(counts).map(([word, count]) => (
          <li key={word}>
            {word}: {count}
          </li>
        ))}
      </ul>
    </div>
  );
};
