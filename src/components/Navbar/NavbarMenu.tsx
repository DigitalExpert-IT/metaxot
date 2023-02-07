import {
  Box,
  Icon,
  Text,
  Flex,
  Stack,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { INavigation } from "constant/navigation";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface NavItemProps {
  data: INavigation[];
}

export const NavbarMenu: React.FC<NavItemProps> = props => {
  const { data } = props;
  const { t } = useTranslation();

  return (
    <>
      {data.map((item, idx) => (
        <Box key={idx} w="full">
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link href={item.href ?? "#"} key={idx}>
                <Text>{t(`common.navigation.${item.name}`)}</Text>
              </Link>
            </PopoverTrigger>

            {item.children && (
              <PopoverContent
                border="0"
                boxShadow="xl"
                bg="gray.800"
                p="4"
                rounded="xl"
                maxW="xs"
              >
                <Stack>
                  {item.children.map((obj, id) => (
                    <Link key={id} href={obj.link}>
                      <Stack
                        direction="row"
                        align="center"
                        role="group"
                        rounded="md"
                        p="2"
                        _hover={{ bg: "brand.300" }}
                      >
                        <Text
                          transition="all .3s ease"
                          _groupHover={{ color: "valhalla.100" }}
                        >
                          {t(`common.navigation.${obj.title}`)}
                        </Text>
                        <Flex
                          transition="all .3s ease"
                          transform="translateX(-10px)"
                          _groupHover={{
                            opacity: "100%",
                            transform: "translateX(0)",
                          }}
                          justify={"flex-end"}
                          align={"center"}
                          flex={1}
                        >
                          <Icon
                            color="valhalla.500"
                            w={5}
                            h={5}
                            as={ChevronRightIcon}
                          />
                        </Flex>
                      </Stack>
                    </Link>
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </>
  );
};
