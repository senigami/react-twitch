import { CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STREAM:
		case CREATE_STREAM:
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };

		case FETCH_STREAMS: {
			const newStream = { ...state };
			action.payload.map(obj => (newStream[obj.id] = obj));
			return newStream;
			// return { ...state, ..._.mapKeys(action.payload, 'id' ) };
		}

		case DELETE_STREAM: {
			const newStream = { ...state };
			delete newStream[action.payload];
			return newStream;
			// return _.omit(state, action.payload);
		}

		default:
			return state;
	}
};
