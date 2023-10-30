import { useReducer } from "react"

const actionTypes = {
	inputChange: 'INPUT CHANGE',
	clearValues: 'CLEAR VALUES',
}

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.inputChange:
			return {
				...state,
				[action.field]: action.value,
			}
		case actionTypes.clearValues:
			return {
                ...action.initialValues
            }
		default:
			return state
	}
}

export const useForm = (initialValues) => {
	const [formValues, dispatch] = useReducer(reducer, initialValues)

    const handleInputChange = e => {
		dispatch({
			type: 'INPUT CHANGE',
			field: e.target.name,
			value: e.target.value,
		})
	}

    const clearFormHandler = (initialValues) => {
        dispatch({ type: actionTypes.clearValues, initialValues })
    }

    return {
        formValues,
        handleInputChange,
        clearFormHandler,
    }
}
