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
    <Stack>
      <Flex justify={"space-between"} px={50} py={40}>
        <Stack>
          <Text size="lg" c={"#17A7B8"} fw={700}>
            YAYA Construction
          </Text>
          <Text size="md" w={250} c={"#696A69"}>
            You will find your next home loan value you prefer
          </Text>
          <Flex></Flex>
        </Stack>
        <Stack>
          <Text fw={600} c={"black"}>
            Resource
          </Text>
          <Stack>
            <Text fw={600} c={"#696A69"}>
              Our Agents
            </Text>
            <Text fw={600} c={"#696A69"}>
              Member Stories
            </Text>
            <Text fw={600} c={"#696A69"}>
              Video
            </Text>
            <Text fw={600} c={"#696A69"}>
              Free Trial
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Text fw={600} c={"black"}>
            Company
          </Text>
          <Stack>
            <Text fw={600} c={"#696A69"}>
              Our Agents
            </Text>
            <Text fw={600} c={"#696A69"}>
              Member Stories
            </Text>
            <Text fw={600} c={"#696A69"}>
              Video
            </Text>
            <Text fw={600} c={"#696A69"}>
              Free Trial
            </Text>
          </Stack>
        </Stack>
        <Stack>
          <Text fw={600} c={"black"}>
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
        <Text c={"#696A69"}>
          Copyright YAYAConstruction.com, All Rights Reserved
        </Text>
      </Stack>
    </Stack>
  );
}
