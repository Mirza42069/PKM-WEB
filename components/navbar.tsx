"use client"

import Link from "next/link"
import Image from "next/image"

function Navbar() {
  return (
    <header data-slot="navbar" className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Marleen" width={28} height={28} />
          <span className="text-sm font-semibold tracking-tight">Marleen</span>
        </Link>
        
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            Beranda
          </Link>
          <Link href="/explore" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
            Jelajahi
          </Link>
        </nav>
      </div>
    </header>
  )
}

export { Navbar }
