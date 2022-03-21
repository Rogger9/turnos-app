import Head from 'next/head'
import Header from 'components/Header'

export default function PageLayout ({ children, title = 'TurnosApp', style }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content='Turnos app' />
			</Head>
			<Header />
			<main className={style}>
				{children}
			</main>
		</>
	)
}
