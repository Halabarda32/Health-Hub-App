import { useEffect, useState } from 'react'
import PatientsListItem from '../../Molecules/PatientsListItem/PatientsListItem'
import { StyledList } from './PatientsList.styles'
import { Title } from '../../Atoms/Title/Title'
import { useParams } from 'react-router-dom'
import { usePatients } from '../../../hooks/usePatients'

const PatientsList = ({ openPatientDetailsHandler }) => {
	const [patients, setPatients] = useState([])
	const { id } = useParams()
	const { getPatients } = usePatients({ roomId: id })

	useEffect(() => {
		;(async () => {
			const patients = await getPatients(id)
			setPatients(patients)
		})()
	}, [getPatients, id])

	return (
		<>
			<Title>Patients list</Title>
			<StyledList>
				{patients.map(patientsData => (
					<PatientsListItem
						onClick={() => openPatientDetailsHandler(patientsData.id)}
						key={patientsData.name}
						patientsData={patientsData}
					/>
				))}
			</StyledList>
		</>
	)
}

export default PatientsList
