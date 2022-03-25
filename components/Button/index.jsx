import styles from './style.module.css'

export default function Button ({ type = 'button', value, handleClick, isDisable, label }) {
	return (
		<button
			type={type}
			className={styles.btn}
			onClick={handleClick}
			disabled={isDisable}
			aria-label={label}
		>
			{value}
		</button>
	)
}
