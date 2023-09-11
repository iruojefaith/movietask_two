import Image from 'next/image'
import Header from './Home/Header'
import Nav from './components/Nav'

export default function Home() {
  return (
    <>
    <main className="bg flex h-[50rem] min-w-full flex-col items-center justify-between px-24 relative">
      <Nav />
    <Header />

    

    </main>
    </>
    
  )
}
