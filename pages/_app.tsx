import Footer from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
     <Navbar/>
     <main>
      <Component {...pageProps} /></main>
     
     <Toaster position='top-center'/>
     <Footer/>
    </>
    )
}
