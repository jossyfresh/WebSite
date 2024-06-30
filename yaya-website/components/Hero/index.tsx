"use client";
import { Grid, Flex, Stack, Image, Text, Button } from "@mantine/core";
import { ST } from "next/dist/shared/lib/utils";
import React from "react";

export default function Hero() {
  return (
    <Flex justify={"space-between"} px={20} pos={"relative"} gap={50}>
      <Flex gap={40} w={"50%"} px={30} align={"center"}>
        <Image
          style={{
            borderRadius: "2%",
          }}
          src="/images/HeroPic.png"
          alt="hero"
          w={200}
          height={500}
        />
        <Stack gap={30} mt={50}>
          <Text size="60px" c={"#696A69"}>
            <span
              style={{
                color: "#17A7B8",
              }}
            >
              Building{" "}
            </span>
            <span
              style={{
                color: "#A0A0A0",
              }}
            >
              Skyscrapers{" "}
            </span>
            <span
              style={{
                color: "#696A69",
              }}
            >
              Bridges{" "}
            </span>
            &{" "}
            <span
              style={{
                color: "#FE8431",
              }}
            >
              {" "}
              Dreams
            </span>
          </Text>
          <Text size="sm" c={"#9E9E9E"}>
            Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu sit.
            Aliquet magna tincidunt nascetur et congue metus.
          </Text>
          <Flex gap={20}>
            <Button
              style={{
                background: "#17A7B8",
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                // make it lonegr to the bottom
                // make the color of the shadow #17A7B8

                boxShadow: "0 20px 15px -4px rgba(135, 199, 209, 0.8)",
              }}
              w={150}
              h={40}
              c={"white"}
              variant="filled"
            >
              Explore
            </Button>
            <Button
              style={{
                background: "white",
                borderTopLeftRadius: "30px",
                borderBottomRightRadius: "30px",
                border: "2px solid #17A7B8",
              }}
              w={150}
              h={40}
              c={"#17A7B8"}
              variant="outline"
            >
              Contact Us
            </Button>
          </Flex>
        </Stack>
      </Flex>
      <Stack pos={"relative"} w={800}>
        <Image
          style={{
            borderRadius: "2%",
          }}
          pos={"absolute"}
          top={-80}
          right={0}
          src="/images/HeroPic.png"
          alt="hero"
          width={800}
          height={500}
        />
      </Stack>
    </Flex>
  );
}
