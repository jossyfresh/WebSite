import { Stack, Text, Flex } from "@mantine/core";
import React from "react";
import CurrentProjectCard from "../ProjectCard/CurrentProjectCard";

export default function CurrentProjects() {
  return (
    <Stack px={50} py={50}>
      <Text size="16px" c={"gray"}>
        {" "}
        Current Projects
      </Text>
      <Flex>
        <CurrentProjectCard />
      </Flex>
    </Stack>
  );
}
