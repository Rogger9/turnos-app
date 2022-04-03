import { useHandleData } from './useHandleData'
import TurnView from '../TurnView'
import { container, empty } from './style.module.css'

export default function ListOfTurns ({ daySelected }) {
	const { dataSorted, deleteTurn } = useHandleData(daySelected)

	if (dataSorted?.length === 0) return <span className={empty}>No turns to show</span>

	return (
		<section role='listbox' className={container}>
			{
				dataSorted?.map(turn => <TurnView key={turn.id} {...{ ...turn }} handleClick={deleteTurn} />)
			}
		</section>
	)
}
