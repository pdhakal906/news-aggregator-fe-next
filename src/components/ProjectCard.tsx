'use client';
import { Box, Card, Divider, Group, Image, Pill, SimpleGrid, Stack, Text } from '@mantine/core'
import React from 'react'

const ProjectCard = () => {

  const projects = [
    { "name": "Movie Site", "description": "Uses API From TMDB to Display Various Movies and TV Shows. Has Search and Pagniation Functionality.", "image": "/project1.png", "github": "https://github.com/pdhakal906/react-movie-front", "live_link": "https://react-movie-front.vercel.app/", "tech_stack": ["React.js", "Material Tailwind", "Redux", "Axios", "Formik"] },
    { "name": "Record Management Lite", "description": "Minmalistic Record Keeper With Search Functionality, Built Using HTML, Bootstrap and Vanilla Javascript. Uses Local Storage to Store Data.", "image": "/project2.png", "github": "https://github.com/pdhakal906/CRUD-js", "live_link": "https://crud-with-search-feature.vercel.app/", "tech_stack": ["Vanilla Javascript", "HTML", "Bootstrap"] },
  ]



  return (
    <>
      <Box

        p={50}>
        <SimpleGrid
          style={{ border: '5px  rgba(0, 0, 0, 0.09) solid' }}
          p={10}
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }}
        >

          {projects.map((project, index) => (

            <Card
              component='a'
              target='_blank'
              href={project.live_link}
              key={index} padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image

                  src={project.image}
                  height={160}
                  alt="Norway"
                />
              </Card.Section>
              <Divider mt={10}></Divider>
              <Stack>
                <Text fz={25} fw={500}>{project.name}</Text>
                <Group gap={10}>
                  {project.tech_stack.map((stack, index) => (
                    <Pill bg={'black.5'} key={index}>{stack}</Pill>
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
    </>
  );
}

export default ProjectCard
