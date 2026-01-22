import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section - Full screen with integrated Features */}
        <section className="relative h-screen flex flex-col">
          {/* Background Image - Vibrant */}
          <Image
            src="/home page photo.jpg"
            alt="Snorkeling di perairan Indonesia"
            fill
            className="object-cover saturate-[1.15] contrast-[1.05]"
            priority
          />
          {/* Overlay gradient - darker at bottom for features readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 pt-16 pb-8 flex-1 flex items-center">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Marleen
              </h1>
              <p className="text-sm text-white/80 mb-8 max-w-md leading-relaxed">
                Sustainable marine tourism platform.
              </p>
              <Link href="/explore">
                <Button size="lg">Jelajahi Destinasi</Button>
              </Link>
            </div>
          </div>

          {/* Features Section - Merged with Hero */}
          <div className="relative z-10 mt-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs text-white/50 font-mono mb-2">[01]</p>
                  <h3 className="text-sm font-semibold mb-2 text-white">Carbon Calculator</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Setiap paket wisata menampilkan estimasi jejak karbon perjalanan Anda.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-mono mb-2">[02]</p>
                  <h3 className="text-sm font-semibold mb-2 text-white">Operator Tersertifikasi</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Hanya operator dengan sertifikasi ramah lingkungan yang terdaftar.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50 font-mono mb-2">[03]</p>
                  <h3 className="text-sm font-semibold mb-2 text-white">Konservasi Aktif</h3>
                  <p className="text-xs text-white/70 leading-relaxed">
                    Sebagian hasil perjalanan dialokasikan untuk program konservasi laut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
