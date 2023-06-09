import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHourglass1,
  faSortNumericUpAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    id: 1,
  },
  {
    icon: faGithub,
    url: "https://github.com",
    id: 2,
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    id: 3,
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    id: 4,
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    id: 5,
  },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      scrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      // check if isVisible is tue
      transform={isVisible ? "translateY(0)" : "translateY(-200px)"}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {socials.map(({ icon, url, id }) => {
              return (
                <a href={url} key={id}>
                  <FontAwesomeIcon
                    icon={icon}
                    size="2x"
                    style={{ marginRight: "20px" }}
                  ></FontAwesomeIcon>
                </a>
              );
            })}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}{" "}
              <a href="#projects" onClick={handleClick("projects")}>
                {" "}
                Projects{" "}
              </a>
              <a href="#contactme" onClick={handleClick("contactme")}>
                Contact me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
