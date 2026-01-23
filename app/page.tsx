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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
          
          {/* Hero Content - Centered */}
          <div className="relative z-10 container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center">
            <div className="max-w-3xl">
              {/* Main Headline */}
              <h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
                style={{ letterSpacing: "0.02em" }}
              >
                Marleen
              </h1>
              
              {/* Tagline */}
              <p className="text-base md:text-lg text-white/80 mb-10 max-w-lg mx-auto leading-relaxed">
                Sustainable marine tourism platform. Discover Indonesia&apos;s ocean wonders while supporting conservation.
              </p>
              
              {/* CTA Button */}
              <div>
                <Link href="/explore">
                  <Button 
                    size="lg" 
                    className="text-sm px-8 py-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Jelajahi Destinasi
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Features Section - Glass Cards */}
          <div className="relative z-10 mt-auto">
            <div className="container mx-auto px-4 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Feature 1 */}
                <div className="glass glass-hover rounded-xl p-6 transition-colors duration-300">
                  <p className="text-xs text-white/40 font-mono mb-3">[01]</p>
                  <h3 className="text-sm font-semibold mb-2 text-white">Carbon Calculator</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Setiap paket wisata menampilkan estimasi jejak karbon perjalanan Anda.
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="glass glass-hover rounded-xl p-6 transition-colors duration-300">
                  <p className="text-xs text-white/40 font-mono mb-3">[02]</p>
                  <h3 className="text-sm font-semibold mb-2 text-white">Operator Tersertifikasi</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Hanya operator dengan sertifikasi ramah lingkungan yang terdaftar.
                  </p>
                </div>
                
                {/* Feature 3 */}
                <div className="glass glass-hover rounded-xl p-6 transition-colors duration-300">
                  <p className="text-xs text-white/40 font-mono mb-3">[03]</p>
                  <h3 className="text-sm font-semibold mb-2 text-white">Konservasi Aktif</h3>
                  <p className="text-xs text-white/60 leading-relaxed">
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
