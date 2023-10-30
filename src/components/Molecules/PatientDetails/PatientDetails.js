import { Average } from '../../Atoms/Average/Average'
import { Title } from '../../Atoms/Title/Title'
import {
	BigAverage,
	StyledDetails,
	StyledInfo,
	StyledLabel,
	StyledSubjectInfo,
	Wrapper,
} from './PatientDetails.styled.js'

const PatientDetails = ({ patient }) => {
	return (
		<Wrapper>
      <BigAverage value={patient.average}>{patient.average}</BigAverage>
      <Title isBig>{patient.name}</Title>
      <StyledDetails>
        <StyledLabel>Atending doctor:</StyledLabel>
        <StyledInfo isBig>{patient.doctor}</StyledInfo>
        <StyledLabel>Medical Examinations:</StyledLabel>
        {patient.medicalExaminations.map(({ examination, average }) => (
          <StyledSubjectInfo key={examination}>
            <StyledInfo>{examination}</StyledInfo>
            <Average value={average}>{average}</Average>
          </StyledSubjectInfo>
        ))}
      </StyledDetails>
    </Wrapper>
	)
}

export default PatientDetails
