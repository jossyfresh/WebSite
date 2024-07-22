import { Flex, Stack, Text, TextInput, Select } from "@mantine/core";
import React from "react";
import { IconAt, IconSearch } from "@tabler/icons-react";

export default function Title() {
  const icon = (
    <IconSearch style={{ width: 25, height: 25, paddingLeft: 10 }} />
  );
  return (
    <Stack px={50} gap={20}>
      <Flex gap={15}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 23 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 5.27191V1.48063C11.4995 1.18784 11.415 0.901745 11.257 0.658394C11.0991 0.415043 10.8748 0.225328 10.6123 0.113156C10.3499 0.000984195 10.0612 -0.0286251 9.78248 0.0280605C9.50377 0.0847461 9.24758 0.225189 9.04619 0.431692L0 9.62915L9.04619 18.8251C9.17938 18.9632 9.33773 19.0728 9.51215 19.1475C9.68657 19.2223 9.8736 19.2608 10.0625 19.2608C10.2514 19.2608 10.4384 19.2223 10.6129 19.1475C10.7873 19.0728 10.9456 18.9632 11.0788 18.8251C11.2124 18.6876 11.3183 18.5244 11.3906 18.3446C11.4629 18.1649 11.5 17.9722 11.5 17.7777V14.0901C15.4531 14.1908 19.7728 14.9287 23 20V18.5184C23 11.6544 17.9688 6.00973 11.5 5.27191Z"
            fill="#464646"
          />
        </svg>
        <Text c={"cyan"} size="25px">
          Explore Page
        </Text>
      </Flex>
      <Flex gap={20}>
        {/* search bar */}
        <TextInput
          style={{
            gap: 30,
          }}
          placeholder="Search Here"
          variant="filled"
          radius={"lg"}
          leftSection={icon}
          w={300}
        />
        <Select
          radius={"lg"}
          size="sm"
          variant="filled"
          placeholder="Pick value"
          data={["All", "House", "Apartment", "Office"]}
          defaultValue="All"
          allowDeselect={false}
        />
      </Flex>
      <Stack>
        <Text c={"dark"}>
          Lorem ipsum dolor sit amet consectetur. Blandit eu magna sit eu sit.
          Aliquet magna tincidunt nascetur et congue metus.
        </Text>
      </Stack>
    </Stack>
  );
}
