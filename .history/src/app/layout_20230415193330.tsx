import './globals.css'

export const metadata = {
  title: 'Spotify',
  description: 'Music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
