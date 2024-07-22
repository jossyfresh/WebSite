import { Image, Pill, Stack, Text, Flex } from "@mantine/core";
import React from "react";

export default function FinishedProjectCard() {
  return (
    <Stack>
      <Stack
        pb={10}
        w={300}
        h={400}
        style={{
          border: "1px solid #EAEAEA",
          boxShadow: "0 0 20.4px 2px rgba(0, 0, 0, 0.1)",
          borderRadius: 10,
        }}
      >
        <Stack h={"60%"} pos={"relative"}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
            src="/images/best2.png"
            alt="project"
          />
          <Stack
            pos={"absolute"}
            left={5}
            top={5}
            px={10}
            py={5}
            bg={"white"}
            style={{
              borderRadius: 15,
            }}
          >
            <Text size="14px" c={"#2D638C"} fw={600}>
              Apartment
            </Text>
          </Stack>
          <Stack
            bottom={5}
            right={5}
            pos={"absolute"}
            w={35}
            h={35}
            bg={"white"}
            align="center"
            px={7}
            py={7}
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "50%",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.3088 12.0088H15.1543C13.4171 12.0088 12.0088 13.4171 12.0088 15.1543V29.3088C12.0088 31.046 13.4171 32.4543 15.1543 32.4543H29.3088C31.046 32.4543 32.4543 31.046 32.4543 29.3088V15.1543C32.4543 13.4171 31.046 12.0088 29.3088 12.0088Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.7182 21.4455H4.14546C3.31124 21.4455 2.51117 21.1141 1.92129 20.5242C1.3314 19.9343 1 19.1343 1 18.3001V4.14546C1 3.31124 1.3314 2.51117 1.92129 1.92129C2.51117 1.3314 3.31124 1 4.14546 1L18.3001 1C19.1343 1 19.9343 1.3314 20.5242 1.92129C21.1141 2.51117 21.4455 3.31124 21.4455 4.14546V5.7182"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Stack>
        </Stack>
        {/* description */}
        <Stack px={10} gap={40}>
          <Stack gap={5}>
            <Text size="xl" fw={600} c={"dark"}>
              Lorem Ipsum
            </Text>
            <Text
              size="15px"
              c={"dark"}
              fw={300}
              style={{
                lineHeight: "1.3",
              }}
            >
              Lorem ipsum dolor sit amet consectetursit amet consectetur.
            </Text>
          </Stack>
          <Flex gap={5} align={"center"}>
            <svg
              style={{
                color: "#E82327",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <Text c={"gray"} fs={"italic"}>
              Lorem ipsum
            </Text>
          </Flex>
        </Stack>
        {/* description */}
      </Stack>
    </Stack>
  );
}
