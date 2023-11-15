import { useEffect, useState } from 'react'
import PatientsListItem from '../../Molecules/PatientsListItem/PatientsListItem'
import { StyledList } from './PatientsList.styles'
import { Title } from '../../Atoms/Title/Title'
import { useParams } from 'react-router-dom'
import { collection, query, onSnapshot, where } from 'firebase/firestore'
import { db } from '../../../firebase'

const PatientsList = ({ openPatientDetailsHandler }) => {
	const [patient, setPatient] = useState([])
	const { id } = useParams()

	useEffect(() => {
		if (id) {
			const q = query(collection(db, 'patients'), where('room', '==', id))
			const unsubscribe = onSnapshot(q, querySnapshot => {
				const patientsData = []
				querySnapshot.forEach(doc => {
					patientsData.push({ id: doc.id, ...doc.data() })
				})
				setPatient(patientsData)
			})

			return () => {
				unsubscribe()
			}
		}
	}, [id])

	return (
		<>
			<Title>Patients list</Title>
			<StyledList>
				{patient.map(patientsData => (
					<>
						<PatientsListItem
							openPatientDetailsHandler={openPatientDetailsHandler}
							key={patientsData.id}
							patientsData={patientsData}
						/>
					</>
				))}
			</StyledList>
		</>
	)
}

export default PatientsList
