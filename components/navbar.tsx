"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function Navbar() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header 
      data-slot="navbar" 
      className={cn(
        "w-full z-50",
        isHomePage 
          ? "absolute top-0 left-0 right-0 bg-transparent border-b border-white/10" 
          : "sticky top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      )}
    >
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Marleen" width={28} height={28} />
          <span className={cn(
            "text-sm font-semibold tracking-tight",
            isHomePage && "text-white"
          )}>Marleen</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className={cn(
              "text-xs font-medium transition-colors",
              isHomePage 
                ? "text-white/70 hover:text-white" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Beranda
          </Link>
          <Link 
            href="/explore" 
            className={cn(
              "text-xs font-medium transition-colors",
              isHomePage 
                ? "text-white/70 hover:text-white" 
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Jelajahi
          </Link>
          <Link href="/subscribe">
            <Button 
              size="sm" 
              variant={isHomePage ? "secondary" : "default"}
              className="text-xs"
            >
              Langganan
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export { Navbar }
