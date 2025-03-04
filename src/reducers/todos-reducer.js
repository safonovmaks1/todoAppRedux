const todosInitialState = {
	todos: [],
	originalTodos: [],
};

export const todosReducer = (state = todosInitialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_TODO_DATA':
			return {
				...state,
				todos: payload,
				originalTodos: payload,
			};

		case 'ADD_TODO':
			const newTodos = [...state.todos, payload];
			return {
				...state,
				todos: newTodos,
				originalTodos: newTodos,
			};

		case 'DELETE_TODO':
			const deletedTodos = state.todos.filter((todo) => todo.id !== action.payload);
			return {
				...state,
				todos: deletedTodos,
				originalTodos: deletedTodos,
			};

		case 'UPDATE_TODO':
			const updatedTodos = state.todos.map((todo) =>
				todo.id === payload.id ? payload : todo,
			);
			return {
				...state,
				todos: updatedTodos,
				originalTodos: updatedTodos,
			};

		case 'SORT_TODO':
			const sortedTodos = [...state.todos].sort((a, b) =>
				a.text.localeCompare(b.text),
			);
			return {
				...state,
				todos: sortedTodos,
			};

		case 'REVERSE_SORT_TODO':
			const reverseSortedTodos = [...state.todos].sort((a, b) =>
				b.text.localeCompare(a.text),
			);
			return {
				...state,
				todos: reverseSortedTodos,
			};

		case 'SEARCH_TODO':
			const text = payload.toLowerCase().trim();
			const filteredTodos = state.originalTodos.filter((todo) =>
				todo.text.toLowerCase().includes(text),
			);
			return { ...state, todos: filteredTodos };

		case 'RESET_TODO':
			return {
				...state,
				todos: state.originalTodos,
			};

		default:
			return state;
	}
};
