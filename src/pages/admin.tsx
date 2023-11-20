import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useToast,
  Wrap,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { LayoutMain } from "components";
import { ButtonShadow } from "components/Button";
import { fromBn } from "evm-bn";
import { useAdmin } from "hooks/admin/useAdmin";
import { useListPreMintQuery } from "hooks/market";
import { values } from "lodash";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { FaTrash, FaUpload } from "react-icons/fa";

const Admin = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { data } = useListPreMintQuery();
  const route = useRouter();
  const {
    data: dataMetadata,
    isLoading,
    isFetch,
    refetch,
    isError,
    error,
    createMutation,
    updateMutation,
  } = useAdmin();

  const onSubmit = (data: any) => {
    createMutation(data);
    refetch();
  };

  const filterMetadataAlreadyListed = useMemo(() => {
    if (data) {
      return dataMetadata
        ?.map(e => {
          const exist = data.find(j => j.uuid === e.uuid);
          if (exist) return;
          return e;
        })
        .filter(k => k !== undefined)
        .reverse();
    }
  }, [data, dataMetadata]);

  return (
    <LayoutMain>
      <Stack>
        <Heading as="h1">Admin</Heading>
      </Stack>

      <Stack py="2" my="5">
        <Heading as="h2">Already Listed Pre Mint on Contract</Heading>
        {data === undefined ? (
          <Text>Loading . . .</Text>
        ) : (
          <Wrap spacing={"5"}>
            {data?.map((e: any, idx: number) => {
              return (
                <WrapItem
                  w={{ md: "23%", base: "43%" }}
                  key={idx}
                  onClick={() => route.push(`/market/${idx}`)}
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.01) ",
                    transition: "0.1s",
                  }}
                >
                  <Stack bg="whiteAlpha.300" rounded="lg" overflow="hidden">
                    <Image src={e.picture} alt="caracter" />
                    <Stack p="3">
                      <Text fontSize={"xl"}>{e.name}</Text>
                      <Stack direction={"row"} justify="space-between">
                        <Stack>
                          <Text color={"whiteAlpha.700"} fontSize="xs">
                            Price
                          </Text>
                          <Text fontWeight={"800"}>
                            {fromBn(e.price, 9)} XPC
                          </Text>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>
                </WrapItem>
              );
            })}
          </Wrap>
        )}
      </Stack>

      <Button colorScheme="metaxot" my={5} onClick={onOpen}>
        Add List
      </Button>

      <Stack py="2" my="5">
        <Heading as="h2">Metadata Off Chain</Heading>
        {filterMetadataAlreadyListed === undefined ? (
          <Text>Loading . . .</Text>
        ) : (
          <Wrap spacing={"5"}>
            {filterMetadataAlreadyListed?.map((e, idx: number) => {
              return (
                <WrapItem
                  w={{ md: "23%", base: "43%" }}
                  key={idx}
                  onClick={() => route.push(`/api/nft/${e?.uuid}`)}
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.01) ",
                    transition: "0.1s",
                  }}
                >
                  <Stack bg="blackAlpha.400" rounded="lg" overflow="hidden">
                    <Image src={e?.image} alt="caracter" />
                    <Stack p="3">
                      <Text fontSize={"xl"}>{e?.name}</Text>
                      <Stack direction={"row"} justify="space-between">
                        <Stack>
                          {Object.keys(e ?? {}).map((r, o) => {
                            if (r === "attributes" || r === "id") return;
                            return (
                              <Text
                                color={"whiteAlpha.700"}
                                fontSize="xs"
                                key={o}
                              >
                                {r}
                              </Text>
                            );
                          })}
                        </Stack>
                        <Stack>
                          {Object.values(e ?? {}).map((p, q) => {
                            if (typeof p === "string") {
                              return (
                                <Text key={q} noOfLines={1}>
                                  {p}
                                </Text>
                              );
                            }
                          })}
                        </Stack>
                      </Stack>
                      <Stack>
                        <Button colorScheme="facebook">
                          <Icon as={FaUpload} mx={2}></Icon>
                          <span>Seed To Premint list</span>
                        </Button>
                        <Button colorScheme="red">
                          <Icon as={FaTrash} mx={2}></Icon>
                          <span>Delete</span>
                        </Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </WrapItem>
              );
            })}
          </Wrap>
        )}
      </Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalContent>
            <ModalHeader>Add new list premint</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  {...register("name", { required: true, min: 1 })}
                />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Input
                  type="text"
                  {...register("description", { required: true, min: 1 })}
                />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Image</FormLabel>
                <Input
                  type="text"
                  {...register("image", { required: true, min: 1 })}
                />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>External URL</FormLabel>
                <Input
                  type="text"
                  {...register("external_url", { required: true, min: 1 })}
                />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Youtube Url</FormLabel>
                <Input type="text" {...register("youtube_url")} />
                <FormHelperText></FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Animation Url</FormLabel>
                <Input type="text" {...register("animation_url")} />
                <FormHelperText></FormHelperText>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
              <ButtonShadow mr="3" type="submit" isLoading={isFetch}>
                gasak
              </ButtonShadow>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </LayoutMain>
  );
};

export default Admin;
