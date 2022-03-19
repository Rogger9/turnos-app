import Head from 'next/head'

export default function PageLayout ({ children, title = 'TurnosApp', style }) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content='Turnos app' />
			</Head>
			<main className={style}>
				{children}
			</main>
		</>
	)
}
