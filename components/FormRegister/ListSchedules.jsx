export default function ListSchedules ({ hoursToShow, styles, handleClick }) {
	return (
		<select name='schedules' id='schedules' size={hoursToShow.length} className={styles.select}>
			{
				hoursToShow.map(schedule => (
					<option
						key={schedule}
						value={schedule}
						onClick={handleClick}
						className={styles.options}
					>
						{schedule}
					</option>
				))
			}
		</select>
	)
}
