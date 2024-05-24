import {Link, NavLink} from "react-router-dom"
import {LazyLoadImage} from "react-lazy-load-image-component"
import logo from "../assets/images/logo.png"
import {useState} from "react"

export default function Header() {
    const [openMobileNav, setOpenMobileNav] = useState<boolean>(false)

    const toggleMobileNav = () => {
        setOpenMobileNav(!openMobileNav)
    }

    const navLinkShape = "w-[120px] md:w-[70px] sm:w-[40px]"
    const navLinkPositioning = "mx-[32px] flex items-center justify-center whitespace-nowrap"
    const navLinkStyle = "text-xl md:text-lg sm:text-base font-semibold"
    const navLinkClasses = navLinkShape + " " + navLinkPositioning + " " + navLinkStyle
    const mobileNavLinkClasses = "flex items-center justify-center text-lg font-bold"

    return (
        <>
            <nav
                className="w-[100%] h-[124px] md:h-[100px] sm:h-[100px] xsm:h-[80px] mt-[12px] px-[48px] md:px-[18px] sm:px-[18px] xsm:px-[18px] py-[6px] bg-[white] flex justify-between"
            >
                <div>
                    <Link to="/"><LazyLoadImage alt="Logo" src={logo} className="h-[100%]"/></Link>
                </div>

                <div className="md:hidden sm:hidden xsm:hidden">
                    <ul className="flex justify-between h-[100%]">
                        <li className={navLinkClasses}>
                            <NavLink to="/" className="hover:text-[#ae000d]">HOME</NavLink>
                        </li>
                        <li className={navLinkClasses}>
                            <NavLink to="/vending-machines" className="hover:text-[#ae000d]">VENDING MACHINES</NavLink>
                        </li>
                        <li className={navLinkClasses}>
                            <NavLink to="/contact" className="hover:text-[#ae000d]">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:block sm:block xsm:block w-[32px] bg-pink justify-center">
                    <div className="w-[100%] h-[100%] relative flex flex-col justify-center" onClick={toggleMobileNav}>
                        <div
                            className="w-[100%] h-[6%] bg-black rounded transition-transform"
                            style={
                                openMobileNav
                                    ? {position: "absolute", transform: "rotate(45deg)"}
                                    : {margin: "0 0 8% 0"}
                            }
                        ></div>
                        <div
                            className="w-[100%] h-[6%] bg-black rounded transition-transform"
                            style={
                                openMobileNav
                                    ? {position: "absolute", transform: "rotate(45deg)"}
                                    : {margin: "0 0 8% 0"}
                            }
                        ></div>
                        <div
                            className="w-[100%] h-[6%] bg-black rounded transition-transform"
                            style={openMobileNav ? {position: "absolute", transform: "rotate(-45deg)"} : {}}
                        ></div>
                    </div>
                </div>
            </nav>

            {/* MOBILE NAV */}
            <div className="w-[100%] bg-white py-[24px] transition-all overflow-hidden"
                 style={openMobileNav ? {} : {height: "0", padding: "0"}}>
                <ul className="flex flex-col justify-evenly items-center h-[100%]">
                    <li className={mobileNavLinkClasses + " pb-[8px]"}>
                        <NavLink to="/" className="">HOME</NavLink>
                    </li>
                    <li className={mobileNavLinkClasses + " pb-[8px]"}>
                        <NavLink to="/vending-machines" className="">VENDING MACHINES</NavLink>
                    </li>
                    <li className={mobileNavLinkClasses}>
                        <NavLink to="/contact" className="">CONTACT</NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}