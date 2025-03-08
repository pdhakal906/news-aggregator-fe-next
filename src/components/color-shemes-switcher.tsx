
"use client";

import { useMantineColorScheme, Button, Group } from "@mantine/core";

export function ColorSchemesSwitcher() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button onClick={() => setColorScheme("dark")}>Dark Theme</Button>
      <Button onClick={() => setColorScheme("light")}>Light Theme</Button>
      <Button onClick={() => setColorScheme("auto")}>System Theme</Button>
    </Group>
  );
}