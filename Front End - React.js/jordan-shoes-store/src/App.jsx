import './App.css'
import Header from './components/Header'
import SectionCards from './components/SectionCards'
import SectionHero from './components/SectionHero'
import Section from './components/Section'

const cardsData = 
[
  { 
    key:"1",
    imageUrl:"./1.png",
    alt:"Air Jordan 1 Mid Dutch Green",
    modelo:"Air Jordan 1 Mid Dutch Green",
    marca:"Tênis Air Jordan",
    preco:"1.199,99"
  },
  { 
    key:"2",
    imageUrl:"./2.png",
    alt:"Air Jordan 1 High Zoom CMFT Tropical Twist",
    modelo:"Air Jordan 1 High Zoom CMFT Tropical Twist",
    marca:"Tênis Air Jordan",
    preco:"1.049,00"
  },
  { 
    key:"3",
    imageUrl:"./3.png",
    alt:"Air Jordan 1 Mid Dutch Purple",
    modelo:"Air Jordan 1 Mid Dutch Purple",
    marca:"Tênis Air Jordan",
    preco:"1.350,00"
  },
  { 
    key:"4",
    imageUrl:"./4.png",
    alt:"Air Jordan 1 Mid GS - Light Smoke Grey",
    modelo:"Air Jordan 1 Mid GS - Light Smoke Grey",
    marca:"Tênis Air Jordan",
    preco:"1.585,00"
  },
  { 
    key:"5",
    imageUrl:"./5.png",
    alt:"Air Jordan 1 Mid SE Bright Citrus",
    modelo:"Air Jordan 1 Mid SE Bright Citrus",
    marca:"Tênis Air Jordan",
    preco:"949,99"
  },
  { 
    key:"6",
    imageUrl:"./6.png",
    alt:"Air Jordan 1 Mid Grey Camo",
    modelo:"Air Jordan 1 Mid Grey Camo",
    marca:"Tênis Air Jordan",
    preco:"999,99"
  },
  { 
    key:"7",
    imageUrl:"./7.png",
    alt:"Air Jordan 1 Mid Grey Camo",
    modelo:"Air Jordan 1 Mid Grey Camo",
    marca:"Tênis Air Jordan",
    preco:"999,99"
  },
  { 
    key:"8",
    imageUrl:"./8.png",
    alt:"Air Jordan 1 Mid Grey Camo",
    modelo:"Air Jordan 1 Mid Grey Camo",
    marca:"Tênis Air Jordan",
    preco:"999,99"
  },

];

export default function App() {

  return (
    <div className='app'>
      <Header />
      <SectionHero />
      <main>
        <Section>
          {cardsData.map(function (item) {
                return (
                  <SectionCards
                    key={item.key}
                    imageUrl={item.imageUrl}
                    alt={item.alt}
                    modelo={item.modelo}
                    marca={item.marca}
                    preco={item.preco}
                  />
                );
          })}
        </Section>
      </main>
    </div>
  )
}

