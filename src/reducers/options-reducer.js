const optionsInitialState = {
	searchQuery: '',
};

export const optionsReducer = (state = optionsInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_SEARCH_QUERY':
			return { ...state, searchQuery: payload };

		case 'RESET_SEARCH_QUERY':
			return { ...state, searchQuery: optionsInitialState.searchQuery };

		default:
			return state;
	}
};
