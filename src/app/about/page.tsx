
import { Box, Card, Group, Paper, SimpleGrid, Stack, Text, } from '@mantine/core'
import { Image as MantineImage, } from '@mantine/core'
import { IconBracketsAngle, IconBrandGit, IconBrandLinkedin, IconHome, IconMail, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'


const AboutPage = () => {
  return (
    <>
      <Paper
      >
        <SimpleGrid
          cols={{ base: 1, sm: 1, md: 1, lg: 2 }}
          spacing={{ base: 10, sm: 10, md: 10, lg: 100 }}



        >
          <Box
            w={{ sm: '100%', md: '100%', lg: '60%' }}
          >
            <Stack>
              <Card shadow='lg'>
                <Text component='h1' className='text-3xl font-bold' c={'teal'} >Pratik Dhakal</Text>

                <Box>
                  <Stack gap={10}>
                    <Group gap={5} align='center'>
                      <IconBracketsAngle size={25} color={"teal"} stroke={2} />
                      <Text fz={"md"} fw={"bold"} c={"teal"}>Fullstack Developer</Text>
                    </Group>
                    <Group gap={5} align='center'>
                      <IconMail color={"teal"} size={25} stroke={2} />
                      <Text fz={"md"} fw={"bold"} c={"teal"} >pdhakal906@gmail.com</Text>
                    </Group>
                    <Group gap={4} align='center'>
                      <IconPhone size={25} color={"teal"} stroke={2} />
                      <Text fz={"md"} fw={"bold"} c={"teal"}>+9779861996461</Text>
                    </Group>
                    <Group gap={5} align='center'>
                      <IconHome size={25} stroke={2} color={"teal"} ></IconHome>
                      <Text fz={"md"} fw={"bold"} c={"teal"}>Kathmandu, Nepal</Text>
                    </Group>
                    <Group gap={5} align='center'>
                      <IconBrandGit size={25} stroke={2} color={"teal"} />
                      <Link href="https://github.com/pdhakal906" className='text-[#12b886] font-bold' target='_blank'>GitHub</Link>
                    </Group>
                    <Group gap={5} align='center'>
                      <IconBrandLinkedin size={25} stroke={2} color={"teal"} />
                      <Link
                        href="https://www.linkedin.com/in/pratikdhakal906"
                        className='text-[#12b886] font-bold'
                        target='_blank'>LinkedIn</Link>
                    </Group>
                  </Stack>

                </Box>
              </Card>
            </Stack>

          </Box>

          <Box
            w={{ sm: '100%', md: '100%', lg: '30%' }}
            component='section'>
            {/* <Box
              component='figure'
              style={{ float: 'right', marginLeft: '1rem' }}
            > */}
            <Card shadow='lg'>
              <MantineImage
                w={150}

                // component={Image}
                radius="md"
                alt="Featured"
                src="/profile.jpg"
              >
              </MantineImage>
            </Card>

          </Box>
          {/* </Box> */}
        </SimpleGrid>
      </Paper >

    </>
  )
}

export default AboutPage
