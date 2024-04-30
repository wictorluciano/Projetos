import Header from './components/Header'
import SectionHero from './components/SectionHero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Services from './components/SectionServices/Services'
import Skills from './components/Skills/Skills'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className='flex flex-col gap-14 xl:gap-0 max-w-[1139px] mb-1 mx-auto'>
      <Header />
        <main className='flex flex-col gap-14 xl:gap-28 max-w-[1139px] xl:mt-14 xl:mb-28'>
          <SectionHero />
          <About />
          <Projects />
          <Services />
          <Skills />
        </main>
      <Footer />
    </div>
  )
}