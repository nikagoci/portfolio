import Button from "../../shared/Button"


interface Props {
    navTexts: {
        text: string;
        to: string;
    }[]
    px?: string;
    py?: string
}

export default function Navlinks({ navTexts, px, py }: Props) {
    return (
        <>

            {navTexts.map(el => (
                <li key={el.text} className="self-center transition duration-300 cursor-pointer text-lightslate hover:text-green">{el.text}</li>
            ))}
            {(px && py) ? <Button px={px} py={py}>Resume</Button> : <Button>Resume</Button>}

        </>

    )
}