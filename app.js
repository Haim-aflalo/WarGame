import { playRound, initGame } from './game_logic/game.js';

let game = initGame();
let pl1 = game.player_1;
let pl2 = game.player_2;

playRound(pl1, pl2);
