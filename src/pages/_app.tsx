import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
