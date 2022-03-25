import { useState } from 'react'
import Button from 'components/Button'
import { getScheduleList } from './getSchedulesList'
import ListSchedules from './ListSchedules'
import styles from './style.module.css'

export default function FormRegister ({ day }) {
	const [hour, setHour] = useState(null)
	const { hoursToShow } = getScheduleList(day)
	const handleClick = e => setHour(e.target.value)

	return (
		<form className={styles.form}>
			<ListSchedules {...{ hoursToShow, styles, handleClick }} />
			<input type='text' name='name' id='name' className={styles.input} placeholder='Insert your name' aria-label='name' />
			<input type='email' name='email' id='email' className={styles.input} placeholder='correo@correo.com' aria-label='email' />
			<Button value='Done' isDisable={!hour} label='Done' />
		</form>
	)
}
