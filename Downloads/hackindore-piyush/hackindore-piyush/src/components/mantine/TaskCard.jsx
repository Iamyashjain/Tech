import {
  Card,
  Avatar,
  Text,
  Progress,
  Badge,
  Group,
  ActionIcon,
} from "@mantine/core";
// import { MantineLogo } from "@mantinex/mantine-logo";
import { IconUpload } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const avatars = [
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
  "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
];

export function TaskCard() {
  const id = 1;
  return (
    <Card withBorder padding="lg" radius="md">
      <Group justify="space-between">
        {/* <MantineLogo type="mark" size="2rem" /> */}
        <Badge>12 days left</Badge>
      </Group>

      <Text fz="lg" fw={500} mt="md">
        5.3 minor release (September 2022)
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        Form context management, Switch, Grid and Indicator components
        improvements, new hook and 10+ other changes
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{" "}
        <Text span fw={500} c="bright">
          23/36
        </Text>
      </Text>

      <Progress value={(23 / 36) * 100} mt={5} />

      <Group justify="space-between" mt="md">
        <Avatar.Group spacing="sm">
          <Avatar src={avatars[0]} radius="xl" />
          <Avatar src={avatars[1]} radius="xl" />
          <Avatar src={avatars[2]} radius="xl" />
          <Avatar radius="xl">+5</Avatar>
        </Avatar.Group>
        <div className="flex items-center gap-2">
          <Link to={`/workshop?${id}`}>
            <Badge>view </Badge>
          </Link>
          <ActionIcon variant="default" size="lg" radius="md">
            <IconUpload size="1.1rem" />
          </ActionIcon>
        </div>
      </Group>
    </Card>
  );
}
