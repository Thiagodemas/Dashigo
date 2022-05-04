import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Thiago Demas</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          thiago@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Thiago Demas" src="https://github.com/thiagodemas.png" />
    </Flex>
  );
}