import React from "react";
import { Container, Title, Text, Group } from "@mantine/core";
import { ContentfulPost } from "../../types/post";
import {renderRichText} from 'gatsby-source-contentful/rich-text';
import { BLOCKS } from "@contentful/rich-text-types";
import { Options } from "@contentful/rich-text-react-renderer"
import { prettyDate } from "../../helpers/time";

const Post: React.FC<ContentfulPost> = ({ id, title, body, feelsLike, publishDate }) => {
  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text size="lg" weight={500} color="dark" span>{children}</Text>,
    },
  }
  
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
            {prettyDate(publishDate)}
          </Text>
          <Text span mx={4}>
            -
          </Text>
          {renderRichText(body, options)}
        </Text>
        <Text italic color="dark">
          feels like: {feelsLike}
        </Text>
      </Group>
    </Container>
  );
};

export default Post;

