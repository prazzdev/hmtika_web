import { useState } from "react"
import { useNavigate } from "react-router-dom"
import HeadLink from "./Partials/HeadLink"
import NavMenu from "./NavMenu"
const logo = './image/logo.webp'

const Header = () => {
    const [navMenu, setNavMenu] = useState(false)
    const navigate = useNavigate()
    const NavigationMenu = () => {
        setNavMenu(!navMenu)
    }

    return (
        <>
        <header id="nav"
            className="p-4 bg-[#00ADB5] text-gray-100">
            <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <HeadLink target="/" text="Home" />
                    </li>
                    <li className="flex">
                        <HeadLink target="/about" text="About" />
                    </li>
                    <li className="flex">
                        <HeadLink target="/team" text="Team" />
                    </li>
                </ul>
                <a  type="button" 
                    onClick={() => navigate('/')} 
                    aria-label="Back to homepage" 
                    className="flex items-center p-2">
                    <img 
                        src={logo}
                        alt="" 
                        className="h-[33px] lg:h-[60px] rounded-full"
                    />
                    <h1 className="lg:hidden ml-3 font-bold text-lg">HMTIKA STB</h1>
                </a>
                <ul className="items-stretch hidden space-x-3 md:flex">
                    <li className="flex">
                        <HeadLink target="/event" text="Event" />
                    </li>
                    <li className="flex">
                        <HeadLink target="/info" text="Info" />
                    </li>
                    <li className="flex">
                        <HeadLink target="/gallery" text="Gallery" />
                    </li>
                </ul>
                <button 
                    id="hamburger" 
                    title="Button" 
                    type="button" 
                    onClick={NavigationMenu}
                    className="p-4 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
        {navMenu ? <NavMenu /> : null}
        </>
    )
}

export default Header