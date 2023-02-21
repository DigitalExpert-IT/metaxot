import {
  Button,
  Collapse,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { t } from "i18next";
import { Trans } from "react-i18next";

export const SectionSystem = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack align={"center"} spacing={8} my={"8"}>
      <Button variant={"unstyled"} onClick={onToggle}>
        <Text borderBottom={"1px"}>
          {t("pages.download.systemRequirements")}
        </Text>
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <SimpleGrid
          w={"max-content"}
          my={"10"}
          columns={{ base: 1, md: 2 }}
          gap={{ base: 8, lg: 20 }}
          justifyItems={"center"}
        >
          <Stack
            px={{ base: "6", md: "10", lg: "20" }}
            py={{ base: "6", md: "8", lg: "12" }}
            w={"full"}
            maxW={"md"}
            rounded={"3xl"}
            bgGradient={"linear(to-tl, blackAlpha.500, whiteAlpha.400)"}
          >
            <Text align={"center"} mb={{ base: 6, md: 10 }}>
              <Trans
                components={{ br: <br /> }}
                i18nKey={"pages.download.minimum.title"}
              />
            </Text>
            <Text>
              <Trans
                components={{ br: <br /> }}
                i18nKey={"pages.download.minimum.detail"}
              />
            </Text>
          </Stack>
          <Stack
            px={{ base: "6", md: "10", lg: "20" }}
            py={{ base: "6", md: "8", lg: "12" }}
            w={"full"}
            maxW={"md"}
            rounded={"3xl"}
            bgGradient={"linear(to-tl, blackAlpha.500, whiteAlpha.400)"}
            fontWeight={"black"}
          >
            <Text align={"center"} mb={{ base: 6, md: 10 }}>
              <Trans
                components={{ br: <br /> }}
                i18nKey={"pages.download.recommended.title"}
              />
            </Text>
            <Text>
              <Trans
                components={{ br: <br /> }}
                i18nKey={"pages.download.recommended.detail"}
              />
            </Text>
          </Stack>
        </SimpleGrid>
      </Collapse>
      <Select
        maxW={"md"}
        rounded={"xl"}
        bg={"whiteAlpha.200"}
        placeholder={`MacOs, Linux  ${t("pages.download.andOtherVersion")}`}
      />
    </Stack>
  );
};
