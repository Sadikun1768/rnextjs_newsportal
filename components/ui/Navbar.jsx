"use client"
import Link from "next/link"
import { NavigationMenu } from "../ui/navigation-menu"
import { NavigationMenuList } from "../ui/navigation-menu"
import { NavigationMenuItem } from "../ui/navigation-menu"
import { NavigationMenuTrigger } from "../ui/navigation-menu"
import { NavigationMenuContent } from "../ui/navigation-menu"
import { NavigationMenuLink } from "../ui/navigation-menu"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { IoMenuOutline } from "react-icons/io5";
import { usePathname } from "next/navigation"


export default function Navbar() {

    const pathname = usePathname()

    
    return (

        <header className="py-4 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* logo */}
                <div className="text-xl font-bold">
                    <Link href="/" className="text-orange-700 font-bold text-xl">News Portal</Link>
                </div>
                {/* end logo */}

                {/* desktop menu */}

              <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex items-center space-x-3">
                            <NavigationMenuLink href="/news" className={`${pathname === "/news" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>News</NavigationMenuLink>
                        </NavigationMenuItem>

                <NavigationMenuItem>
                            <NavigationMenuLink href="/services" className={`${pathname === "/services" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>Services</NavigationMenuLink>
                            {/* <NavigationMenuContent>
                                <ul className="shadow-lg bg-white p-4 rounded-lg">
                                    <li><NavigationMenuLink href="/services/web-design" className={`${pathname === "/services/web-design" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>Web Design</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/development" className={`${pathname === "/services/development" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>Development</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/mobile-app" className={`${pathname === "/services/mobile-app" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>Mobile App</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/seo" className={`${pathname === "/services/seo" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>Seo</NavigationMenuLink></li>
                                </ul>
                            </NavigationMenuContent> */}
                        </NavigationMenuItem> 
                        

                           <NavigationMenuItem>
                            <NavigationMenuLink href="/about" className={`${pathname === "/about" ? "font-semibold text-red-500"  : "" } hover:text-cyan-500`} >About</NavigationMenuLink>
                            
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/contact" className={`${pathname === "/contact" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/login" className={`${pathname === "/login" ? "font-semibold text-red-500" : ""} hover:text-cyan-500`}>LogIn</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> 

             {/*end desktop menu */}

                {/* color mode and button */}
            <div className="hidden lg:flex items-center space-x-8">
                <div className="flex items-center">
                    <span className="mr-2">Dark Mode</span>
                    <Switch />
                </div>
                <Button variant="default">Login</Button>
            </div>


                {/* mobile hamburger menu */}
                <div className="lg:hidden">
                    <Button variant="outline" size="lg">
                         <IoMenuOutline className="w-8 h-8" /> 
                        {/* <IoMenuOutline className="text-3xl" /> */}

                    </Button>
                </div>


                {/* end mobile hamburger menu */}

            </nav>
        </header >




    )
}
