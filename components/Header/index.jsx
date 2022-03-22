import LinkButton from 'components/LinkButton'
import { useRouter } from 'next/router'
import { ADMIN, HOME, USERS } from 'routes'
import styles from './style.module.css'

export default function Header () {
	const { pathname } = useRouter()
	const isHome = pathname === '/'
	return (
		<header className={styles.container}>
			{
				isHome
					? <>
						<LinkButton to={USERS} value='Users' />
						<LinkButton to={ADMIN} value='Admin' />
					</>
					: <LinkButton to={HOME} value='Back' />
			}
		</header>
	)
}
