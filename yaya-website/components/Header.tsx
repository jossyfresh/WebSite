"use client";
import {
  Container,
  Anchor,
  Group,
  Burger,
  Box,
  Flex,
  Stack,
  Text,
  BackgroundImage,
  Button,
  Breadcrumbs,
} from "@mantine/core";
import classes from "./Header.module.css";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const items = [
    { title: "Mantine", href: "#" },
    { title: "Mantine hooks", href: "#" },
    { title: "use-id", href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Flex justify={"space-between"} px={50} py={45} align={"center"}>
      <Flex gap={50} align={"center"}>
        {pathname === "/" ? (
          <Stack>
            <Text size="lg" c={"#293D46"} fw={600}>
              YAYA Construction
            </Text>
          </Stack>
        ) : (
          <>
            <Stack>
              <Text size="lg" c={"cyan"} fw={600}>
                YAYA Construction
              </Text>
            </Stack>
            <Flex gap={10}>
              <Stack>
                <Text size="16px" c={"gray"} fw={600}>
                  Home
                </Text>
              </Stack>
              <Stack align="center" justify="center">
                <svg
                  style={{
                    color: "gray",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </Stack>
              <Stack>
                <Text size="16px" c={"#293D46"} fw={600}>
                  Explore
                </Text>
              </Stack>
            </Flex>
          </>
        )}
      </Flex>
      <Flex
        gap={50}
        style={{
          zIndex: 1000,
        }}
      >
        <Stack>
          <Text fw={600} c={"white"}>
            Home
          </Text>
        </Stack>

        <Stack>
          <Text fw={600} c={"white"}>
            About Us
          </Text>
        </Stack>
        <Stack>
          <Text fw={600} c={"white"}>
            Our Portfolio
          </Text>
        </Stack>

        <Stack>
          <Text fw={600} c={"white"}>
            Contact Us
          </Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
