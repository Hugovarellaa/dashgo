import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface Props extends ChakraInputProps {
  name: string
  label?: string
  error: FieldError | undefined
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor="email">{label} </FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        size="lg"
        variant="filled"
        ref={ref}
        _hover={{
          backgroundColor: 'gray.900',
        }}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
