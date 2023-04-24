import Image from "next/image";
import { useEffect, useState } from 'react'
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
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
            setPrevScrollPos(currentScrollPos);
        };


        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible])

    useEffect(() => {
        if(showMenu){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [showMenu])


    return (
        
            <header className={`fixed py-4 w-full bg-navy transition shadow-lg duration-300 ease-in-out z-50 ${visible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <nav className={`flex items-center justify-between def-container`}>
                    <div onClick={scrollToTop} className="w-10 cursor-pointer">
                        <Image src='/images/logo.svg' alt='logo' className="w-full h-auto" width="0" height="0" sizes="100vw" />
                    </div>
                    <div className="items-center hidden md:flex">
                        <ul className="flex mr-8 gap-x-8 ">
                            <Navlinks mobile={false} navTexts={navTexts} />
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