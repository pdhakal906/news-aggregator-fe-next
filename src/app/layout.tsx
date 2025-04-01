// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { Analytics } from "@vercel/analytics/react"
import '@mantine/core/styles.css';


import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import AppLayout from "./appLayout";
import "./globals.css";

export const metadata = {
  title: "Pratik Dhakal | Full-Stack Developer",
  description: "Web Developer from Nepal specializing in JavaScript and Python"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <ColorSchemeScript />
      </head>
      <body>

        <MantineProvider>
          <AppLayout>
            {children}
          </AppLayout>
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}