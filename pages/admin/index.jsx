import { useState } from 'react'
import Calendar from 'components/Calendar'
import PageLayout from 'components/PageLayout'
import Button from 'components/Button'
import { container } from './style.module.css'
import ListOfTurns from 'components/Turns/ListOfTurns'

export default function Admin () {
	const [status, setStatus] = useState('idle')
	const [daySelected, setDaySelected] = useState(null)

	const userDate = e => {
		setDaySelected(e.target.value)
		setStatus('idle')
	}
	const showSchedules = () => setStatus('schedules')

	return (
		<PageLayout title='Admin' style={container}>
			<h1>Admin</h1>
			<Calendar handleClick={userDate} daySelected={daySelected} />
			<Button value='See turns' isDisable={!daySelected} handleClick={showSchedules} label='See turns' />
			{status === 'schedules' && <ListOfTurns {...{ daySelected }} />}
		</PageLayout>
	)
}
