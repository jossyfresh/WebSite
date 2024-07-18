import { Stack, Text, Button } from "@mantine/core";
import React from "react";

export default function Banner() {
  return (
    <Stack px={100} py={100}>
      <Stack
        bg={"#2B3D40"}
        style={{
          border: "1px solid #2B3D40",
          borderRadius: "30px",
        }}
        px={50}
        py={35}
        gap={30}
      >
        <Text size="40px" c={"white"} fw={600}>
          HAVE ANY UPCOMING PROJECT?
        </Text>
        <Text
          w={"75%"}
          c={"white"}
          size="18px"
          fs={"italic"}
          style={{
            lineHeight: 1.4,
          }}
        >
          Where Every Dawn Unveils a Spectacular Vista, Offering an Oasis of
          Tranquility and Opulence, Perfumed with the Fragrance of Serenity and
          Sophistication, Redefining Elevated Living
        </Text>
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
      </Stack>
    </Stack>
  );
}
