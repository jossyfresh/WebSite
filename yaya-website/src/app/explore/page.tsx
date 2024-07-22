import { Stack } from "@mantine/core";
import React from "react";
import Title from "../../../components/Explore/Title";
import CurrentProjects from "../../../components/Explore/CurrentProjects";
import FinishedProjectCard from "../../../components/Explore/ProjectCard/FinishedProjectCard";
import FinishedProjects from "../../../components/Explore/FinishedProjects";

export default function page() {
  return (
    <Stack gap={100}>
      <Title />
      <Stack bg={"#FBF9F9"} gap={0}>
        <CurrentProjects />
        <FinishedProjects />
      </Stack>
    </Stack>
  );
}
