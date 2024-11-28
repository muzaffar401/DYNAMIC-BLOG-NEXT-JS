"use client"
import { CogIcon, HomeIcon, InfoIcon, PencilIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
    const pathName = usePathname()
    const links = [
        {
            icon: PencilIcon,
            href: "/",
            text: "Writing",
        },
        {
            icon:CogIcon,
            href:"/projects",
            text:"Projects",
        },
        {
            icon:InfoIcon,
            href:"/about",
            text:"About",
        }
    ]
    return (
        <nav className="relative top-8 w-full">
            <div className="flex justify-between items-center md:max-w-2xl max-w-lg sm:px-4 px-2 mx-auto">
                <Link href={"/"} className="rounded-full shadow dark:border-gray-700 p-2 border">
                    <HomeIcon />
                </Link>
                <ul className="rounded-full flex items-center shadow px-3 font-medium dark:text-white text-black dark:border-gray-700 border">
                    {links.map((link) => <Link href={link.href} key={link.text} className={`relative flex items-center space-x-1 px-3 py-2 hover:text-purple-500 dark:hover:text-purple-400 ${link.href === pathName?"text-purple-600":""}`}>
                    <link.icon className="w-4 h-4"/>
                    <span>{link.text}</span>
                    </Link>)}
                </ul>
                <ThemeToggle/>
            </div>
        </nav>
    )
}

export default Navbar