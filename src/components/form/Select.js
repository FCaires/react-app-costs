import styles from './Select.module.css'

function Select({ text, name, options, value, handleOnChange }) {
    return (
        <div className={styles.select_control}>
            <label htmlFor={name}>{text}:</label>
            <select onChange={handleOnChange} name={name} id={name} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((options) => (
                    <option value={options.id} key={options.id}>{options.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select



