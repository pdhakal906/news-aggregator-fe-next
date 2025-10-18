"use client";
import {
  Box,
  Card,
  Divider,
  Group,
  Image,
  Pill,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";
import React from "react";

const ProjectCard = () => {
  const projects = [
    {
      name: "News Aggregator",
      description:
        "Scraper Service Scrapes News from Various News Portals and Stores Them in Database. API Service Brodcasts the Stored Data Which is Then Displayed In a Web Page.",
      image: "/project3.png",
      github: "https://github.com/pdhakal906/news_aggregator",
      live_link: "https://www.pratikdhakal906.com.np/news",
      tech_stack: [
        "Scrapy",
        "Django",
        "Django Rest Framework",
        "Next.js",
        "Mantine UI",
      ],
    },
    {
      name: "Record Management Lite",
      description:
        "Minmalistic Record Keeper With Search Functionality, Built Using HTML, Bootstrap and Vanilla Javascript. Uses Local Storage to Store Data.",
      image: "/project2.png",
      github: "https://github.com/pdhakal906/CRUD-js",
      live_link: "https://crud-with-search-feature.vercel.app/",
      tech_stack: ["Vanilla Javascript", "HTML", "Bootstrap"],
    },
    {
      name: "Movie Site",
      description:
        "Uses API From TMDB to Display Various Movies and TV Shows. Has Search and Pagniation Functionality.",
      image: "/project1.png",
      github: "https://github.com/pdhakal906/react-movie-front",
      live_link: "https://react-movie-front.vercel.app/",
      tech_stack: ["React.js", "Material Tailwind", "Redux", "Axios", "Formik"],
    },
  ];

  return (
    <div id="projects">
      <div className="text-center">
        <Text
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "white",
            textShadow:
              "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black",
          }}
          className="underline"
        >
          PROJECTS
        </Text>
      </div>
      <Box
        p={10}

        // p={50}
      >
        <SimpleGrid
          p={10}
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 20, sm: 20 }}
          verticalSpacing={{ base: "md", sm: "xl" }}
        >
          {projects.map((project, index) => (
            <Card
              component="a"
              target="_blank"
              href={project.live_link}
              key={index}
              padding="lg"
              radius="md"
              withBorder
            >
              <Card.Section>
                <Image src={project.image} height={160} alt="Norway" />
              </Card.Section>
              <Divider mt={10}></Divider>
              <Stack>
                <Group justify="space-between">
                  <Text fz={25} fw={800}>
                    {project.name}
                  </Text>
                  <Tooltip label="Github Link">
                    <IconBrandGithub
                      size={40}
                      stroke={1}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.github, "_blank");
                      }}
                    ></IconBrandGithub>
                  </Tooltip>
                </Group>
                <Group gap={10}>
                  {project.tech_stack.map((stack, index) => (
                    <Pill bg={"black.5"} key={index}>
                      {stack}
                    </Pill>
                  ))}
                </Group>

                <Text size="md" c="dimmed">
                  {project.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};

export default ProjectCard;
