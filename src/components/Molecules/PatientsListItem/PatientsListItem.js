import Button from '../../Atoms/DeleteButton/DeleteButton'
import { StyledAverage, StyledInfo, Wrapper } from './PatientsListItem.styles'
import { db } from '../../../firebase'
import { doc, deleteDoc } from 'firebase/firestore';

const PatientsListItem = ({ patientsData: { average, name, doctor, id }, openPatientDetailsHandler, ...props }) => {

	const deletePatient = async (patientID) => {
		try {
		  const patientRef = doc(db, 'patients', patientID);
		  await deleteDoc(patientRef);
		  console.log('Patient deleted successfully.');
		} catch (error) {
		  console.error('Error deleting patient:', error);
		}
	  };

	return (
		<Wrapper {...props}>
			<StyledAverage value={average}>{average}</StyledAverage>
			<StyledInfo>
				<p onClick={() => openPatientDetailsHandler(id)}>{name}</p>
				<p>Atending doctor: {doctor}</p>
			</StyledInfo>
			<Button onClick={() => deletePatient(id)} />
		</Wrapper>
	)
}

export default PatientsListItem
