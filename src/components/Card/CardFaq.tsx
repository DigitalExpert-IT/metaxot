import { Card, CardProps, Collapse, HStack, Text } from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import { useTranslation } from "react-i18next";

type TProps = CardProps & {
  questions?: string;
  answers?: string;
  isOpen?: boolean;
  onClick?: MouseEventHandler | undefined;
};

export const CardFaq = (props: TProps) => {
  const { questions, answers, isOpen, onClick, ...rest } = props;
  const { t } = useTranslation();

  return (
    <Card
      overflow={"hidden"}
      onClick={onClick}
      cursor={"pointer"}
      bg={"whiteAlpha.300"}
      rounded={"3xl"}
      {...rest}
    >
      <HStack
        py={"8"}
        px={{ base: "6", md: "10" }}
        justify={"space-between"}
        bg={isOpen ? "yellowMetaxot.500" : ""}
      >
        <Text fontSize={{ base: "sm", md: "md" }}>{t(`${questions}`)}</Text>
        <Text>{isOpen ? "-" : "+"}</Text>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Text py={"8"} px={"10"} fontSize={"sm"}>
          {t(`${answers}`)}
        </Text>
      </Collapse>
    </Card>
  );
};
