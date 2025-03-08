import { Card, Group, Text } from '@mantine/core'
import React from 'react'
import CustomThemeSwitcher from './CustomThemeSwitcher'
import Link from 'next/link'


const Header = () => {
  return (
    <header>
      <Card p={"10"}
        shadow='lg'
        h={"60"}>
        <Group justify='space-between'>
          <Link href="/" passHref
            style={{ cursor: 'pointer', textDecoration: 'none' }}
          >
            <Text
              ml={20}
              size="2rem"
              fw={900}
              variant="gradient"
              gradient={{ from: 'blue', to: 'violet', deg: 180 }}

            >
              NEWS HUB
            </Text>
          </Link>
          <CustomThemeSwitcher />
        </Group>
      </Card>
    </header>
  )
}

export default Header