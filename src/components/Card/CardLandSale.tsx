import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Trans, useTranslation } from "react-i18next";
import { LabelCard, TitleCard } from "./CardText";

type Features = {
  balance?: string;
  label?: string;
  features?: string;
  location?: string;
  section?: string;
};

type TProps = {
  data: Features;
};

export const CardLandSale = (props: TProps) => {
  const { balance, label, features, location, section } = props.data;
  const { t } = useTranslation();
  return (
    <Stack
      py={"10"}
      px={{ base: "4", xs: "8" }}
      my={"4"}
      minH={"lg"}
      maxW={"sm"}
      bg={"whiteAlpha.300"}
    >
      <Flex alignItems={"end"} justify={"space-between"} mb={"12"}>
        <Text fontSize={{ base: "xl", sm: "2xl" }} fontWeight={"black"}>
          {t(`${label}`)}
        </Text>
        <HStack
          maxW={"max-content"}
          alignItems={"center"}
          mb={"1.5"}
          fontSize={"sm"}
          color={"#1AD021"}
        >
          <Image src={"/assets/icon/point.png"} alt={"Card Point"} h={"4"} />
          <Text>{t("common.available")}</Text>
        </HStack>
      </Flex>
      <Stack
        p={"7"}
        gap={"3"}
        rounded={"xl"}
        border={"1px"}
        placeItems={"start"}
        fontSize={"sm"}
        direction={{ base: "column", xs: "row" }}
      >
        <Box w={{ base: "full", xs: "70%" }}>
          <TitleCard>
            {balance} <Trans i18nKey={"common.lotLeft"} />
          </TitleCard>
          <LabelCard>{t("common.features")}</LabelCard>
          <Text>{t(`${features}`)}</Text>
        </Box>
        <Box>
          <LabelCard>{t("common.location")}</LabelCard>
          <Text>{t(`${location}`)}</Text>
          <LabelCard>{t("common.section")}</LabelCard>
          <Text>{t(`${section}`)}</Text>
        </Box>
      </Stack>
    </Stack>
  );
};
