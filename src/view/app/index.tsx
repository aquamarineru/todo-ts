import React from 'react';
import { useTodoStore } from '../../data/stores/useTodoStore';
import styles from './index.module.scss';

export const App: React.FC = () => {
    const [
        tasks,
        createTask,
        updateTask,
        removeTask
    ] = useTodoStore(state =>[
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask
    ]);
    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>Todo App</h1>
            <section className={styles.articleSection}></section>
            <section className={styles.articleSection}></section>
        </article>
    );
    
};