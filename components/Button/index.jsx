import styles from './style.module.css'

export default function Button ({ value, handleClick, isDisable }) {
	return <button className={styles.btn} onClick={handleClick} disabled={isDisable}>{value}</button>
}
