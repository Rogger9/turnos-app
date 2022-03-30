import { useEffect, useState } from 'react'
import { data } from 'data'
import TurnView from '../TurnView'
import { container, empty } from './style.module.css'

export default function ListOfTurns ({ daySelected }) {
	const [dataList, setData] = useState([])

	useEffect(() => setData(data[daySelected]), [daySelected])

	const dataSorted = dataList?.sort((a, b) => a.schedule - b.schedule)

	const deleteTurn = (id) => setData(dataList.filter(turn => turn.id !== id))

	if (dataList?.length === 0) return <span className={empty}>No turns to show</span>

	return (
		<section role='listbox' className={container}>
			{
				dataSorted?.map(turn => <TurnView key={turn.id} {...{ ...turn }} handleClick={deleteTurn} />)
			}
		</section>
	)
}
