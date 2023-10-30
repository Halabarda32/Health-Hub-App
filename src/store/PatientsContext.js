import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const PatientsContext = React.createContext({
	patients: [],
	addPatientHandler: () => {},
	deletePatient: () => {},
})

const PatientsProvider = props => {
	const [patients, setPatients] = useState([])

	useEffect(() => {
		axios
			.get('/patients')
			.then(({ data }) => setPatients(data.patients))
			.catch(err => console.log(err))
	}, [])

	const deletePatient = name => {
		const filteredPatients = patients.filter(patient => patient.name !== name)
		setPatients(filteredPatients)
	}

	const addPatientHandler = formValues => {
		const newPatient = {
			name: formValues.name,
			doctor: formValues.doctor,
			room: formValues.room,
		}
		setPatients([newPatient, ...patients])
	}

	return (
		<PatientsContext.Provider value={{ patients, addPatientHandler, deletePatient }}>
			{props.children}
		</PatientsContext.Provider>
	)
}

export default PatientsProvider
