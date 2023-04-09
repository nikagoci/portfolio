import Button from "../shared/Button"

const navTexts = [
    { text: 'About', to: '#about' },
    { text: 'Experience', to: '#experience' },
    { text: 'Projects', to: '#projects' },
    { text: 'Contact', to: '#contact' },
]


export default function Navlinks() {
    return (
        <>
            <ul className="flex mr-8 gap-x-8 ">
                {navTexts.map(el => (
                    <li className="transition duration-300 cursor-pointer text-lightslate hover:text-green">{el.text}</li>
                ))}
            </ul>
            <Button>Resume</Button>
        </>

    )
}