import { TodoApp } from '../components/TodoApp/TodoApp';
import styles from './App.module.css';

export const App = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.app}>
					<h1 className={[styles.title, styles.color].join(' ')}>Todo List</h1>
					<hr />
					<TodoApp />
				</div>
			</div>
		</>
	);
};
