'use client';
import {
  ThemeIcon,
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlProps,
  useMantineColorScheme
} from "@mantine/core";

import { IconSun, IconMoonStars, IconDeviceDesktop } from "@tabler/icons-react";



const data: SegmentedControlItem[] = [
  {
    value: "false",
    label: (
      <ThemeIcon size="sm" variant="transparent" radius="xl" color="grey">
        <IconSun size="sm" />
      </ThemeIcon>
    )
  },
  {
    value: "",
    label: (
      <ThemeIcon size="sm" variant="transparent">
        <IconDeviceDesktop size="sm" radius="xl" color="grey" />
      </ThemeIcon>
    )
  },
  {
    value: "true",
    label: (

      <ThemeIcon size="sm" variant="transparent" radius="xl" color="grey">
        <IconMoonStars size="sm" />
      </ThemeIcon>

    )
  }
];


const CustomThemeSwitcher = (props: Omit<SegmentedControlProps, "data">) => {
  const { setColorScheme } = useMantineColorScheme();


  const handleChange = (value: string) => {
    if (value === "false") {
      setColorScheme("light");
    } else if (value === "true") {
      setColorScheme("dark");
    }
    else {
      setColorScheme("auto");
    }
  };


  return (
    <SegmentedControl data={data} size="xs" radius="xl" onChange={handleChange} {...props} />
  );
}

export default CustomThemeSwitcher