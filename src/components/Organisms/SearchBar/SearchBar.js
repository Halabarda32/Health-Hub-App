import { useState } from 'react'
import { Input } from '../../Atoms/Input/Input'
import debounce from 'lodash.debounce'
import { useCombobox } from 'downshift'
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItems } from './SearchBar.styles'
import { usePatients } from '../../../hooks/usePatients'

export const SearchBar = () => {
	const [matchingPatients, setMatchingPatients] = useState([])
	const { findPatient } = usePatients()

	const getMatchingPatients = debounce(async ({ inputValue }) => {
		const { patients } = await findPatient(inputValue)
		setMatchingPatients(patients)
	}, 500)

	const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
		items: matchingPatients,
		onInputValueChange: getMatchingPatients,
	})

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<p>
					<strong>Nurse</strong>
				</p>
			</StatusInfo>
			<SearchWrapper>
				<Input {...getInputProps()} name="Search" id="Search" placeholder="Search patient" />
				<SearchResults isVisable={isOpen && matchingPatients.length > 0} {...getMenuProps()}>
					{isOpen &&
						matchingPatients.map((patient, index) => (
							<SearchResultsItems
								isHighlighted={highlightedIndex === index}
								{...getItemProps({ item: patient, index })}
								key={patient.id}>
								{patient.name}
							</SearchResultsItems>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	)
}
