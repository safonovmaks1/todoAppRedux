import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
	addTodo,
	resetTodo,
	reverseSortingTodo,
	searchingTodo,
	sortingTodo,
} from '../../../../store/actions';
import styles from '../../TodoApp.module.css';

export const TodoControlPanel = () => {
	const [isSearching, setIsSearching] = useState('');
	const [isSorting, setIsSorting] = useState(false);
	const dispatch = useDispatch();

	const handleSubmit = () => {
		const text = prompt('Добавить задачу!');
		if (!text || !text.trim()) {
			return;
		}
		dispatch(addTodo(text));
	};

	const handleSorting = () => {
		setIsSorting(true);
		dispatch(sortingTodo);
	};

	const handleSortingReverse = () => {
		setIsSorting(false);
		dispatch(reverseSortingTodo);
	};

	const handleSearch = () => {
		if (isSearching.trim()) {
			dispatch(searchingTodo(isSearching));
		}
	};

	const resetList = () => {
		dispatch(resetTodo);
		setIsSearching('');
	};

	return (
		<div className={styles.grid}>
			<div className={styles.flex}>
				<input
					type="text"
					value={isSearching}
					onChange={(e) => setIsSearching(e.target.value)}
					placeholder="Введите задачу для поиска"
				/>

				<button className={styles.btnSearch} type="button" onClick={handleSearch}>
					Найти задачу
				</button>
			</div>

			<div className={styles.flex}>
				<button className={styles.btnAdd} type="button" onClick={handleSubmit}>
					Добавить задачу
				</button>

				<button
					className={styles.btnSort}
					type="button"
					onClick={isSorting ? handleSortingReverse : handleSorting}>
					{isSorting
						? 'Сортировка в обратном порядке'
						: 'Сортировка в алфавитном порядке'}
				</button>

				<button className={styles.btnReset} type="button" onClick={resetList}>
					Сброс
				</button>
			</div>
		</div>
	);
};
