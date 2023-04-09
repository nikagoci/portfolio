import { ReactNode } from "react"

import Footer from "./footer"
import Navbar from "./navbar/navbar"

interface Props {
    children: ReactNode
}

export default function Layout({children}: Props) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}