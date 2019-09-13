// Actions
const ADD = 'TEAMS/ADD';

const INITIAL_STATE = {
  data: [],
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };
    default:
      return state;
  }
}

// Action Creators
export function addTeam(team) {
  return {
    type: ADD,
    payload: team,
  };
}
