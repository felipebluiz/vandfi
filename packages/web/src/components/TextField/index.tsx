import React, { forwardRef, useState } from 'react'

import { StyledTextField, Container } from './styles'

type TextFieldProps = React.ComponentProps<typeof StyledTextField> & {
  label?: string
}

export const TextField: React.FC<TextFieldProps> = forwardRef(
  ({ label, ...props }, ref) => {
    const [focus, setFocus] = useState(false)

    return (
      <Container focus={focus}>
        {label && <label htmlFor={props.name}>{label}</label>}
        <StyledTextField
          {...props}
          ref={ref}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      </Container>
    )
  }
)
