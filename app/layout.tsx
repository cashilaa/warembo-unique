import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import AnimatedMain from './components/AnimatedMain'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WaremboUniqueOrg - Support and Advocacy',
  description: 'Supporting and empowering individuals through advocacy, resources, and community.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <AnimatedMain>{children}</AnimatedMain>
        <Footer />
      </body>
    </html>
  )
}

