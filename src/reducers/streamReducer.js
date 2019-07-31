import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAMS:
      return { ...state, ...action.payload.map(obj => ({ [obj.id]: obj })) };
    // return { ...state, ..._.mapKeys(action.payload, 'id' ) };

    case DELETE_STREAM:
      const newStream = { ...state };
      delete newStream[action.payload.id];
      return newStream;
    // return _.omit(state, action.payload);

    default:
      return state;
  }
};
