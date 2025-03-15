'use client';
import { usePathname } from 'next/navigation'
import { Stack, } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface SidebarProps {
  toggleNavbar: () => void; // Add a prop to accept the function
}

const Sidebar = ({ toggleNavbar }: SidebarProps) => {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      <Stack
        // p={10}
        gap={10} >
        <Link
          // onClick={() => {
          //   toggleNavbar(); // Toggle the sidebar when the link is clicked
          // }}
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
          // onClick={() => {
          //   toggleNavbar(); // Toggle the sidebar when the link is clicked
          // }}

          style={{
            background: `${isActive('/about') ? 'oklch(0.645 0.246 16.439)' : ''}`,
            paddingLeft: '5px',
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
            textShadow: "1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black"
          }}
          href="/about"

        >
          About
        </Link>
      </Stack>
    </>
  )
}

export default Sidebar;
