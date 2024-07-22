import { BackgroundImage, Button, Stack, Text } from "@mantine/core";
import React from "react";

export default function Hero2() {
  return (
    <Stack px={100} py={100} bg={"#FBFBFB"}>
      <Stack>
        <Text size="50px" c={"black"} fw={900}>
          Building Your Vision With Precision{" "}
        </Text>
      </Stack>
      <Stack w={"70%"}>
        <Text c={"black"} size="20px" fw={700}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          quae corporis nesciunt beatae non. Temporibus vitae obcaecati, sunt
          error quod, placeat necessitatibus doloribus facilis doloremque
          soluta, beatae quas earum aut?
        </Text>
      </Stack>
      <Button variant="outline"></Button>
    </Stack>
  );
}
