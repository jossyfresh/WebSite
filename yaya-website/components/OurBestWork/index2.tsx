import { Flex, Image, Stack, Text } from "@mantine/core";
import React from "react";

export default function Buildings() {
  return (
    <Stack px={70} py={100} gap={70} align="center" justify="center">
      <Flex>
        <Stack gap={10} w={"50%"}>
          <Text size="40px" fw={600} c={"#2B3D40"}>
            The Buildings We
          </Text>
          <Text size="40px" fw={600} c={"#2B3D40"}>
            Have Created
          </Text>
        </Stack>

        <Stack w={"50%"} px={30}>
          <Text
            size="17px"
            c={"#828E8E"}
            fw={300}
            fs={"inherit"}
            style={{
              lineHeight: 1.4,
            }}
          >
            Builders Pioneering the Future of Urban Development, Weaving Dreams
            into Every Brick and Beam with Unwavering Commitment to Quality and
            Innovation.
          </Text>
        </Stack>
      </Flex>
      <Flex justify={"space-between"} w={"100%"} gap={50}>
        <Stack w={"45%"} h={500}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "2%",
            }}
            src="/images/best2.png"
            alt="hero"
          />
        </Stack>
        <Stack w={"50%"} gap={30}>
          <Stack w={"100%"} h={230}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "2%",
              }}
              src="/images/best6.jpg"
              alt="hero"
            />
          </Stack>
          <Flex gap={20}>
            <Stack w={"100%"} h={240}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2%",
                }}
                src="/images/best5.jpg"
                alt="hero"
              />
            </Stack>
            <Stack w={"100%"} h={240}>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "2%",
                }}
                src="/images/best4.jpg"
                alt="hero"
              />
            </Stack>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
