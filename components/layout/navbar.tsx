import Image from "next/image";
import Navlinks from "./navlinks";

export default function Navbar() {
    return (
        <header className="py-8">
            <nav className="flex items-center justify-between px-8 mx-auto lg:px-12 ">
                <div>
                    <Image src='/images/logo.svg' alt='s' width={40} height={40} />
                </div>
                <div className="items-center hidden md:flex">
                    <Navlinks />
                </div>
                <div>
                    
                </div>
            </nav>
        </header>
    )
}