import * as PlayerActionTypes from "../actiontypes/player";

// Action creator (takes a name returns an action)
export const addPlayer = name => {
  return {
		type: PlayerActionTypes.ADD_PLAYER,
		name
  };
};

// Action creator (takes a index returns an action)
export const removePlayer = index => {
	return {
		type: PlayerActionTypes.REMOVE_PLAYER,
		index
	};
};

// Action creator (takes index and score returns an action)
export const updatePlayerScore = (index, score) => {
	return {
		type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
		index,
		score
	};
};

// each action needs to get dispatched in order to express an intent to change state