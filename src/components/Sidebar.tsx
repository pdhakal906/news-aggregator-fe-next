import { Stack, } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <>
      <Stack gap={10} >
        <Link className='text-[18px] text-[#12b886] rounded-xl hover:bg-teal-200 hover:text-gray-600 hover:font-bold p-2  ' href="/" >Home</Link>
        <Link className='text-[18px] text-[#12b886] rounded-xl hover:bg-teal-200 hover:text-gray-600 hover:font-bold p-2' href="/about" >About</Link>
      </Stack>
    </>
  )
}

export default Sidebar
