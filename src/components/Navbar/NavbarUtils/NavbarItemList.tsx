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
import React, { useContext } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { INavigation } from "constant/navigation";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { ThemeContext } from "./NavbarMain";

interface NavItemProps {
  data: INavigation[];
}

export const NavbarItemList: React.FC<NavItemProps> = props => {
  const { data } = props;
  const { t } = useTranslation();
  const styles = useContext(ThemeContext);
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
              <PopoverContent {...styles.dropDownList}>
                <Stack>
                  {item.children.map((obj, id) => (
                    <Link key={id} href={obj.link}>
                      <Stack {...styles.dropDownItem}>
                        <Text _groupHover={{ color: "valhalla.100" }}>
                          {t(`common.navigation.${obj.title}`)}
                        </Text>
                        <Flex {...styles.dropCarret}>
                          <Icon {...styles.dropIcon} as={ChevronRightIcon} />
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
