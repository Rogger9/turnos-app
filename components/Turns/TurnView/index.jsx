import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { container, contrast, btn, bold } from './style.module.css'

const Button = dynamic(() => import('components/Button'))

export default function TurnView ({ id, name, contact, schedule, handleClick }) {
	const { pathname } = useRouter()

	return (
		<section className={container}>
			<span className={bold}>{name}</span>
			<span>{contact}</span>
			<span><span className={contrast}>{schedule}</span> hs</span>
			{pathname === '/admin' && <Button value='Delete' label='Delete' specificStyle={btn} handleClick={() => handleClick(id)} />}
		</section>
	)
}
