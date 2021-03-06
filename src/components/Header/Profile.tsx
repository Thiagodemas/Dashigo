import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Thiago Demas</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            thiago@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Thiago Demas" src="https://github.com/thiagodemas.png" />
    </Flex>
  );
}