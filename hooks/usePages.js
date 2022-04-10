import { useState } from 'react'

export default function usePages () {
	const [status, setStatus] = useState('idle')
	const [daySelected, setDaySelected] = useState(null)

	const userDate = e => {
		setDaySelected(e.target.value)
		setStatus('idle')
	}
	const resetDay = () => setDaySelected(null)

	const showSchedules = () => setStatus('schedules')
	const hideSchedules = () => setStatus('idle')

	return { status, daySelected, userDate, resetDay, showSchedules, hideSchedules }
}
