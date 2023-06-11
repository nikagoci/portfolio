import { Dispatch, SetStateAction } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

import Navlinks from "./navlinks";

interface Props {
    navTexts: {
        text: string;
        to: string;
    }[]
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

export default function BurgerMenu({ navTexts, setShowMenu }: Props) {
    return (
        <>
            <div className="absolute top-0 left-0 w-full h-screen bg-black blur-3xl opacity-60" onClick={() => setShowMenu(false)} />
            <motion.div initial={{ width: 0, opacity: 0, }} animate={{ width: '60%', opacity: 1 }} exit={{ width: 0, opacity: 0 }} className="absolute top-0 right-0 z-20 flex items-center justify-center h-screen bg-navy">
                <ul className="flex flex-col items-center justify-center text-xl font-semibold gap-y-12">
                    <Navlinks mobile={true} navTexts={navTexts} px='px-12' py='py-4' />
                </ul>

                <AiOutlineClose className="absolute cursor-pointer text-green top-10 right-10" size={30} onClick={() => setShowMenu(false)} />
            </motion.div>
        </>
    )
}