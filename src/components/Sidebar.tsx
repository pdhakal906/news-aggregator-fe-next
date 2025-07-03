'use client';
import { usePathname } from 'next/navigation'
import { Stack, } from '@mantine/core'
import Link from 'next/link'
import React, { useEffect } from 'react'

interface SidebarProps {
  toggleNavbar: () => void;
}


const Sidebar = ({ toggleNavbar }: SidebarProps) => {
  const pathname = usePathname()


  useEffect(() => {
    // Close sidebar on route change
    toggleNavbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);


  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <Stack
        // p={10}
        className='responsive-sidebar'
        gap={10} >
        <Link
          href="/"
          style={{
            background: `${isActive('/') ? 'oklch(0.645 0.246 16.439)' : ''}`,
            paddingLeft: '4px',
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"

          }}
        >
          Home</Link>
        <Link

          style={{
            background: `${isActive('/projects') ? 'oklch(0.645 0.246 16.439)' : ''}`,
            paddingLeft: '5px',
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"
          }}
          href="/projects"

        >
          Projects
        </Link>
        <Link

          style={{
            background: `${isActive('/news') ? 'oklch(0.645 0.246 16.439)' : ''}`,
            paddingLeft: '5px',
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"
          }}
          href="/news"

        >
          News
        </Link>
      </Stack>
    </>
  )
}

export default Sidebar;
