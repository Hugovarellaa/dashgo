import { Header } from '@/src/components/Header'
import { Sidebar } from '@/src/components/Sidebar'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box flex={1} borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex
            marginBottom="8"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading size="lg" fontWeight="bold">
              Usuários
            </Heading>

            <Button
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              colorScheme="green"
              as="a"
              fontSize="sm"
              cursor="pointer"
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX="6" color="gray.300" width="8">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de Cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text>Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarellaa@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>06 de Fevereiro, 2023</Td>
                <Td>
                  <Button
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    colorScheme="yellow"
                    as="a"
                    fontSize="sm"
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text>Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarellaa@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>06 de Fevereiro, 2023</Td>
                <Td>
                  <Button
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    colorScheme="yellow"
                    as="a"
                    fontSize="sm"
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="green" />
                </Td>
                <Td>
                  <Box>
                    <Text>Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarellaa@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>06 de Fevereiro, 2023</Td>
                <Td>
                  <Button
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    colorScheme="yellow"
                    as="a"
                    fontSize="sm"
                    cursor="pointer"
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
