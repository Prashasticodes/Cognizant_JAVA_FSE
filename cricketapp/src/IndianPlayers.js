import React from 'react';

// IndianTeam array
export const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvaraj5', 'Raina6'];

// Function to extract odd players using array destructuring
export function OddPlayers([first, , third, , fifth]) {
  return (
    <ul>
      <li>{first}</li>
      <li>{third}</li>
      <li>{fifth}</li>
    </ul>
  );
}

// Function to extract even players using array destructuring
export function EvenPlayers([, second, , fourth, , sixth]) {
  return (
    <ul>
      <li>{second}</li>
      <li>{fourth}</li>
      <li>{sixth}</li>
    </ul>
  );
}

// Two separate arrays
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];

// Merge arrays using ES6 spread operator
export const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

// Component to render the merged Indian players list
export function ListofIndianPlayers({ IndianPlayers }) {
  return (
    <ul>
      {IndianPlayers.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  );
}

