function createPlayer(name = 'AI') {
  return { name: name, hand: [], won_pile: [] };
}

// function initGame(){
//     let game_dict = {}
//     p1 = createPlayer("hermon")
//     game_dict["player_1"] = p1
//     p2 = createPlayer()
//     game_dict["player_2"] = p2
//     game_deck = create_deck()
//     deck_shuffled = shuffle(game_deck)
//     game_dict["deck"] = deck_shuffled
//     // game_dict["player_1"]["hand"] = deck_shuffled[26:]
//     // game_dict["player_2"]["hand"] = deck_shuffled[:26]

//     return game_dict

// }
