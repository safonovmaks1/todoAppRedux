import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, fetchTodos, updateTodo } from '../../../../store/actions';
import { selectTodos } from '../../../../store/selectors';
import styles from '../../TodoApp.module.css';

export const TodoList = () => {
	const dispatch = useDispatch();
	const { todos } = useSelector(selectTodos);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleUpdate = (id) => {
		const text = prompt('Обновить!');
		if (!text || !text.trim()) {
			return;
		}
		dispatch(updateTodo(id, text));
	};

	return (
		<div>
			<ul className={styles.grid}>
				{todos.map(({ id, text }) => (
					<li key={id} className={styles.todoItem}>
						<span className={[styles.text, styles.mrAuto].join(' ')}>
							{text}
						</span>
						<div className={styles.flex}>
							<button onClick={() => handleUpdate(id)}>Обновить</button>
							<button
								className={styles.btnDelete}
								onClick={() => handleDelete(id)}>
								x
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
