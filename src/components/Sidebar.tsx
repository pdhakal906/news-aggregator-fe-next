'use client';
import { Stack, } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface SidebarProps {
  toggleNavbar: () => void; // Add a prop to accept the function
}

const Sidebar = ({ toggleNavbar }: SidebarProps) => {
  return (
    <>
      <Stack
        gap={10} >
        <Link onClick={() => {
          toggleNavbar(); // Toggle the sidebar when the link is clicked
        }} className='text-[18px] text-[#12b886] rounded-xl hover:bg-teal-200 hover:text-gray-600 hover:font-bold p-2  ' href="/" >Home</Link>
        <Link onClick={() => {
          toggleNavbar(); // Toggle the sidebar when the link is clicked
        }} className='text-[18px] text-[#12b886] rounded-xl hover:bg-teal-200 hover:text-gray-600 hover:font-bold p-2' href="/about" >About</Link>
      </Stack>
    </>
  )
}

export default Sidebar;
