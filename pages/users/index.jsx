import usePages from 'hooks/usePages'
import Calendar from 'components/Calendar'
import PageLayout from 'components/PageLayout'
import Button from 'components/Button'
import styles from './style.module.css'
import FormRegister from 'components/FormRegister'

export default function Users () {
	const { daySelected, status, userDate, showSchedules } = usePages()

	return (
		<PageLayout title='Users' style={styles.container}>
			<h3>Select a day to see the available schedules</h3>
			<Calendar handleClick={userDate} daySelected={daySelected} />
			<Button value='See available schedules' isDisable={!daySelected} handleClick={showSchedules} label='See available schedules' />
			{status === 'schedules' && <FormRegister day={daySelected} />}
		</PageLayout>
	)
}
