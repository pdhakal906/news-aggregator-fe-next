export const metadata = {
  title: 'News of Nepal',
  description: 'Aggregated News of Nepal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>

      {children}

    </>
  );
}