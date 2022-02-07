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
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Siderbar } from "../../components/Siderbar";

export default function UserList() {
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box flex="1" borderRadius={8} background="gray.800" p="8">
          <Flex marginBottom="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="22" />}
              >
                Cria novo usuário
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
                      hugovarella@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWiderVersion && <Td>04 de Abril. 2021</Td>}
                {isWiderVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>

              {/* Copia 1 */}
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarella@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWiderVersion && <Td>04 de Abril. 2021</Td>}
                {isWiderVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              {/* Copia 2 */}

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarella@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWiderVersion && <Td>04 de Abril. 2021</Td>}
                {isWiderVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
              {/* Copia 3 */}

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Hugo Alves Varella</Text>
                    <Text fontSize="sm" color="gray.300">
                      hugovarella@gmail.com
                    </Text>
                  </Box>
                </Td>

                {isWiderVersion && <Td>04 de Abril. 2021</Td>}

                {isWiderVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="18" />}
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
  );
}
