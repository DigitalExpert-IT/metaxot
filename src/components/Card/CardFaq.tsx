import {
  Card,
  CardProps,
  Collapse,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type TProps = CardProps & {
  questions?: string;
  answers?: string;
};

export const CardFaq = (props: TProps) => {
  const { questions, answers, ...rest } = props;
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();

  return (
    <Card
      overflow={"hidden"}
      onClick={onToggle}
      cursor={"pointer"}
      bg={"whiteAlpha.300"}
      rounded={"3xl"}
      {...rest}
    >
      <HStack
        py={"8"}
        px={"10"}
        justify={"space-between"}
        bg={isOpen ? "yellowMetaxot.500" : ""}
      >
        <Text>{t(`${questions}`)}</Text>
        <Text>{isOpen ? "-" : "+"}</Text>
      </HStack>
      <Collapse in={isOpen ? true : false} animateOpacity>
        <Text py={"8"} px={"10"} fontSize={"sm"}>
          {t(`${answers}`)}
        </Text>
      </Collapse>
    </Card>
  );
};
