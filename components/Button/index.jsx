import styles from './style.module.css'

export default function Button ({ type = 'button', value, handleClick, isDisable, label, specificStyle = '' }) {
	return (
		<button
			type={type}
			className={styles.btn + ' ' + specificStyle}
			onClick={handleClick}
			disabled={isDisable}
			aria-label={label}
		>
			{value}
		</button>
	)
}
