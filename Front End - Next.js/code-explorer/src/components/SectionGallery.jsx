import Image from "next/image";
import Carousel from "./Carousel";
import Responsive from "./Responsive";
import Image1 from "../assets/1.jpeg"
import Image2 from "../assets/1.jpeg"
import Image3 from "../assets/3.jpeg"
import Image4 from "../assets/4.jpeg"

const images = [Image1, Image2, Image3, Image4]

export default function SectionGallery() {
    return (
        <section id="gallery" className="py-8">
            <Responsive>
                <div className="relative flex flex-col items-start md:items-center w-full gap-6 xl:items-center">

                    <h1 className="font-semibold text-2xl md:text-3xl xl:text-[32px]">Galeria de Imagens</h1>

                    <Carousel>
                        {images.map((img) => (
                            <Image 
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