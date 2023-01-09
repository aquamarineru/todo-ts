import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";

interface InputPlusProps {
    onAdd: (title: string) => void;

}

export const InputPlus: React.FC<InputPlusProps> = ({onAdd}) => {
    const [inputValue, setInputValue] = useState('');
    const addTask = useCallback(() => {
        onAdd(inputValue);
        setInputValue('');
    }, [inputValue]);
    return (
        <div className={styles.InputPlus}>
            <input 
                type="text" 
                placeholder="Add a new task" 
                className={styles.InputPlusValue}
                value={inputValue}
                onChange={(e)=>{
                    setInputValue(e.target.value);
                }}
                onKeyDown={(e)=>{
                    if(e.key === 'Enter'){
                        addTask();
                    }
                }}
            />
            <button 
                onClick={addTask}
                aria-label="Add"
                className={styles.InputPlusButton}
            />
        </div>
    )
};