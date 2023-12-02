import Navbar from "./layout/Navbar"
import HeroSection from "./layout/HeroSection"
import GivingSection from "./layout/GivingSection"
import CelebrateSection from "./layout/CelebrateSection"
import GiftSection from "./layout/GiftSection"
import NewGiftSection from "./layout/NewGiftSection"
import MessageSection from "./layout/MessageSection"
import Footer from "./layout/Footer"

export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto relative overflow-hidden font-primary bg-body-color dark:bg-body-color-dark">
      <Navbar/>
      <HeroSection/>
      <GivingSection/>
      <CelebrateSection/>
      <GiftSection/>
      <NewGiftSection/>
      <MessageSection/>
      <Footer/>
    </main>
  )
}
