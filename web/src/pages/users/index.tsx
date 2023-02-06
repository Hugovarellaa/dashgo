import { Header } from '@/src/components/Header'
import { Pagination } from '@/src/components/pagination'
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
  useBreakpointValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
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

            <Link href="/users/create">
              <Button
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                colorScheme="pink"
                as="a"
                fontSize="sm"
                cursor="pointer"
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th paddingX={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="green" />
                </Th>
                <Th>Usuário</Th>
                <Th>{isWideVersion && <Text>Data de Cadastro</Text>}</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td paddingX={['4', '4', '6']}>
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
                <Td>{isWideVersion && <Text>06 de Fevereiro, 2023</Text>}</Td>
                <Td>
                  {isWideVersion && (
                    <Button
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      colorScheme="purple"
                      as="a"
                      fontSize="sm"
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td paddingX={['4', '4', '6']}>
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
                <Td>{isWideVersion && <Text>06 de Fevereiro, 2023</Text>}</Td>
                <Td>
                  {isWideVersion && (
                    <Button
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      colorScheme="purple"
                      as="a"
                      fontSize="sm"
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td paddingX={['4', '4', '6']}>
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
                <Td>{isWideVersion && <Text>06 de Fevereiro, 2023</Text>}</Td>
                <Td>
                  {isWideVersion && (
                    <Button
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      colorScheme="purple"
                      as="a"
                      fontSize="sm"
                      cursor="pointer"
                    >
                      Editar
                    </Button>
                  )}
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
