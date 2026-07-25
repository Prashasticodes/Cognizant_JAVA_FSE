import React from 'react';

// Array of 11 players as mock data
export const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'John', score: 40 },
  { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 },
  { name: 'Virat', score: 84 },
  { name: 'Jadeja', score: 64 },
  { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 }
];

// Component to render the full list of players using ES6 map() function
export function ListofPlayers({ players }) {
  return (
    <ul>
      {players.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name}<span> {item.score} </span></li>
        </div>
      ))}
    </ul>
  );
}

// Component to display players with scores of 70 or below using ES6 arrow function filter
export function Scorebelow70({ players }) {
  // Using ES6 arrow function with filter to get players with score <= 70
  const players70 = players.filter((item) => item.score <= 70);
  
  return (
    <ul>
      {players70.map((item, index) => (
        <div key={index}>
          <li>Mr. {item.name}<span> {item.score} </span></li>
        </div>
      ))}
    </ul>
  );
}

