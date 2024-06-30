import { useState } from "react";
import {
  Container,
  Anchor,
  Group,
  Burger,
  Box,
  Flex,
  Stack,
  Text,
} from "@mantine/core";

export function Header() {
  return (
    <Flex justify={"space-between"} px={50} py={40}>
      <Stack>
        <Text size="lg" c={"#17A7B8"} fw={700}>
          YAYA Construction
        </Text>
      </Stack>
      <Flex
        gap={50}
        style={{
          zIndex: 1000,
        }}
      >
        <Stack>
          <Text fw={600} c={"white"}>
            Home
          </Text>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Explore
          </Text>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            About Us
          </Text>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Contact Us
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
