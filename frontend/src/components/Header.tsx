import {Link, NavLink} from "react-router-dom"
import {LazyLoadImage} from "react-lazy-load-image-component"
import logo from "../assets/images/logo.png"

export default function Header() {
    const navLinkClasses = "w-[100px] h-[100%] mx-[32px] flex items-center justify-center text-xl font-semibold"

    return (
        <>
            <nav className="w-[100%] mt-[12px] px-[48px] py-[6px] bg-[white] flex justify-between xsm:flex-col">
                <div>
                    <Link to="/"><LazyLoadImage alt="Logo" src={logo} className="w-[120px]"/></Link>
                </div>

                <div>
                    <ul className="flex justify-between h-[100%]">
                        <li className={navLinkClasses}>
                            <NavLink to="/" className="hover:text-[#ae000d]">HOME</NavLink>
                        </li>
                        <li className={navLinkClasses}>
                            <NavLink to="/about" className="hover:text-[#ae000d]">ABOUT</NavLink>
                        </li>
                        <li className={navLinkClasses}>
                            <NavLink to="/contact" className="hover:text-[#ae000d]">CONTACT</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}