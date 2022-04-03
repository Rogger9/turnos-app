import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { container, contrast, btn, bold, opacity } from './style.module.css'

const Button = dynamic(() => import('components/Button'))

export default function TurnView ({ id, name, contact, schedule, handleClick }) {
	const { pathname } = useRouter()
	const currentTime = new Date().getHours()
	const isPast = schedule < currentTime

	return (
		<section className={isPast ? container + ' ' + opacity : container}>
			<span className={bold}>{name}</span>
			<span>{contact}</span>
			<span><span className={contrast}>{schedule}</span> hs</span>
			{pathname === '/admin' && (
				<Button value='Delete' label='Delete' specificStyle={btn} handleClick={() => handleClick(id)} isDisable={isPast} />
			)}
		</section>
	)
}
