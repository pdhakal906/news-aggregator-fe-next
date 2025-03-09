import { Card, Group, Text } from '@mantine/core'
import React from 'react'
import CustomThemeSwitcher from './CustomThemeSwitcher'
import Link from 'next/link'
interface HeaderPropsType {
  title: string;
}

const Header = (props: HeaderPropsType) => {
  const { title } = props;
  return (
    <>
      <Link href="/" passHref className='text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>
        {title}
      </Link>
    </>
  )
}

export default Header