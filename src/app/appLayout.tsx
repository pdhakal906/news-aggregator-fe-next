'use client';
import CustomThemeSwitcher from '@/components/CustomThemeSwitcher';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { AppShell, Burger, Group, Paper } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

interface AppLayoutPropsType {
  children: React.ReactNode;
}

const AppLayout = (props: AppLayoutPropsType) => {
  const { children } = props;
  const [opened, { toggle }] = useDisclosure();
  // const [navOpen, setNavOpen] = useState(false)
  return (
    <>
      <AppShell
        // layout='alt'
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened, desktop: !opened }
        }}
        padding="md"
      >
        <Paper>
          <AppShell.Header withBorder={false}
            className='border-green-200 border-b-[3px]'
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
          <AppShell.Navbar p="md"
            withBorder={true}
            className='border-green-300 border-r-[3px]'
          >
            <Sidebar></Sidebar>
          </AppShell.Navbar>
          <AppShell.Main>
            {children}
          </AppShell.Main>
        </Paper>
      </AppShell>

    </>


  )
}

export default AppLayout
