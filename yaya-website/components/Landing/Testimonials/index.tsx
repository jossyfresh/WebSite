import { Flex, Stack, Text, Image } from "@mantine/core";
import React from "react";

export default function Testimonial() {
  return (
    <Stack px={70} py={50}>
      <Text size="40px" fw={600} c={"#2B3D40"}>
        Testimonials From Satisfied Clients
      </Text>
      <Text
        size="16px"
        c={"#828E8E"}
        fw={300}
        fs={"inherit"}
        style={{
          lineHeight: 1.4,
        }}
      >
        Unlocking the Stories of Success: Hear What Our Clients Have to Say
        About Their Journey with Us
      </Text>
      <Flex gap={20} justify={"space-between"} py={20}>
        <Stack
          w={"65%"}
          px={50}
          py={25}
          gap={40}
          bg={"#F6F5F5"}
          style={{
            borderRadius: "10px",
          }}
        >
          <Text
            size="35px"
            fw={400}
            c={"#2B3D40"}
            style={{
              lineHeight: 1.2,
            }}
          >
            Our Exemplary Service and Unwavering Commitment to Client
            Satisfaction
          </Text>
          <Text
            size="17px"
            c={"#828E8E"}
            style={{
              lineHeight: 1.3,
            }}
            fs={"italic"}
          >
            Exploring the Path of Excellence: Unveiling Client Experiences,
            Insights, and Triumphs Along Their Journey with Us Unraveling the
            Tapestry of Trust, Quality, and Satisfaction - A Comprehensive
            Compilation of Experiences, Insights, and Triumphs Shared.
          </Text>
          <Flex>
            <Stack gap={0}>
              <Text c={"dark"}>Mahmodul Hasan</Text>
              <Text c={"dark"}>Visual Developer</Text>
            </Stack>
          </Flex>
        </Stack>
        <Stack w={"30%"}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src="/images/best5.jpg"
            alt="hero"
          />
        </Stack>
      </Flex>
    </Stack>
  );
}
