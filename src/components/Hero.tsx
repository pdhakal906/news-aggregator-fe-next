import { BackgroundImage, Group, Overlay, Stack, Text } from '@mantine/core'
import { IconBracketsAngle, IconBrandGit, IconBrandLinkedin, IconHome, IconMail, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
      {/* Background Image Container */}
      <BackgroundImage src="/graffati.jpg" radius="sm"
        h={"100vh"}
        style={{
          position: "relative",
          backgroundPosition: "top",
          backgroundSize: "cover"
        }}>
        {/* Overlay behind the text */}
        <Overlay
          gradient="linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%)"

          opacity={0.85}
          zIndex={1}
        />

        {/* Positioned container for text */}
        <div
          className='responsive-text'
        >
          <Text
            className='name-text'
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "white",
              textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
            }}
          >PRATIK DHAKAL</Text>
          <Stack gap={10}>
            <Group gap={5} align='center'>
              <IconBracketsAngle
                size={25}
                style={{
                  color: "white",
                  filter:
                    "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 black) drop-shadow(2px -2px 0 black) drop-shadow(-2px 2px 0 black)",
                }}
                stroke={2}
              />
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
                }}
              >Fullstack Developer</Text>
            </Group>
            <Group gap={5} align='center'>
              <IconMail

                size={25}
                style={{
                  color: "white",
                  filter:
                    "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 black) drop-shadow(2px -2px 0 black) drop-shadow(-2px 2px 0 black)",
                }}
                stroke={2}
              />
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
                }}
              >pdhakal906@gmail.com</Text>
            </Group>
            <Group gap={4} align='center'>
              <IconPhone
                size={25}
                style={{
                  color: "white",
                  filter:
                    "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 black) drop-shadow(2px -2px 0 black) drop-shadow(-2px 2px 0 black)",
                }}
                stroke={2}
              />
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
                }}
              >+9779861996461</Text>
            </Group>
            <Group gap={5} align='center'>
              <IconHome
                size={25}
                style={{
                  color: "white",
                  filter:
                    "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 black) drop-shadow(2px -2px 0 black) drop-shadow(-2px 2px 0 black)",
                }}
                stroke={2}
              ></IconHome>
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
                }}
              >Kathmandu, Nepal</Text>
            </Group>
            <Group gap={5} align='center'>
              <IconBrandGit
                size={25}
                style={{
                  color: "white",
                  filter:
                    "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 black) drop-shadow(2px -2px 0 black) drop-shadow(-2px 2px 0 black)",
                }}
                stroke={2}
              />
              <Link href="https://github.com/pdhakal906"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
                }}
                target='_blank'>GitHub</Link>
            </Group>
            <Group gap={5} align='center'>
              <IconBrandLinkedin
                size={25}
                style={{
                  color: "white",
                  filter:
                    "drop-shadow(2px 2px 0 black) drop-shadow(-2px -2px 0 black) drop-shadow(2px -2px 0 black) drop-shadow(-2px 2px 0 black)",
                }}
                stroke={2}
              />
              <Link
                href="https://www.linkedin.com/in/pratikdhakal906"
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "white",
                  textShadow: "2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black"
                }}
                target='_blank'>LinkedIn</Link>
            </Group>
          </Stack>
        </div>
      </BackgroundImage>
    </>

  )
}

export default Hero
