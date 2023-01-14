import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";

interface InputTaskProps {
    id: string;
    title: string;
    onDone: (id: string) => void;
    onEdited: (id: string, value: string) => void;
    onRemoved: (id: string) => void;

}

export const InputTask: React.FC<InputTaskProps> = ({
    id,
    title,
    onDone,
    onEdited,
    onRemoved
}) => {
    const [checked, setChecked] = useState(false);
    return (
        <div className={styles.InputTask}>
            <label className={styles.InputTaskLabel}>
                <input 
                    type="checkbox"
                    checked={checked}
                    className={styles.InputTaskCheckbox}
                    onChange={(e)=>{
                        setChecked(e.target.checked);
                        onDone(id);
                    }}
                />
                <h3 className={styles.inputTaskTitle}>{title}</h3>
            </label>
            <button 
                aria-label="Edit task"
                className={styles.InputTaskEdit}
                onClick={()=>{
                    onEdited(id, title);
                }}
            />
            <button 
                aria-label="Remove task"
                className={styles.InputTaskRemove}
                onClick={()=>{
                    if(confirm("Are you sure?")){
                    onRemoved(id);
                }
                }}
            />
        </div>
    )
};