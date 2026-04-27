import Link from "next/link"

export default function Navbar() {
    return (

        <header>
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-8">

                <div className="flex gap-3 items-center justify-center">
                    {/* logo */}


                    {/* 59minits */}

                    <div className="">
                        <Link href="/">Logo</Link>
                    </div>


                    {/* menu */}
                    <Link href="/">Home</Link>


                    {/* color mode and button */}


                </div>
            </nav>
        </header>




    )
}
