'use client'
import Link from "next/link"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

const link = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Services",
        path: "/services",
    },
    {
        name: "Work",
        path: "/work",
    },
    {
        name: "Resume",
        path: "/resume",
    },
    {
        name: "Contact",
        path: "/contact",
    },
  
]

const NavBar = () => { 
    const pathname = usePathname();
    console.log(pathname)
    
  return (
    <nav className="flex gap-8">
    {link.map((link , index) => {
        return(
            <Link  key={index} href={link.path}
                 className={`${
                link.path === pathname && 
                "text-accent border-b-2 border-accent"} 
                capitalize font-medium hover:text-accent trancsition-all`}>
                {link.name}
            </Link>
        )
    })}
    </nav>
  )
}

export default NavBar;