import Link from "next/link"
import { Button } from "./ui/button"
// import navBar from "./components/navBar"
import NavBar from "@/components/NavBar"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="xl:py-8 py:8 mb-5 text-white flex items-center justify-between xl:mr-10   ">
 
        <div className="container mx-aut0 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">Rana's</span>
        </h1>
        </Link>
        </div>
        <div className="xl:flex hidden items-center gap-8">
          
            <NavBar />
            <Link href='/contact' className="items-center justyfy-between">
                <Button className="mt-2">Hire Me</Button>
            </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
    </header>
  )
}

export default Header;