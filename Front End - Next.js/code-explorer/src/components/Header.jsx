'use client'

import Link from "next/link";
import Responsive from "./Responsive";
import Image from "next/image";
import Wictor from "../assets/wictor-icon.svg"
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const click = () => setOpenMenu(!openMenu);

    const [openSubMenu, setOpenSubMenu] = useState(false);
    const clickSub = () => setOpenSubMenu(!openSubMenu);

    return (
        <header>
            <Responsive>
                <nav className="w-full h-[60px] flex items-center justify-between xl:h-[80px]">
                    <Link href="/">
                        <Image
                            src={Wictor}
                            alt="wictor-icon"
                            className="w-[100px] h-[22px] xl:w-[150px] xl:h-[35px]"
                        />
                    </Link>
                    {/*Menu Desktop*/}
                    <ul className="hidden relative lg:flex justify-between gap-8">
                        <Link href="/"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color  py-1 px-1 transition ease-in-out delay-150 duration-150">Home</li></Link>

                        <Link href="/About"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">About</li></Link>

                        <Link href="/#gallery"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">Gallery</li></Link>

                        <Link href="/#contact"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">Contact</li></Link>
                        
                        <li onClick={click} className="relative list-none float-left font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">
                            <div className="flex cursor-pointer items-center justify-center">Social {openMenu? <FiChevronUp /> : <FiChevronDown />}</div>
                            <ul className={`${openMenu? 'block' : 'hidden'} absolute left-0 p-2 bg-white rounded-b-lg transition ease-in-out delay-500 duration-500`}>
                                <Link target="_blanck" href="https://github.com/wictorluciano"><li className="font-medium text-sm hover:border-b hover:border-brand-color hover:text-brand-color py-2 px-1 transition ease-in-out delay-150 duration-150">GitHub</li></Link>
                                <Link target="_blanck" href="https://www.linkedin.com/in/wictorluciano/"><li className="font-medium text-sm hover:border-b hover:border-brand-color hover:text-brand-color py-2 px-1 transition ease-in-out delay-150 duration-150">LinkedIn</li></Link>
                            </ul>
                        </li>
                    </ul>

                    {/*Menu Mobile*/}
                    <ul className="lg:hidden relative flex justify-between gap-6">
                        <li className="relative rounded-lg font-medium hover:border hover:bg-scale-100/5  hover:border-scale-300/50 hover:text-brand-color">
                            <div onClick={click} className="flex cursor-pointer items-center justify-center p-2">{openMenu? <TfiClose /> : <CiMenuFries />}</div>
                            <ul className={`${openMenu? 'block' : 'hidden'} absolute right-0 mt-3 p-2 bg-white rounded-lg`}>

                                <Link href="/"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color  py-1 px-1 transition ease-in-out delay-150 duration-150">Home</li></Link>

                                <Link href="/About"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">About</li></Link>

                                <Link href="/#gallery"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">Gallery</li></Link>

                                <Link href="/#contact"><li className="font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">Contact</li></Link>

                                 {/*SubMenu*/}
                                <li onClick={clickSub} className="relative flex flex-col items-start justify-center font-medium hover:border-b hover:border-brand-color hover:text-brand-color py-1 px-1 transition ease-in-out delay-150 duration-150">
                                    <div className="flex cursor-pointer items-center">Social {openSubMenu? <FiChevronUp /> : <FiChevronDown />}</div>
                                    <ul className={`${openSubMenu? 'block' : 'hidden'} left-0 p-1 bg-white rounded-b-lg transition ease-in-out delay-500 duration-500`}>
                                        <Link target="_blanck" href="https://github.com/wictorluciano"><li className="font-medium text-xs hover:border-b hover:border-brand-color hover:text-brand-color py-2 transition ease-in-out delay-150 duration-150">GitHub</li></Link>
                                        <Link target="_blanck" href="https://www.linkedin.com/in/wictorluciano/"><li className="font-medium text-xs hover:border-b hover:border-brand-color hover:text-brand-color py-2 transition ease-in-out delay-150 duration-150">LinkedIn</li></Link>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Responsive>
        </header>
    )
}