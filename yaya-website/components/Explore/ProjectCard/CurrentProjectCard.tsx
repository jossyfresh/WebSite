import { Flex, Image, Stack, Text } from "@mantine/core";
import React from "react";
export default function CurrentProjectCard() {
  return (
    <Stack gap={5}>
      <Stack
        bg={"white"}
        pos={"relative"}
        style={{
          borderRadius: "3%",
        }}
      >
        <Flex
          w={400}
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: "3%",
          }}
        >
          <Stack w={"60%"} px={15} py={15} gap={40}>
            <Stack gap={10}>
              <Text size="lg" fw={600} c={"dark"}>
                Lorem Ipsum
              </Text>
              <Text
                size="14px"
                c={"dark"}
                style={{
                  lineHeight: "1.3",
                }}
              >
                Lorem ipsum dolor sit amet consectetursit amet consectetur.
              </Text>
            </Stack>
            <Stack gap={0}>
              <Text size="sm" c={"dark"}>
                Start Date
              </Text>
              <Text size="xs" c={"gray"}>
                10/12/2024
              </Text>
            </Stack>
          </Stack>
          <Stack w={"40%"}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: "3%",
                borderBottomRightRadius: "3%",
              }}
              src="/images/best2.png"
              alt="project"
            />
          </Stack>
        </Flex>
        <Stack
          w={"50%"}
          h={200}
          bottom={0}
          pos={"absolute"}
          style={{
            transform: "rotateY(180deg)",
            borderBottom: "3px solid #69C647",
            borderBottomRightRadius: "3%",
          }}
        ></Stack>
      </Stack>
      <Stack px={30}>
        <Text c={"#69C647"} size="sm">
          50% Complete
        </Text>
      </Stack>
    </Stack>
  );
}
