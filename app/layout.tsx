import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Zwansave Dashboard</title>
        <meta name="description" content="Manage Chrome's memory and CPU consumption" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
