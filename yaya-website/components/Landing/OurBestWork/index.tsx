import { Flex, Stack, Image, Button, Card, Text, Center } from "@mantine/core";
import React from "react";

export default function OurBestWork() {
  return (
    <Stack gap={50}>
      <Center py={20}>
        <Text size="30px">Our Best Works</Text>
      </Center>
      <Flex px={50} justify={"space-between"} gap={30}>
        <Stack w={"50%"} gap={50} pos={"relative"}>
          <Image
            style={{
              borderRadius: "2%",
            }}
            src="/images/best1.png"
            alt="hero"
            w="100%"
            height={350}
          />
          <Card
            w={"100%"}
            pos={"absolute"}
            bottom={480}
            radius={0}
            style={{
              // make the background glassy
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Stack gap={10} px={10}>
              <Text size="xl" c={"white"} fw={700}>
                Some Name
              </Text>
              <Text size="md" c={"white"} fw={600}>
                Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu
                si
              </Text>
            </Stack>
          </Card>
          <Card
            w={"100%"}
            pos={"absolute"}
            bottom={80}
            radius={0}
            style={{
              // make the background glassy
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Stack gap={10} px={10}>
              <Text size="xl" c={"white"} fw={700}>
                Some Name
              </Text>
              <Text size="md" c={"white"} fw={600}>
                Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu
                si
              </Text>
            </Stack>
          </Card>
          <Image
            style={{
              borderRadius: "2%",
            }}
            src="/images/best2.png"
            alt="hero"
            w="100%"
            height={350}
          />
        </Stack>
        <Stack gap={50} w={"50%"} align="center" pos={"relative"}>
          <img
            style={{
              borderRadius: "2%",
              height: "600px",
              width: "80%",
            }}
            src="/images/best3.png"
            alt="hero"
          />
          <Card
            w={"80%"}
            pos={"absolute"}
            bottom={250}
            radius={0}
            style={{
              // make the background glassy
              background: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(5px)",
            }}
          >
            <Stack gap={10} px={10}>
              <Text size="xl" c={"white"} fw={700}>
                Some Name
              </Text>
              <Text size="md" c={"white"} fw={600}>
                Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu
                si
              </Text>
            </Stack>
          </Card>
          <Button
            variant="outline"
            radius={50}
            h={50}
            w={200}
            c={"#73B7E9"}
            style={{
              border: "2px solid #73B7E9",
            }}
          >
            Explore More
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
}
