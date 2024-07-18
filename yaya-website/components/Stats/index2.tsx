import { Flex, Stack, Text, Button } from "@mantine/core";
import React from "react";

export default function Stat() {
  return (
    <Stack px={70} py={100} gap={50}>
      <Flex gap={50}>
        <Stack w={"50%"} px={5}>
          <Text size="45px" c={"#293D46"} fw={500}>
            Builders{" "}
            <span
              style={{
                color: "#2B3D40",
              }}
            >
              Shaping
            </span>
          </Text>
          <Text size="45px">Tomorrow's Skylines </Text>
        </Stack>
        <Stack w={"50%"}>
          <Text
            c={"#828E8E"}
            size="20px"
            style={{
              lineHeight: 1.4,
            }}
          >
            Builders Pionerring the future of urban development, Weavring Dreams
            into every brick and beam with unwavering commitment to Quality and
            Innovation
          </Text>
        </Stack>
      </Flex>
      {/* cards flex */}
      <Flex>
        <Stack w={"50%"}>
          <Flex w={"100%"} gap={20}>
            <Stack
              w={"45%"}
              h={150}
              gap={5}
              justify="center"
              align="center"
              bg={"#2B3D40"}
              style={{
                borderRadius: "10px",
              }}
            >
              <Text size="40px" c={"white"} fw={600}>
                17K+
              </Text>
              <Text size="20px" c={"white"}>
                Transforming Visions
              </Text>
            </Stack>
            <Stack
              bg={"#F6F5F5"}
              w={"45%"}
              gap={5}
              align="center"
              justify="center"
              style={{
                borderRadius: "10px",
              }}
            >
              <Text size="42px" c={"#2B3D40"} fw={700}>
                10+
              </Text>
              <Text size="20px" c={"#2B3D40"}>
                Experience
              </Text>
            </Stack>
          </Flex>
          <Flex w={"100%"} gap={20}>
            <Stack
              bg={"#F6F5F5"}
              w={"45%"}
              h={150}
              gap={5}
              align="center"
              justify="center"
              style={{
                borderRadius: "10px",
              }}
            >
              <Text size="40px" c={"#2B3D40"} fw={600}>
                150+
              </Text>
              <Text size="20px" c={"#2B3D40"}>
                Award Winnig
              </Text>
            </Stack>
            <Stack
              bg={"#F6F5F5"}
              w={"45%"}
              gap={5}
              align="center"
              justify="center"
              style={{
                borderRadius: "10px",
              }}
            >
              <Text size="40px" c={"#2B3D40"} fw={600}>
                25+
              </Text>
              <Text size="20px" c={"#2B3D40"}>
                Property Collection
              </Text>
            </Stack>
          </Flex>
        </Stack>
        <Flex
          w={"50%"}
          h={320}
          px={25}
          py={25}
          bg={"#F6F5F5"}
          style={{
            borderRadius: "10px",
          }}
        >
          <Stack w={"50%"} align="stretch" justify="space-between">
            <Text pr={30}>
              Harmonizing Nature Ecological Wisdom Meet Architectural
              Brilliance, Creating Resilient Communities for Generations
              Generations to Thrive
            </Text>
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
          </Stack>
          <Stack
            w={"50%"}
            style={{
              borderRadius: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "10px",
                height: "100%",
                width: "100%",
              }}
              src="/images/best1.png"
              alt="hero"
            />
          </Stack>
        </Flex>
      </Flex>
    </Stack>
  );
}
