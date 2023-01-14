import React from 'react';
import { useTodoStore } from '../../data/stores/useTodoStore';
import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';
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
            <section className={styles.articleSection}>
                <InputPlus 
                    onAdd={(title)=>{
                        createTask(title);
                    }}
                />
            </section>
            <section className={styles.articleSection}>
                {!tasks.length && (
                    <p className={styles.articleDescr}>There is no one task</p>
                )}
                    {tasks.map((task) => (
                        <InputTask 
                            key={task.id} //important
                            id={task.id}
                            title={task.title}
                            onDone={removeTask}
                            onEdited={updateTask}    
                            onRemoved={removeTask} 
                        />
                    ))}
            </section>
        </article>
    );
    
};