import { Box, Button, Image, Text, AvatarGroup, Avatar, Link, Flex, Heading } from "@chakra-ui/react";

const PartyNightCard = () => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      boxShadow="sm"
      bg={'white'}
    >
      <Box>
        <Text fontSize="sm" color="gray.500">SAT, JUN 29, 2024, 1:30 AM IST</Text>
        <Heading as="h3" size="lg" mt="1" mb="2">PARTY NIGHT!</Heading>
        <Image 
          src="https://picsum.photos/400/200path-to-your-image.png" 
          alt="Party Night"
          borderRadius="md"
          mb="3"
        />
        <Text mb="4">Hey Come join party central all you happy people! Let’s have some fun and forget about your troubles!</Text>
        <Link color="blue.500" href="#">Link visible for attendees</Link>
      </Box>
      <Flex justify="space-between" align="center" mt="4">
        <AvatarGroup size="sm" max={5}>
          <Avatar name="Attendee 1" src="path-to-avatar1.jpg" />
          <Avatar name="Attendee 2" src="path-to-avatar2.jpg" />
          <Avatar name="Attendee 3" src="path-to-avatar3.jpg" />
          <Avatar name="Attendee 4" src="path-to-avatar4.jpg" />
          <Avatar name="Attendee 5" src="path-to-avatar5.jpg" />
          <Avatar name="Attendee 6" src="path-to-avatar6.jpg" />
        </AvatarGroup>
        <Text>{`6 attendees`}</Text>
        <Button colorScheme="teal">Attend</Button>
      </Flex>
    </Box>
  );
};

export default PartyNightCard;
