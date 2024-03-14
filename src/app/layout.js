import './globals.css'
import { Inter } from 'next/font/google' 
import Footer from './components/footer'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Darius',
  description: 'Développeur Mobile Flutter & Backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
