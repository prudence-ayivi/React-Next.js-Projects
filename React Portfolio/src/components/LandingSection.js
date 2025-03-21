import React from "react";
import { Box, Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete !";
const bio1 = "A Frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    height={['70vh', '80vh', '70vh', '100vh']}
  >
    <VStack>
      <Box textAlign='center'>
      <Avatar name='Pete' src='https://i.pravatar.cc/150?img=7' size='xl'/>
      <Heading as="h6" size="lg" mt={4}> {greeting} </Heading>     
      </Box>
      <Box mt='7'>
        <Heading as="h1" fontSize={['3xl', '4xl', '5xl']} textAlign='center'>
          {bio1}
        </Heading>
        <Heading as="h1" fontSize={['3xl', '4xl', '5xl']} textAlign='center'>
          {bio2}
        </Heading>
      </Box>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
