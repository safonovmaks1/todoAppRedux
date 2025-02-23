import { TODOS_URL } from '../../const';

export const deleteTodo = (id) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${TODOS_URL}/${id}`, {
				method: 'DELETE',
			});

			if (!response.ok) {
				throw new Error(`Ошибка при удалении. status: ${response.status}`);
			}
			dispatch({
				type: 'DELETE_TODO',
				payload: id,
			});
		} catch (error) {
			console.error('Ошибка при удалении задачи:', error);
		}
	};
};
