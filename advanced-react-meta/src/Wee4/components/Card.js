import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack borderRadius={10} bg="white" color="black">
    <Image src={imageSrc} alt={title} borderRadius={10}/>         
    <VStack spacing={2.5} alignItems="start" justifyContent="left" m={3}>
    <Heading as="h6" fontSize='lg'>{title} </Heading>
    <Text fontSize='md' color='grey'>{description}</Text>
    <HStack>
      <Text fontSize={14}> See More </Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
    </VStack>
  </VStack>
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
);
};

export default Card;
