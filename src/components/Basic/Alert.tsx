import { useRef } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  ModalOverlay,
} from "@chakra-ui/react";
import { t } from "i18next";

type IAlertOptions = {
  text: string;
  type?: "alert" | "confirm";
};

type IAlert = (options: IAlertOptions) => Promise<unknown>;

const AlertModal = NiceModal.create((props: IAlertOptions) => {
  const modal = useModal();
  const cancelRef = useRef<any>(null);
  const { text } = props;

  const handleModalClose = () => {
    modal.hide();
  };

  return (
    <Modal
      size={"2xl"}
      isOpen={modal.visible}
      onClose={handleModalClose}
      initialFocusRef={cancelRef}
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={"xl"}
        backgroundColor={"#3E4048"}
        border={"1px solid #73707D"}
        py={8}
      >
        <ModalCloseButton />
        <ModalBody>
          <Text color={"brand.500"}>{text}</Text>
        </ModalBody>

        <ModalFooter pb={0}>
          <Button colorScheme="red" w={"100%"}>
            {t("common.cancel")}
          </Button>
          <Button ref={cancelRef} type="submit" colorScheme="brand" w={"100%"}>
            {t("common.")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

const alert: IAlert = options => NiceModal.show(AlertModal, options);

export default alert;
