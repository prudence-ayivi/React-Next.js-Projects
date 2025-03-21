import React from "react";
import { Box, HStack, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          flexDirection={"column"}
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={['20', '24', '16']}
        >
          <Box color="white" margin="0 auto" py={3} hideFrom='md'>
            <HStack spacing={8}>
              {socials.map((social, index) => (
                <a href={social.url} key={index} target="blank">
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </Box>
          <p>Pete • © {new Date().getFullYear()}</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
