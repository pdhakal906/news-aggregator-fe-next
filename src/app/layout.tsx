// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { Analytics } from "@vercel/analytics/react"
import '@mantine/core/styles.css';


import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import Sidebar from "@/components/Sidebar";
import AppLayout from "./appLayout";
import "./globals.css";

export const metadata = {
  title: 'News Aggregator',
  description: 'News Aggregator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
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