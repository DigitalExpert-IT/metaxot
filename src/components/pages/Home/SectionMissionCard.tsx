import { Box, Card, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { CardMissionPromotion } from "components/Card";
import React from "react";

export const SectionMissionCard = () => {
  return (
    <Card
      my={"20"}
      mx={"auto"}
      bg={"transparent"}
      rounded={"2xl"}
      overflow={"hidden"}
      maxW={{ base: "md", lg: "full" }}
    >
      <Card bg={"whiteAlpha.300"} rounded={"none"} px={{ base: "4", xs: "8", sm: "16" }}>
        <SimpleGrid columns={{ base: 0, lg: 3 }} gap={"5"} >
          <VStack pt={"28"} pb={"16"} mx={"auto"} alignItems={"start"} w={"max-content"}>
            <Heading mb={"4"} fontSize={"5xl"} fontWeight={"extrabold"}>
              5,3 B+
            </Heading>
            <Text>Internet User</Text>
          </VStack>
          <VStack pt={"28"} pb={"16"} mx={"auto"} alignItems={"start"} w={"max-content"}>
            <Heading mb={"4"} fontSize={"5xl"} fontWeight={"extrabold"}>
              + 6 %
            </Heading>
            <Text>Internet User <br />Growth</Text>
          </VStack>
          <VStack pt={"28"} pb={"16"} mx={"auto"} alignItems={"start"} w={"max-content"}>
            <Heading mb={"4"} fontSize={"5xl"} fontWeight={"extrabold"}>
              $ 804 B
            </Heading>
            <Text>Value Of Existing <br />Digital Product</Text>
          </VStack>
        </SimpleGrid>
      </Card>
      <SimpleGrid columns={{ base: 0, lg: 3 }} gap={"1"} mt={"1"} >
        <Card bg={"whiteAlpha.300"} rounded={"none"} px={{ base: "4", xs: "8", sm: "16" }}>
          <VStack pt={"28"} pb={"16"} mx={"auto"} alignItems={"start"}>
            <Heading mb={"4"} fontSize={"2xl"} fontWeight={"extrabold"}>
              Big Opportunity
            </Heading>
            <Text>Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus voluptas qui sapiente libero. Est cumque beatae qui.</Text>
          </VStack>
        </Card>
        <Card bg={"whiteAlpha.300"} rounded={"none"} px={{ base: "4", xs: "8", sm: "16" }}>
          <VStack pt={"28"} pb={"16"} mx={"auto"} alignItems={"start"}>
            <Heading mb={"4"} fontSize={"2xl"} fontWeight={"extrabold"}>
              Future Value
            </Heading>
            <Text>Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus voluptas qui sapiente libero. Est cumque beatae qui.</Text>
          </VStack>
        </Card>
        <Card bg={"whiteAlpha.300"} rounded={"none"} px={{ base: "4", xs: "8", sm: "16" }}>
          <VStack pt={"28"} pb={"16"} mx={"auto"} alignItems={"start"}>
            <Heading mb={"4"} fontSize={"2xl"} fontWeight={"extrabold"}>
              New Technology
            </Heading>
            <Text>Lorem ipsum dolor sit amet. Et corporis iste nam necessitatibus voluptas qui sapiente libero. Est cumque beatae qui.</Text>
          </VStack>
        </Card>
      </SimpleGrid>
    </Card>
  );
};
