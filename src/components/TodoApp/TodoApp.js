import { TodoControlPanel, TodoList } from './components';
import styles from './TodoApp.module.css';

export const TodoApp = () => {
	return (
		<div className={styles.todo}>
			<TodoControlPanel />
			<hr />
			<TodoList />
		</div>
	);
};
