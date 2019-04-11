import {
  FETCH_DATA_SUCCESS,
} from "../actions";

const initialState = {
  deletingFriend: false,
  fetchingFriends: false,
  friends: [],
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        friends: action.payload
      };
    }
    default:
      return state;
  }
};

export default reducer;
