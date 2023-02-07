import { Text, VStack } from "@chakra-ui/react";
import { FooterNavigation } from "constant/footer";
import Link from "next/link";
import React from "react";

export type Props = {
  data: FooterNavigation;
};

export const FooterNav = (props: Props) => {
  const { label, children } = props.data;
  return (
    <VStack
      w={{ base: "max-content", xs: "24", lg: "max-content" }}
      align={"start"}
    >
      <Text fontSize={"md"} fontWeight={"semibold"}>
        {label}
      </Text>
      <VStack alignItems={"start"} mt={"4"}>
        {children?.map((row, idx) => (
          <Link href={row.href ?? "#"} key={idx}>
            <Text>{row.name}</Text>
          </Link>
        ))}
      </VStack>
    </VStack>
  );
};
