import { Stack, Flex, Text, Button, Image, Card } from "@mantine/core";
import React from "react";

export default function WhyChooseUs() {
  return (
    <Stack py={100} px={50} gap={100}>
      <Flex justify={"space-between"}>
        <Stack w={500}>
          <Text size="md" c={"#696A69"}>
            Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu sit.
            Aliquet magna Lorem ipsum dolor sit amet consectetur. Blandit eu
            magna sit eu sit. Aliquet magna
          </Text>
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
        </Stack>
        <Stack mt={-10} w={500}>
          <Text
            size="35px"
            fw={500}
            c={"#696A69"}
            style={{
              lineHeight: "50px",
            }}
          >
            Why Choose us for best construction experience
          </Text>
        </Stack>
      </Flex>
      <Flex justify={"space-between"}>
        <Stack w={400}>
          <img
            style={{
              borderTopRightRadius: "35%",
              height: "500px",
            }}
            src="/images/Whychooseus.png"
            alt="hero"
          />
        </Stack>
        <Stack w={650} gap={50}>
          <Text size="md" c={"#696A69"}>
            Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu sit.
            Aliquet magna tincidunt nascetur et congue metus.
          </Text>
          <Flex
            justify={"space-between"}
            mt={20}
            pos={"relative"}
            align={"center"}
            gap={50}
          >
            <Card
              w={50}
              h={40}
              bg={"#FE8431"}
              style={{
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
              }}
            ></Card>
            <Text size="40px" fw={600} pos={"absolute"} top={-5} left={25}>
              01
            </Text>
            <Text size="md" c={"#696A69"}>
              Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu
              sit. Aliquet magna tincidunt nascetur et congue metus.
            </Text>
          </Flex>
          <Flex
            justify={"space-between"}
            mt={20}
            pos={"relative"}
            align={"center"}
            gap={50}
          >
            <Card
              w={50}
              h={40}
              bg={"#43B819"}
              style={{
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
              }}
            ></Card>
            <Text size="40px" fw={600} pos={"absolute"} top={-5} left={25}>
              02
            </Text>
            <Text size="md" c={"#696A69"}>
              Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu
              sit. Aliquet magna tincidunt nascetur et congue metus.
            </Text>
          </Flex>
          <Flex
            justify={"space-between"}
            mt={20}
            pos={"relative"}
            align={"center"}
            gap={50}
          >
            <Card
              w={50}
              h={40}
              bg={"cyan"}
              style={{
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
              }}
            ></Card>
            <Text size="40px" fw={600} pos={"absolute"} top={-5} left={25}>
              03
            </Text>
            <Text size="md" c={"#696A69"}>
              Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu
              sit. Aliquet magna tincidunt nascetur et congue metus.
            </Text>
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}

{
  /* ; */
}
