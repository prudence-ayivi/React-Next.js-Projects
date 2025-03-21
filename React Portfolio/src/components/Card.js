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

);
};

export default Card;
