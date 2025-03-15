'use client';
import CustomThemeSwitcher from '@/components/CustomThemeSwitcher';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { AppShell, Box, Burger, Group, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

interface AppLayoutPropsType {
  children: React.ReactNode;
}

const AppLayout = (props: AppLayoutPropsType) => {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();


  const toggleNavbar = () => {
    toggle(); // This will toggle the opened state
  };
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
        <Paper>
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
                    <Burger opened={opened} onClick={toggle} p={5} mt={4} size="30px" />
                    <Header title='NewsHub'></Header>
                  </Group>
                  <CustomThemeSwitcher />
                </Group>

              </AppShell.Header>
              <AppShell.Navbar
                // p="md"
                zIndex={300}
                className='border-none'
              >
                <Sidebar toggleNavbar={toggleNavbar} />
              </AppShell.Navbar>
            </Box>
            <Box p={0}>
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
