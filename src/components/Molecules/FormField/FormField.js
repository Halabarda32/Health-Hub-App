import React from 'react'
import styled from 'styled-components'
import { Label } from '../../Atoms/Label/Label'
import { Input } from '../../Atoms/Input/Input'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	${Label} {
		margin: 10px 0;
	}
`

const FormField = React.forwardRef(({ onChange, required ,value, label, name, id, type = 'text', isTextarea, ...props }, ref) => {
	return (
	  <Wrapper>
		<Label htmlFor={id}>{label}</Label>
		{isTextarea ? (
		  <Input isTextarea as="textarea" name={name} id={id} value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
		) : (
		  <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
		)}
	  </Wrapper>
	);
  });

export default FormField
