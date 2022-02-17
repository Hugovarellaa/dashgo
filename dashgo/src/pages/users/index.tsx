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
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Box>
        <Header />

        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="10">
          <Sidebar />

          <Box
            flex="1"
            borderRadius={8}
            background="gray.800"
            p={["4", "6", "8"]}
          >
            <Flex mb="8" justify="space-between" align="center">
              <Heading fontSize="lg" fontWeight="normal">
                Usuários
              </Heading>
              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  mr="4"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
                </Button>
              </Link>
            </Flex>

            <Table colorScheme="whiteAlpha">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th>Usuário</Th>
                  {isWiderVersion && <Th>Data de cadastro</Th>}
                  {isWiderVersion && <Th width="8"></Th>}
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td px={["4", "4", "6"]}>
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
                  {isWiderVersion && <Td>04 de Abril, 2021</Td>}
                  {isWiderVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="17" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  )}
                </Tr>

                <Tr>
                  <Td px={["4", "4", "6"]}>
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
                  {isWiderVersion && <Td>04 de Abril, 2021</Td>}
                  {isWiderVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="17" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  )}
                </Tr>

                <Tr>
                  <Td px={["4", "4", "6"]}>
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
                  {isWiderVersion && <Td>04 de Abril, 2021</Td>}
                  {isWiderVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="17" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  )}
                </Tr>

                <Tr>
                  <Td px={["4", "4", "6"]}>
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
                  {isWiderVersion && <Td>04 de Abril, 2021</Td>}
                  {isWiderVersion && (
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="17" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  )}
                </Tr>
              </Tbody>
            </Table>
            <Pagination />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
