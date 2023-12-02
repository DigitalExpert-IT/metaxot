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
  const { authenticate, isLoading } = useAuth();
  const { register, handleSubmit } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = data => {
    authenticate(data).then(() => modal.hide());
  };

  const handleModalClose = () => {
    modal.hide();
  };

  return (
    <Modal isOpen={modal.visible} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text>Login</Text>
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
