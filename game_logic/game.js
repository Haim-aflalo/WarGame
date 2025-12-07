function createPlayer(name = 'AI') {
  return { name: name, hand: [], won_pile: [] };
}

function initGame() {
  let game_dict = {};
  let p1 = createPlayer('haim');
  game_dict['player_1'] = p1;
  let p2 = createPlayer();
  game_dict['player_2'] = p2;
  let game_deck = create_deck();
  let deck_shuffled = shuffle(game_deck);
  game_dict['deck'] = deck_shuffled;
  game_dict['player_1']['hand'] = deck_shuffled.slice(
    0,
    deck_shuffled.length / 2
  );
  game_dict['player_2']['hand'] = deck_shuffled.slice(deck_shuffled.length / 2);
  return game_dict;
}

function playRound(p1, p2) {
  const p1Card = p1.hand.pop();
  const p2Card = p2.hand.pop();
  let result = compare_cards(p1['hand'].slice(-1), p2['hand'].slice(-1));
  if (result == 'p1') {
    p1Hand.push(p1Card, p2Card);
  } else if (result == 'p2') {
    p2Hand.push(p2Card, p1Card);
  } else return;
}
