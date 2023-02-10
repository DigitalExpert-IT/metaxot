import { Box, Card, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export const SectionKeyFeature = () => {
  return (
    <Box>
      <Text textAlign={"center"} textColor={"yellowMetaxot.500"}>KEY FEATURES</Text>
      <Heading my={"4"} textAlign={"center"} fontWeight={"black"} size={{ base: "lg", sm: "xl", md: "3xl" }}>ESSENTIAL OF METAXOT</Heading>
      <SimpleGrid columns={3} my={"20"}>
        <Card bg={"whiteAlpha.300"} minH={"3xl"} rounded={"5xl"}>
          <div>SectionKeyFeature</div>
        </Card>
        <Box>
        </Box>
      </SimpleGrid>
    </Box>
  )
}
