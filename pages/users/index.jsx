import { useState } from 'react'
import Calendar from 'components/Calendar'
import PageLayout from 'components/PageLayout'
import Button from 'components/Button'
import styles from './style.module.css'
import FormRegister from 'components/FormRegister'

export default function Users () {
	const [status, setStatus] = useState('idle')
	const [daySelected, setDaySelected] = useState(null)

	const userDate = e => {
		setDaySelected(e.target.value)
		setStatus('idle')
	}
	const showSchedules = () => setStatus('schedules')

	return (
		<PageLayout title='Users' style={styles.container}>
			<h3>Select a day to see the available schedules</h3>
			<Calendar handleClick={userDate} daySelected={daySelected} />
			<Button value='See available schedules' isDisable={!daySelected} handleClick={showSchedules} label='See available schedules' />
			{status === 'schedules' && <FormRegister day={daySelected} />}
		</PageLayout>
	)
}
