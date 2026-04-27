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

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news">News</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger href="/services">Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul>
                                    <li><NavigationMenuLink href="/services/web-design">Web Design</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/development">Development</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/mobile-app">Mobile App</NavigationMenuLink></li>
                                    <li><NavigationMenuLink href="/services/seo">Seo</NavigationMenuLink></li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/news">About</NavigationMenuLink>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/news">Contact</NavigationMenuLink>
                        </NavigationMenuItem>
                           <NavigationMenuItem>
                            <NavigationMenuLink href="/news">LogIn</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>



                {/* color mode and button */}



            </nav>
        </header >




    )
}
