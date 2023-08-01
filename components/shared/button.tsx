import { ReactNode } from "react"

interface Props {
    children: ReactNode
    px?: string
    py?: string
}

export default function Button({ children, px, py }: Props) {
    return (
        <button className={`${px && py ? `${px} ${py}` : 'px-4 py-2'} transition duration-300 font-normal border rounded-md border-green text-green hover:bg-lightgreen`}>
            {children}
        </button>
    )
}