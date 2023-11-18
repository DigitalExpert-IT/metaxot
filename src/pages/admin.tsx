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
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { LayoutMain } from "components";
import { ButtonShadow } from "components/Button";
import { fromBn } from "evm-bn";
import { useListPreMintQuery } from "hooks/market";
import { useRouter } from "next/router";
import { useState } from "react";

const Admin = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { data } = useListPreMintQuery();
  const route = useRouter();

  return (
    <LayoutMain>
      <Stack>
        <Heading as="h1">Admin</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          perspiciatis laboriosam quam dolore facere voluptatum quos maxime
          harum saepe. Accusantium dolores exercitationem deserunt consequuntur
          alias quis perspiciatis porro, ea quia!
        </Text>
      </Stack>

      <Button colorScheme="metaxot" my={1} onClick={onOpen}>
        Add List
      </Button>

      <Stack py="2">
        {data === undefined ? (
          <Text>waiting tresno jalaran soko kulino</Text>
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new list premint</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>UUID</FormLabel>
              <Input type="text" />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <Input type="text" />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <Input type="text" />
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Is Rental</FormLabel>
              <Checkbox>Rental ?</Checkbox>
              <FormHelperText></FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
            <ButtonShadow mr="3">gasak</ButtonShadow>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </LayoutMain>
  );
};

export default Admin;
