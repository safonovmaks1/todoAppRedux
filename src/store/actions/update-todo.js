import { TODOS_URL } from '../../const';

export const updateTodo = (id, text) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`${TODOS_URL}/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ text: text }),
			});

			if (!response.ok) {
				throw new Error(`Ошибка при обновлении. status: ${response.status}`);
			}

			const data = await response.json();

			dispatch({
				type: 'UPDATE_TODO',
				payload: data,
			});
		} catch (error) {
			console.error('Ошибка при обновлении задачи на сервере:', error);
		}
	};
};
