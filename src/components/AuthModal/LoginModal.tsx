import { useRef } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalOverlay,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth, { ILoginForm } from "hooks/metaxotGame/useAuth";

export default NiceModal.create(() => {
  const modal = useModal();
  const submitRef = useRef<any>(null);
  const { authenticate, isLoading } = useAuth();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = data => {
    authenticate(data).then(() => modal.hide());
  };

  const handleModalClose = () => {
    modal.hide();
  };

  return (
    <Modal
      isOpen={modal.visible}
      onClose={handleModalClose}
      initialFocusRef={submitRef}
    >
      <ModalOverlay />
      <ModalContent py={16}>
        <ModalHeader mb={8}>
          <Text fontSize={"4xl"}>Login</Text>
          <Text>with game account</Text>
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" {...register("email")} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              ref={submitRef}
              type="submit"
              colorScheme="blue"
              mr={3}
              isLoading={isLoading}
            >
              Login
            </Button>
            <Button onClick={handleModalClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
});
