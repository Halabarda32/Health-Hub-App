import { useState } from 'react'
import Modal from './Modal'

const useModal = (initialState = false) => {
	const [isOpen, setIsOpen] = useState(initialState)

	const openModalHandler = () => {
		setIsOpen(true)
	}
	const closeModalHandler = () => {
		setIsOpen(false)
	}

	return {
		isOpen,
		openModalHandler,
		closeModalHandler,
	}
}

export default useModal
