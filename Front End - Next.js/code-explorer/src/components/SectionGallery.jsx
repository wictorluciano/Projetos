import Image from "next/image";
import Carousel from "./Carousel";
import Responsive from "./Responsive";

const images = [
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

export default function SectionGallery() {
    return (
        <section id="gallery" className="py-8">
            <Responsive>
                <div className="relative flex flex-col items-start md:items-center w-full gap-6 xl:items-center">

                    <h1 className="font-semibold text-2xl md:text-3xl xl:text-[32px]">Galeria de Imagens</h1>

                    <Carousel>
                        {images.map((img) => (
                            <img 
                                key={img} 
                                src={img}  
                                alt={img}
                                width={600}
                                height={400}
                            />
                        ))}
                    </Carousel>
                    
                </div>
            </Responsive>
        </section>
    )
}