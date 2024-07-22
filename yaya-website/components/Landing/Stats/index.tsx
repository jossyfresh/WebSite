import { Card, Flex, Stack, Text } from "@mantine/core";
import React from "react";

export default function Stats() {
  return (
    <Stack mt={100} h={150} px={200} style={{}}>
      <Stack
        style={{
          height: "100%",
          borderRadius: "100px",
          background: "#FAFAFA",
        }}
        justify="center"
      >
        <Flex justify={"space-between"} px={100} align={"center"} style={{}}>
          <Stack pos={"relative"} gap={5}>
            <Text
              size="25px"
              style={{
                zIndex: 1000,
                fontWeight: 600,
              }}
            >
              200+
            </Text>
            <Text
              size="20px"
              c={"#696A69"}
              style={{
                zIndex: 1000,
                fontWeight: 600,
              }}
            >
              Projects Done
            </Text>
            <Card
              h={40}
              w={40}
              pos={"absolute"}
              top={-30}
              left={-40}
              style={{
                background: "#FE8431",
                borderRadius: "50% 50% 0% 50%",
              }}
            ></Card>
          </Stack>
          <Stack pos={"relative"} gap={5}>
            <Text
              size="25px"
              style={{
                zIndex: 1000,
                fontWeight: 600,
              }}
            >
              54+
            </Text>
            <Text
              size="20px"
              c={"#696A69"}
              style={{
                zIndex: 1000,
                fontWeight: 600,
              }}
            >
              Buildings Done
            </Text>
            <Card
              h={40}
              w={40}
              pos={"absolute"}
              top={-30}
              left={-40}
              style={{
                background: "#43B819",
                borderRadius: "50% 50% 0% 50%",
              }}
            ></Card>
          </Stack>
          <Stack pos={"relative"} gap={5}>
            <Text
              size="25px"
              style={{
                zIndex: 1000,
                fontWeight: 600,
              }}
            >
              96+
            </Text>
            <Text
              size="20px"
              c={"#696A69"}
              style={{
                zIndex: 1000,
                fontWeight: 600,
              }}
            >
              Total Employees
            </Text>
            <Card
              h={40}
              w={40}
              pos={"absolute"}
              top={-30}
              left={-40}
              style={{
                background: "#17A7B8",
                borderRadius: "50% 50% 0% 50%",
              }}
            ></Card>
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  );
}
