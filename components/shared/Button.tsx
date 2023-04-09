import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Button({children}: Props) {
    return(
        <button className="px-4 py-2 transition duration-300 border rounded-md border-green text-green hover:bg-lightgreen">
            {children}
        </button>
    )
}