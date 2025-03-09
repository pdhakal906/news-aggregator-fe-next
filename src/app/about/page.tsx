
import { Box, Card, Group, Paper, Text, } from '@mantine/core'
import { Image as MantineImage, } from '@mantine/core'
import { IconBracketsAngle, IconBrandGit, IconBrandLinkedin, IconHome, IconMail, IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const AboutPage = () => {
  return (
    <>
      <Paper
      >
        <Card
          shadow='xl'
        >
          <Box component='section'>
            <Box
              component='figure'
              style={{ float: 'right', marginLeft: '1rem' }}
            >
              <MantineImage
                width={250}
                height={200}
                component={Image}
                radius="md"
                alt="Featured"
                src="/profile.jpg"
              >
              </MantineImage>

            </Box>

            <Text component='h1' td={"underline"} className='text-3xl font-bold' c={'teal'} >Pratik Dhakal</Text>

            <Box p={"5"}>
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

                <Link href="https://www.linkedin.com/in/pratikdhakal906

" className='text-[#12b886] font-bold' target='_blank'>LinkedIn</Link>
              </Group>
            </Box>
          </Box>
        </Card>
      </Paper >

    </>
  )
}

export default AboutPage
