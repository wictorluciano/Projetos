import Link from "next/link";
import Image from "next/image";
import Responsive from "./Responsive";
import Wictor from "../assets/wictor-icon.svg"

export default function Footer() {
    return (
        <footer>
            <Responsive>
                <div className="w-full h-[60px] flex items-center justify-center">
                    <Link href="/">
                        <Image
                            src={Wictor}
                            alt="wictor-icon"
                            className="w-[100px] h-[22px] xl:w-[150px] xl:h-[35px]"
                        />
                    </Link>
                </div>
            </Responsive>
        </footer>
    )
}