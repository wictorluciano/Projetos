import Form from "./Form";
import Responsive from "./Responsive";

export default function SectionContact() {
    return (
        <section id="contact" className="bg-scale-300 py-8">
            <Responsive>
                <div className="flex flex-col items-start md:items-center w-full gap-6 md:w-[600px] xl:items-center">
                    <h1 className="font-semibold text-2xl md:text-3xl xl:text-[32px]">Entre em contato</h1>
                    <Form />
                </div>
            </Responsive>
        </section>
    )
}