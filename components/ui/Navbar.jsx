import Link from "next/link"
import { NavigationMenu } from "../ui/navigation-menu"
import { NavigationMenuList } from "../ui/navigation-menu"
import { NavigationMenuItem } from "../ui/navigation-menu"
import { NavigationMenuTrigger } from "../ui/navigation-menu"
import { NavigationMenuContent } from "../ui/navigation-menu"
import { NavigationMenuLink } from "../ui/navigation-menu"



export default function Navbar() {
    return (

        <header className="py-4 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                {/* logo */}
                <div className="text-xl font-bold">
                    <Link href="/" className="text-orange-700 font-bold text-xl">News Portal</Link>
                </div>
                {/* end logo */}

                {/* menu */}

              <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex items-center space-x-3">
                            <NavigationMenuLink href="/news" className="hover:text-cyan-500 font-bold">News</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger href="/services" className="hover:text-cyan-500 font-bold">Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                    <li><NavigationMenuLink href="/services/web-design" className="hover:text-cyan-500 font-bold">Web Design</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/development" className="hover:text-cyan-500 font-bold">Development</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/mobile-app" className="hover:text-cyan-500 font-bold">Mobile App</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/seo" className="hover:text-cyan-500 font-bold">Seo</NavigationMenuLink></li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/about" className="hover:text-cyan-500 font-bold">About</NavigationMenuLink>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/contact" className="hover:text-cyan-500 font-bold">Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/login" className="hover:text-cyan-500 font-bold">LogIn</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu> 



                


                {/* color mode and button */}



            </nav>
        </header >




    )
}
