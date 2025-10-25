"use client";
import ChatComponent from "@/components/Chat";
import CustomThemeSwitcher from "@/components/CustomThemeSwitcher";
import {
  Box,
  Paper,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface AppLayoutPropsType {
  children: React.ReactNode;
}

const AppLayout = (props: AppLayoutPropsType) => {
  const { children } = props;

  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Paper
        styles={{
          root: {
            backgroundColor:
              colorScheme === "dark" || colorScheme === "auto"
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
          },
        }}
      >
        <div className="fixed top-0  justify-self-end" style={{
          zIndex: 300,
          color: "var(--mantine-color-text)",
          fontWeight: "bold",
          fontSize: "14px",
          backgroundColor: "color-mix(in srgb, var(--mantine-color-body) 80%, transparent)",
          padding: "10px 20px",
          borderBottomRightRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}>
          <div className="flex gap-5 items-center">
            <Link href="/" scroll={true}>
              Home
            </Link>{" "}
            <Link href="#about" scroll={true}>
              About
            </Link>
            <Link href="#projects" scroll={true}>
              Projects
            </Link>{" "}
            <Link href="/news">News</Link>
            <CustomThemeSwitcher />
          </div>
        </div>
        <Box>
          {children}
          <ChatComponent />
        </Box>
      </Paper>
    </>
  );
};

export default AppLayout;
