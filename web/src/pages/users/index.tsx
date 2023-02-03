import { Header } from '@/src/components/Header'
import { Pagination } from '@/src/components/Pagination'
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

export default function Userslist() {
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

        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex
            marginBottom="8"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="lg" fontWeight="normal">
              Listagem de usuários
            </Heading>
            <Button
              as="a"
              colorScheme="pink"
              size="sm"
              fontSize="sm"
              leftIcon={<Icon as={RiAddLine} fontSize="18" />}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data cadastro</Th>
                <Th width="4"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarellaa@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>03 de Fevereiro, 2023</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    size="sm"
                    fontSize="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarellaa@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>03 de Fevereiro, 2023</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    size="sm"
                    fontSize="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

              <Tr>
                <Td paddingX="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarellaa@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>03 de Fevereiro, 2023</Td>
                <Td>
                  <Button
                    as="a"
                    colorScheme="purple"
                    size="sm"
                    fontSize="sm"
                    leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
