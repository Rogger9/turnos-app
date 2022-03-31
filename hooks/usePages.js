import { useState } from 'react'

export default function usePages () {
	const [status, setStatus] = useState('idle')
	const [daySelected, setDaySelected] = useState(null)

	const userDate = e => {
		setDaySelected(e.target.value)
		setStatus('idle')
	}

	const showSchedules = () => setStatus('schedules')

	return { status, daySelected, userDate, showSchedules }
}
