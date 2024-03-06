import type { Metadata } from 'next'
import { Inter, Abhaya_Libre } from 'next/font/google'
import './globals.css'

const abhaya_Libre = Abhaya_Libre({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-abhaya-libre',
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'A simple weather app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={abhaya_Libre.className}>{children}</body>
    </html>
  )
}
