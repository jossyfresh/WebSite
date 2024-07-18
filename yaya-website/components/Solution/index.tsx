import { Button, Flex, Stack, Text } from "@mantine/core";
import React from "react";

export default function Solution() {
  return (
    <Flex px={70} justify={"space-between"} py={50}>
      <Stack w={"50%"} gap={30}>
        <Stack gap={10}>
          <Text size="40px" fw={600} c={"#2B3D40"}>
            Providing Solution
          </Text>
          <Text size="40px" fw={600} c={"#2B3D40"}>
            That Meets Your Needs.
          </Text>
        </Stack>
        <Text
          size="15px"
          c={"#828E8E"}
          fw={300}
          fs={"inherit"}
          style={{
            lineHeight: 1.4,
          }}
        >
          Ascending Heights Where Every Sunshine Unveilsa Spectacular Visto,
          Offers an Oasis of Tranquility and Opulance, Where Serenty and Lorem
          ipsum dolor sit amet consectetur adipisicing elit. In quaerat
          recusandae modi maiores eveniet nesciunt nihil iusto exercitationem
          sunt! Tempora suscipit quis in, sint
        </Text>
        <Flex gap={40} py={15}>
          <Button
            justify="center"
            w={150}
            h={50}
            variant="outline"
            c={"white"}
            bg={"#2B3D40"}
            style={{
              border: "1px solid #2B3D40",
              borderRadius: "30px",
            }}
          >
            Learn More
            <svg
              style={{
                width: "25px",
                height: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </Button>
          <Button
            justify="center"
            w={150}
            h={50}
            variant="outline"
            c={"#2B3D40"}
            bg={"#FBFBFB"}
            style={{
              border: "1px solid #2B3D40",
              borderRadius: "30px",
            }}
          >
            Contact Us
            <svg
              style={{
                width: "25px",
                height: "25px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </Button>
        </Flex>
        <Flex gap={70} py={20}>
          <Stack justify="center" align="center" gap={5}>
            <Text size="40px" fw={700} c={"#2B3D40"}>
              2.75X
            </Text>
            <Text c={"#2B3D40"} fw={400}>
              Faster Production
            </Text>
          </Stack>
          <Stack justify="center" align="center" gap={5}>
            <Text size="40px" fw={700} c={"#2B3D40"}>
              100%
            </Text>
            <Text fw={400} c={"#2B3D40"}>
              Success Rate
            </Text>
          </Stack>
        </Flex>
      </Stack>
      <Stack
        w={"40%"}
        px={50}
        style={{
          borderRadius: "10px",
          background: "#F1F0F4",
        }}
      ></Stack>
    </Flex>
  );
}
