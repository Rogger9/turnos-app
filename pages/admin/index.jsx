import usePages from 'hooks/usePages'
import Calendar from 'components/Calendar'
import PageLayout from 'components/PageLayout'
import Button from 'components/Button'
import ListOfTurns from 'components/Turns/ListOfTurns'
import { container } from './style.module.css'

export default function Admin () {
	const { daySelected, status, userDate, showSchedules } = usePages()

	return (
		<PageLayout title='Admin' style={container}>
			<h1>Admin</h1>
			<Calendar handleClick={userDate} daySelected={daySelected} />
			<Button value='See turns' isDisable={!daySelected} handleClick={showSchedules} label='See turns' />
			{status === 'schedules' && <ListOfTurns {...{ daySelected }} />}
		</PageLayout>
	)
}
