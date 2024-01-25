import { Inter } from 'next/font/google'
import './globals.css'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CareerCraze Website',
  description: 'Job listing and career development website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-[#e9d5ff] via-[#fdf4ff] to-[#f5f3ff]`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
