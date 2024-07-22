import { Stack, Text, Flex } from "@mantine/core";
import React from "react";
import FinishedProjectCard from "../ProjectCard/FinishedProjectCard";

export default function FinishedProjects() {
  return (
    <Stack px={50} py={50} bg={"#FBF9F9"}>
      <Text size="16px" c={"gray"}>
        {" "}
        ALL
      </Text>
      <Flex>
        <FinishedProjectCard />
      </Flex>
    </Stack>
  );
}
