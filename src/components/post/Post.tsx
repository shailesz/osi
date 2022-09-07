import { Container, Title, Text, Group } from "@mantine/core";
import { prettyDate } from "helpers/time";
import React from "react";

export type PostProps = {
  title: string;
  body: string;
  feeling: string;
  timestamp: number;
};

const Post: React.FC<PostProps> = ({ title, body, feeling, timestamp }) => {
  return (
    <Container mb={32}>
      <Title
        order={3}
        color="pink"
        variant="gradient"
        gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
      >
        <Text span mr={8}>
          #
        </Text>

        <Text span>{title}</Text>
      </Title>
      <Group>
        <Text size="lg" weight={500} color="dark">
          <Text
            color="pink"
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            size="lg"
            weight="bold"
            span
          >
            {prettyDate(timestamp)}
          </Text>
          <Text span mx={4}>
            -
          </Text>
          {body}
        </Text>
        <Text italic color="dark">
          feels like: {feeling}
        </Text>
      </Group>
    </Container>
  );
};

export default Post;
