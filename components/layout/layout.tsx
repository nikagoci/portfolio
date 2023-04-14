import { ReactNode } from "react"

import Footer from "./footer"
import Navbar from "./navbar/navbar"
import SocialLinks from "../shared/social-links"

interface Props {
    children: ReactNode
}

export default function Layout({children}: Props) {
    return (
        <>
            <Navbar />
                <main>{children}</main>
                <SocialLinks leftSide={true} />
                <SocialLinks leftSide={false} />
            <Footer />
        </>
    )
}