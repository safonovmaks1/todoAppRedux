import { TODOS_URL } from '../../const';

export const addTodo = (text) => {
	return async (dispatch) => {
		const newTodo = { id: Date.now(), text: text };

		try {
			const response = await fetch(TODOS_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTodo),
			});

			if (!response.ok) {
				throw new Error(`Ошибка при добавлении. status: ${response.status}`);
			}

			const data = await response.json();

			dispatch({
				type: 'ADD_TODO',
				payload: data,
			});
		} catch (error) {
			console.error('Ошибка при добавлении задачи на сервере:', error);
		}
	};
};
