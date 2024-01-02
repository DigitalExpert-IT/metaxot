import React, { useRef, useState } from "react";
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
  text: {
    title?: string;
    content?: string;
    confirm?: string;
    cancel?: string;
  };
  body?: React.ReactElement;
  type?: "alert" | "confirm";
};

type IAlert = (options: IAlertOptions) => Promise<unknown>;

const AlertModal = NiceModal.create((props: IAlertOptions) => {
  const modal = useModal();
  const cancelRef = useRef<any>(null);
  const { text, body } = props;

  const handleModalClose = () => {
    modal.hide();
  };

  const handleModalConfirm = async () => {
    modal.resolve(true);
    modal.hide();
  };

  return (
    <Modal
      size={"md"}
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
        <ModalBody textAlign={"center"} color={"white"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} mb={4}>
            {text?.title}
          </Text>
          {body ? body : <Text>{text?.content}</Text>}
        </ModalBody>

        <ModalFooter pb={0} gap={8}>
          <Button
            ref={cancelRef}
            variant={"outline"}
            onClick={handleModalClose}
          >
            {text?.cancel ? text.cancel : t("common.cancel")}
          </Button>
          <Button
            type="submit"
            colorScheme="brand"
            onClick={handleModalConfirm}
          >
            {text?.confirm ? text.confirm : "Ok"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

const alert: IAlert = options => NiceModal.show(AlertModal, options);

export default alert;
