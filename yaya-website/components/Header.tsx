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
  BackgroundImage,
  Button,
} from "@mantine/core";
import classes from "./Header.module.css";

export function Header() {
  return (
    <Flex justify={"space-between"} px={50} py={45} align={"center"}>
      <Stack>
        <Text size="lg" c={"#293D46"} fw={600}>
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
            About Us
          </Text>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Our Portfolio
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
