import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

interface Props extends ChakraInputProps {
  name: string
  label?: string
}

export function Input({ name, label, ...rest }: Props) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="email">{label} </FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        backgroundColor="gray.900"
        size="lg"
        variant="filled"
        _hover={{
          backgroundColor: 'gray.900',
        }}
        {...rest}
      />
    </FormControl>
  )
}
