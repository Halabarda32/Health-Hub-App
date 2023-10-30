import { ModalWrapper } from './Modal.styles'
import { Button } from '../../Atoms/Button/Button'

const modalContainer = document.getElementById('modal-container')

const Modal = ({ closeHandler, isOpen, children }) => {
	return (
		<ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={closeHandler}>
			{children}
			<Button onClick={closeHandler}>Close</Button>
		</ModalWrapper>
	)
}

export default Modal
