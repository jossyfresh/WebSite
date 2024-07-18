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
  TextInput,
} from "@mantine/core";

export function Footer() {
  return (
    <Stack bg={"#2B3D40"}>
      <Flex justify={"space-between"} px={50} py={40}>
        <Stack>
          <Text size="lg" c={"white"} fw={700}>
            YAYA Construction
          </Text>
          <Text size="md" w={250} fw={100} c={"white"}>
            You will find your next home loan value you prefer
          </Text>
          <Flex></Flex>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Resource
          </Text>
          <Stack>
            <Text fw={100} c={"white"}>
              Our Agents
            </Text>
            <Text fw={100} c={"white"}>
              Member Stories
            </Text>
            <Text fw={100} c={"white"}>
              Video
            </Text>
            <Text fw={100} c={"white"}>
              Free Trial
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Company
          </Text>
          <Stack>
            <Text fw={100} c={"white"}>
              Our Agents
            </Text>
            <Text fw={100} c={"white"}>
              Member Stories
            </Text>
            <Text fw={100} c={"white"}>
              Video
            </Text>
            <Text fw={100} c={"white"}>
              Free Trial
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Get in Touch
          </Text>
          <TextInput placeholder="Email" />
        </Stack>
      </Flex>
      <Stack
        align="center"
        style={{
          borderTop: "1px solid #E0E0E0",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Text c={"white"}>
          Copyright YAYAConstruction.com, All Rights Reserved
        </Text>
      </Stack>
    </Stack>
  );
}
