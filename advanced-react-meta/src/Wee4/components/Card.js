import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
  <VStack borderRadius={2} bg="white" color="black">
    <Image src={imageSrc} alt={title} borderRadius={2}/>         
    <VStack spacing={2} alignItems="start" justifyContent="left" m={2}>
    <Heading as="h6">{title} </Heading>
    <Text>{description} </Text>
    <HStack>
      <a className='d-flex align-items-center c-pointer' href="https://github.com" alt='project link' 
      target='_blank'
      rel="noreferrer">
      <Text fontSize='3' className='text-muted'> See More</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
       </a>
    </HStack>
    </VStack>
  </VStack>
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
);
};

export default Card;
