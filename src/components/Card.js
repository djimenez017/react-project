import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="3xl" pb="5" align="left">
      <Image src={imageSrc} borderRadius="2xl" />
      <Heading color="teal.700" px="3" size="md" py="4">
        {title}
      </Heading>
      <Text color="teal.700" px="4" pb="3">
        {description}
      </Text>
      <HStack>
        <Text color="teal.700" pl="3">
          See more
        </Text>{" "}
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
