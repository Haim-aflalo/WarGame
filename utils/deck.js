function createCard(rank, suite) {
  let value = 0;
  let highCard = { J: 11, Q: 12, K: 13, A: 14 };
  if (highCard.hasOwnProperty(rank)) {
    value += highCard[rank];
  } else {
    value += parseInt(rank);
  }
  return { rank: rank, suite: suite, value: value };
}

export function compareCards(p1Cards, p2Cards) {
  if (p1Cards.value > p2Cards.value) return 'p1';
  if (p1Cards.value < p2Cards.value) return 'p2';
  else return 'WAR';
}

export function createDeck() {
  let deck = [];
  const suites = ['H', 'S', 'D', 'C'];
  for (let suite of suites) {
    for (let i = 2; i <= 11; i++) {
      if (i < 11) {
        deck.push(createCard(i.toString(), suite));
      } else {
        deck.push(createCard('J', suite));
        deck.push(createCard('Q', suite));
        deck.push(createCard('K', suite));
        deck.push(createCard('A', suite));
      }
    }
  }

  return deck;
}

export function shuffleDeck(deck) {
  let round = 999;
  while (round > 0) {
    let index1 = Math.floor(Math.random() * 52);
    let index2 = Math.floor(Math.random() * 52);
    if (index2 == index1) continue;
    else {
      [deck[index1], deck[index2]] = [deck[index2], deck[index1]];
      round -= 1;
    }
  }
  return deck;
}
