import Image from "next/image";
import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import {AnimatePresence} from 'framer-motion'

import Navlinks from "./navlinks";
import BurgerMenu from "./burger-menu";

const navTexts = [
    { text: 'About', to: '#about' },
    { text: 'Experience', to: '#experience' },
    { text: 'Projects', to: '#projects' },
    { text: 'Contact', to: '#contact' },
]

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        
            <header className="py-8">
                <nav className="flex items-center justify-between def-container">
                    <div className="w-10">
                        <Image src='/images/logo.svg' alt='logo' className="w-auto h-auto " width={40} height={40} />
                    </div>
                    <div className="items-center hidden md:flex">
                        <ul className="flex mr-8 gap-x-8 ">
                            <Navlinks navTexts={navTexts} />
                        </ul>
                    </div>
                    
                        <div className="flex md:hidden">
                            <RxHamburgerMenu className="cursor-pointer text-green" size={30} onClick={() => setShowMenu(!showMenu)} />
                            <AnimatePresence>
                                {showMenu && <BurgerMenu key={String(showMenu)} navTexts={navTexts} setShowMenu={setShowMenu} />}

                            </AnimatePresence>
                        </div>
                </nav>
            </header>
    )
}