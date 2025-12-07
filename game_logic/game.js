import { compareCards, createDeck, shuffleDeck } from '../utils/deck.js';

function createPlayer(name = 'AI') {
  return { name: name, hand: [], won_pile: [] };
}

export function initGame() {
  let game_dict = {};
  let p1 = createPlayer('haim');
  game_dict['player_1'] = p1;
  let p2 = createPlayer();
  game_dict['player_2'] = p2;
  let game_deck = createDeck();
  let deck_shuffled = shuffleDeck(game_deck);
  game_dict['deck'] = deck_shuffled;
  game_dict['player_1'].hand = deck_shuffled.slice(0, deck_shuffled.length / 2);
  game_dict['player_2'].hand = deck_shuffled.slice(deck_shuffled.length / 2);
  return game_dict;
}

export function playRound(p1, p2) {
  const p1Card = p1.hand.pop();
  const p2Card = p2.hand.pop();
  let result = compareCards(p1Card, p2Card);
  console.log('round score:', result);
  if (result == 'p1') {
    p1.won_pile.push(p1Card);
    p1.won_pile.push(p2Card);
    console.log('p1:', p1, 'p1card', p1Card);
    console.log('p2:', p2, 'p2card', p2Card);
  } else if (result == 'p2') {
    p2.won_pile.push(p2Card);
    p2.won_pile.push(p1Card);
    console.log('p1:', p1, 'p1card', p1Card);
    console.log('p2:', p2, 'p2card', p2Card);
  } else return;
}
