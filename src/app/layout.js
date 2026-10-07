import { Playfair_Display, Inter, Cairo } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { LangProvider } from '@/context/LangContext'
import I18nProvider from '@/components/I18nProvider'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
})

export const metadata = {
  title: 'Star Plus Barber',
  description: 'Premium barber shop in Riyadh',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${inter.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <I18nProvider>
          <LangProvider>
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </LangProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
