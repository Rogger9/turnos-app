import Link from 'next/link'
import styles from './style.module.css'

export default function LinkButton ({ to, value }) {
	return (
		<Link href={to}><a className={styles.btn}>{value}</a></Link>
	)
}
