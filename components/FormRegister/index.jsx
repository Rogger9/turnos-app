import { useState } from 'react'
import { useData } from 'store'
import Button from 'components/Button'
import { getScheduleList } from './getSchedulesList'
import ListSchedules from './ListSchedules'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validation } from './validations'
import styles from './style.module.css'

export default function FormRegister ({ day, hideSchedules, resetDay }) {
	const [hour, setHour] = useState(null)
	const { turns, createTurn } = useData(({ turns, createTurn }) => ({ turns, createTurn }))
	const { hoursToShow } = getScheduleList(day, turns)
	const handleClick = e => setHour(e.target.value)

	return (
		<Formik
			initialValues={{ name: '', email: '' }}
			validate={validation}
			onSubmit={({ name, email }) => {
				createTurn(name, email, hour, day)
				setHour(null)
				//message success -> 'turn created successfully'
				hideSchedules()
				resetDay()
			}}
		>
			{
				({ errors: { name, email } }) => (
					<Form className={styles.form}>
						<ListSchedules {...{ hoursToShow, styles, handleClick }} />
						<Field type='text'
							name='name'
							id='name'
							className={styles.input}
							placeholder='Insert your name'
							aria-label='name'
						/>
						<ErrorMessage name='name' component={() => <span role='alert' className={styles.error}>{name}</span>} />
						<Field type='email'
							name='email'
							id='email'
							className={styles.input}
							placeholder='correo@correo.com'
							aria-label='email'
						/>
						<ErrorMessage name='email' component={() => <span className={styles.error}>{email}</span>} />
						<Button type='submit' value='Done' isDisable={!hour} label='Done'/>
					</Form>
				)
			}
		</Formik>
	)
}
