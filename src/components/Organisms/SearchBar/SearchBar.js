import { useState, useEffect } from 'react'
import { Input } from '../../Atoms/Input/Input'
import { SearchBarWrapper, StatusInfo, SearchWrapper, SearchResults, SearchResultsItems } from './SearchBar.styles'
import { useCombobox } from 'downshift'
import debounce from 'lodash.debounce'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase'
import Modal from '../Modal/Modal'
import useModal from '../Modal/useModal'

export const SearchBar = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [loading, setLoading] = useState(false)
	const { isOpen: open, openModalHandler, closeModalHandler } = useModal();


	const handleInputChange = changes => {
		if (changes.inputValue) {
			setSearchTerm(changes.inputValue)
		}
	}

	const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem } = useCombobox({
		items: searchResults,
		onInputValueChange: debounce(handleInputChange, 500),
		itemToString: item => (item ? item.name : ''),
	})

	const fetchMatchingPatients = async term => {
		try {
			setLoading(true)
			const patientsCollection = collection(db, 'patients')
			const q = query(patientsCollection, where('name', '>=', term))

			const querySnapshot = await getDocs(q)
			const results = []

			querySnapshot.forEach(doc => {
				const patient = { id: doc.id, ...doc.data() }
				if (patient.name.includes(term)) {
					results.push(patient)
				}
			})

			setSearchResults(results)
			setLoading(false)
		} catch (error) {
			console.error('Error searching Firestore:', error)
		}
	}

	useEffect(() => {
		if (searchTerm.trim() !== '') {
			fetchMatchingPatients(searchTerm)
		} else {
			setSearchResults([])
		}
	}, [searchTerm])

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
				<SearchResults isVisable={isOpen && searchResults.length > 0} {...getMenuProps()}>
					{isOpen &&
						searchResults.map((patient, index) => (
							<SearchResultsItems
								isHighlighted={highlightedIndex === index}
								{...getItemProps({ item: patient, index })}
								key={patient.id}>
								{patient.name}
							</SearchResultsItems>
						))}
				</SearchResults>
			</SearchWrapper>
			<div>
				<Modal open={open} closeHandler={closeModalHandler}>
					{/* <PatientDetails patient={patient} /> */}
				</Modal>
			</div>
		</SearchBarWrapper>
	)
}
