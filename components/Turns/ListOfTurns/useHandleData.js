import { useState, useEffect } from 'react'
import { data } from 'data'

export function useHandleData (day) {
	const [dataList, setData] = useState([])

	useEffect(() => setData(data[day] ?? []), [day])

	const dataSorted = dataList?.sort((a, b) => a.schedule - b.schedule)

	const deleteTurn = (id) => setData(dataList.filter(turn => turn.id !== id))

	return { dataSorted, deleteTurn }
}
