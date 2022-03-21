import LinkButton from 'components/LinkButton'
import { ADMIN, USERS } from 'routes'
import styles from './style.module.css'

export default function Header () {
	return (
		<header className={styles.container}>
			<LinkButton to={USERS} value='Users' />
			<LinkButton to={ADMIN} value='Admin' />
		</header>
	)
}
