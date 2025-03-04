import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodo,
	resetSearchQuery,
	resetTodo,
	reverseSortingTodo,
	searchingTodo,
	sortingTodo,
} from '../../../../actions';
import { selectSearchQuery } from '../../../../selectors';
import styles from '../../TodoApp.module.css';

export const TodoControlPanel = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectSearchQuery);

	const [isSorting, setIsSorting] = useState(false);

	const handleSubmit = () => {
		const text = prompt('Добавить задачу!');
		if (!text?.trim()) {
			return;
		}
		dispatch(addTodo(text));
	};

	const handleReset = () => {
		dispatch(resetTodo);
		dispatch(resetSearchQuery);
	};

	const handleSorting = () => {
		setIsSorting(true);
		dispatch(sortingTodo);
	};

	const handleSortingReverse = () => {
		setIsSorting(false);
		dispatch(reverseSortingTodo);
	};

	const handleSearchInputChange = (e) => {
		const value = e.target.value;
		dispatch(searchingTodo(value));
	};

	return (
		<div className={styles.grid}>
			<div className={styles.flex}>
				<input
					type="text"
					value={searchQuery}
					onChange={handleSearchInputChange}
					placeholder="Введите задачу для поиска"
				/>
			</div>

			<div className={styles.flex}>
				<button className={styles.btnAdd} type="button" onClick={handleSubmit}>
					Добавить задачу
				</button>

				<button
					className={styles.btnSort}
					type="button"
					onClick={isSorting ? handleSortingReverse : handleSorting}>
					{isSorting ? 'Сортировка A-Z' : 'Сортировка Z-A'}
				</button>

				<button className={styles.btnReset} type="button" onClick={handleReset}>
					Сброс
				</button>
			</div>
		</div>
	);
};
