"use client"


import { RxCross2 } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function MobileMenu() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div>
          {/* mobile hamburger menu */}
                <div className="lg:hidden">
                    {/* onClick={() => setIsMenuOpen(!isMenuOpen)}  */}
                    <Button onClick={toggleMenu} variant="outline" size="lg">
                         {/* <IoMenuOutline className="w-8 h-8" />  */}
                         {
                            isMenuOpen ? <RxCross2 /> : <IoMenuOutline />
                         }
                  

                    </Button>
                </div>


                {/* end mobile hamburger menu */}
    </div>
  )
}
