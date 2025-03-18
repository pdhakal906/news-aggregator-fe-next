'use client';
import CustomThemeSwitcher from '@/components/CustomThemeSwitcher';
import Sidebar from '@/components/Sidebar';
import { AppShell, Box, Burger, Group, Paper, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { useEffect, useState } from 'react'

interface AppLayoutPropsType {
  children: React.ReactNode;
}

const AppLayout = (props: AppLayoutPropsType) => {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  // const toggleNavbar = () => {
  //   toggle(); // This will toggle the opened state
  // };

  if (!mounted) return null; // Avoid rendering mismatched styles during hydration


  return (
    <>
      <AppShell
        // layout='alt'
        header={{ height: 50 }}
        navbar={{
          width: { base: 100 },
          breakpoint: 'sm',
          collapsed: { mobile: !opened, desktop: !opened }
        }}
      >
        <Paper
          styles={{
            root: {
              backgroundColor: (colorScheme === 'dark' || colorScheme === 'auto')
                ? theme.colors.dark[5]
                : theme.colors.gray[0]
            },
          }}
        >
          <Box>
            <Box>
              <AppShell.Header
                zIndex={300}
                withBorder={false}
              >
                <Group
                  justify='space-between'
                  align='center'

                >
                  <Group >
                    <Burger className='responsive-burger' opened={opened} onClick={toggle} p={5} mt={4} size="30px" />
                    {/* <Header title='NewsHub'></Header> */}
                  </Group>
                  <CustomThemeSwitcher />
                </Group>

              </AppShell.Header>
              <AppShell.Navbar
                // p="md"
                zIndex={300}
                className='border-none'
              >
                <Sidebar />
              </AppShell.Navbar>
            </Box>
            <Box>
              <AppShell.Main>

                {children}

              </AppShell.Main>
            </Box>
          </Box>
        </Paper>
      </AppShell>

    </>


  )
}

export default AppLayout
