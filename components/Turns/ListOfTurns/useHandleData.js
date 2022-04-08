import { useMemo } from 'react'
import { useData } from 'store'

export function useHandleData (day) {
	const { turnsDay, setTurnsDay, deleteTurn } = useData(({ turnsDay, setTurnsDay, deleteTurn }) => ({ turnsDay, setTurnsDay, deleteTurn }))

	useMemo(() => setTurnsDay(day), [day, setTurnsDay])

	const dataSorted = turnsDay?.sort((a, b) => a.schedule - b.schedule)

	return { dataSorted, deleteTurn }
}
