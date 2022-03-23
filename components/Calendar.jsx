import styles from 'styles/Calendar.module.css'

export default function Calendar ({ handleClick, daySelected }) {
	const daysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
	return (
		<ol className={styles.container}>
			{daysNames.map(name => <li key={name} className={styles.dayName}>{name}</li>)}
			{days.map(day => (
				<li key={day}
					value={day}
					onClick={handleClick}
					className={daySelected === day ? styles.selected : ''}
				>{day}</li>
			))}
		</ol>
	)
}
