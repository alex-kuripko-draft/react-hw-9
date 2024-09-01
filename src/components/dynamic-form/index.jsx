import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './dynamic-form.module.css';

const DynamicForm = () => {
    const { register, watch, handleSubmit, formState: { errors, isValid } } = useForm();
    
    return (
        <form onSubmit={handleSubmit(data => console.log(data))} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="firstField">First Field</label>
                <input
                    id="firstField"
                    {...register('firstField', { required: true, minLength: 6 })}
                />
                {errors.firstField && <span className={styles.error}>Minimum length is 6</span>}
            </div>

            {isValid && (
                <div className={styles.formGroup}>
                    <label htmlFor="secondField">Second Field</label>
                    <input id="secondField" {...register('secondField')} />
                </div>
            )}

            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
}

export default DynamicForm;