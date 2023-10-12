import './globals.css'
import { ThemeProvider } from './components/theme-provider'

export const metadata = {
  title: 'christmas',
  description: 'Responsive christmas website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider attribute="class">
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
