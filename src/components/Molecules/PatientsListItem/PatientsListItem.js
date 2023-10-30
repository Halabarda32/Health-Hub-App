import { useContext } from 'react'
import Button from '../../Atoms/DeleteButton/DeleteButton'
import { StyledAverage, StyledInfo, Wrapper } from './PatientsListItem.styles'
import { PatientsContext } from '../../../store/PatientsContext'

const PatientsListItem = ({ patientsData: { average, name, doctor }, ...props }) => {
	const { deletePatient } = useContext(PatientsContext)
	return (
		<Wrapper {...props}>
			<StyledAverage value={average}>{average}</StyledAverage>
			<StyledInfo>
				<p>
					{name}
					<Button onClick={() => deletePatient(name)} />
				</p>
				<p>Atending doctor: {doctor}</p>
			</StyledInfo>
		</Wrapper>
	)
}

export default PatientsListItem
