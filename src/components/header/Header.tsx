import { Container, Divider, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";

const Header: React.FC = () => {
  const [date, setDate] = React.useState(Date());

  React.useEffect(() => {
    setInterval(() => {
      setDate(Date());
    }, 1000);
    console.log("made with <3 by shailesz")
  }, []);

  return (
    <Container mb={44}>
      <Stack spacing="xs" align="flex-start" justify="flex-start">
        <Group>
          <Title order={1}>
            <Text
              color="pink"
              variant="gradient"
              gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
              span
            >
              OSI
            </Text>
            <Text mx={4} size="md" color="black" span italic>
              by shailesz
            </Text>
          </Title>
        </Group>
        <Text mb={4}>{date}</Text>
      </Stack>
      <Divider />
    </Container>
  );
};

export default Header;
