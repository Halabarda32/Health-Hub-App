import { useState } from 'react'
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
