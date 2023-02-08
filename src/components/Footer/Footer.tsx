import {
  Box,
  Container,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Wrap,
} from "@chakra-ui/react";
import { FOOTER_NAVIGATION, SOSMED_FOOTER } from "constant/footer";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FooterNav, FooterDropEmail } from ".";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box bg={"gray.700"}>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={"12"}
          px={{ base: "4", md: "0" }}
          py={"14"}
        >
          <Box maxW={"sm"} mx={{ base: "auto", md: 0 }}>
            <Text fontSize={"4xl"} fontWeight={"black"}>
              METAXOT
            </Text>
            <FooterDropEmail />
          </Box>
          <Wrap
            pt={"4"}
            justify={{ base: "space-between", md: "end" }}
            spacing={8}
            w={"full"}
            mx={{ base: "auto", md: 0 }}
            maxW={{ base: "sm", lg: "full" }}
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
