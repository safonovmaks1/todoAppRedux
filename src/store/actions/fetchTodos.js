import { TODOS_URL } from '../../const';

export const fetchTodos = () => {
	return async (dispatch) => {
		try {
			const response = await fetch(TODOS_URL);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();

			dispatch({
				type: 'SET_TODO_DATA',
				payload: data,
			});
		} catch (error) {
			console.error('Ошибка при загрузке задач:', error);
		}
	};
};
