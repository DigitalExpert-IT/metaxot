import {
  Box,
  Button,
  Container,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { FOOTER_NAVIGATION, SOSMED_FOOTER } from "constant/footer";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import { FooterNav } from "./FooterNav";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box bg={"gray.700"}>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={"12"}
          px={"4"}
          py={"14"}
        >
          <Box maxW={"sm"} mx={{ base: "auto", md: 0 }}>
            <Text fontSize={"4xl"} fontWeight={"black"}>
              METAXOT
            </Text>
            <VStack spacing={4} align={"start"} mt={"4"}>
              <Text>{t("common.footer.dropYourEmail")}</Text>
              <Input
                type={"email"}
                variant={"outline"}
                size="sm"
                rounded="xl"
              />
              <Button
                colorScheme={"metaxot"}
                size="sm"
                textTransform={"capitalize"}
              >
                {t("common.send")}
              </Button>
            </VStack>
          </Box>
          <Wrap
            ml={"8"}
            pt={"4"}
            px={{ base: "4", lg: "0" }}
            justify={{ base: "center", md: "end" }}
            alignItems={"start"}
            spacing={8}
            w={"full"}
            mx={{ base: "auto", md: 0 }}
          >
            {FOOTER_NAVIGATION.map((row, i) => (
              <FooterNav key={i} data={row} />
            ))}
          </Wrap>
          <HStack spacing={{ base: "4", sm: "8" }} mx={{ base: "auto", md: 0 }}>
            {SOSMED_FOOTER.map((row, i) => (
              <Box key={i}>
                <Link href={row.href} target="_blank">
                  <Image src={row.icon} alt={row.href} h={"7"} />
                </Link>
              </Box>
            ))}
          </HStack>
          <Box textAlign={{ base: "center", md: "end" }}>
            <Text>
              {new Date().getFullYear() +
                " Metaxot. " +
                t("common.footer.allRightsReserved")}
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
