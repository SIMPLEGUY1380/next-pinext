'use client'

import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems: {label: string, href: string}[] = [
        { label: "خانه", href: "#خانه" },
        { label: "خدمات", href: "#خدمات" },
        { label: "نمونه کار", href: "#نمونه_کار" },
        { label: "مقالات", href: "#مقالات" },
        { label: "ارتباط با ما", href: "#ارتباط_با_ما" },
        { label: "سوالات متداول", href: "#سوالات_متداول" }
    ].reverse();

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <>
            <nav className="h-25 flex z-40 gap-13.75 bg-background items-center justify-between px-5">
                <img src="logo.svg" alt="logo" className="w-19.5" />
                <div className="h-full hidden md:flex w-[60%] justify-center items-center">
                    <ul className="flex justify-center items-center gap-5">
                        {menuItems.map(({ label, href }) => (
                            <li className="text-[14px] md:text-[16px]" key={href}>
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:hidden" onClick={() => setIsMenuOpen(v => !v)}>
                    <img src="/menu.png" alt="menu" />
                </div>
                <div className="bg-accent hidden md:flex md:px-3 md:py-2 text justify-center items-center px-6 py-4 rounded-lg">
                    <h5 className="md:hidden lg:block font-medium">تماس بگیرید</h5>
                    <p className="md:block lg:hidden text-[16px]">تماس بگیرید</p>
                </div>
            </nav>

            <MobileMenu menuItems={menuItems} isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </>
    )
}

export default Navbar