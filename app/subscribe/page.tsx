import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

export default function SubscribePage() {
  return (
    <div className="min-h-screen flex flex-col bg-foreground">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Badge */}
            <p className="text-xs font-mono text-primary mb-6 tracking-widest uppercase">
              Exclusive Membership
            </p>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Marleen Plus
            </h1>
            
            {/* Description */}
            <p className="text-base md:text-lg text-white/60 mb-10 max-w-md mx-auto leading-relaxed">
              Dapatkan akses ke diskon eksklusif untuk semua perjalanan ekowisata bahari di platform kami.
            </p>
            
            {/* Price */}
            <div className="mb-12">
              <span className="text-5xl md:text-6xl font-bold text-white">Rp99.000</span>
              <span className="text-lg text-white/50 ml-2">/bulan</span>
            </div>
            
            {/* Benefits Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 mb-10">
              <h2 className="text-sm font-semibold text-white mb-6 tracking-wide uppercase">
                Yang Anda Dapatkan
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">10% Diskon Semua Perjalanan</p>
                    <p className="text-xs text-white/50 mt-1">Hemat di setiap pemesanan</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Akses Prioritas Booking</p>
                    <p className="text-xs text-white/50 mt-1">Booking lebih awal dari member biasa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Laporan Jejak Karbon</p>
                    <p className="text-xs text-white/50 mt-1">Pantau kontribusi lingkungan Anda</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Kontribusi Konservasi</p>
                    <p className="text-xs text-white/50 mt-1">Donasi atas nama Anda setiap bulan</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <Button size="lg" className="px-12 py-6 text-base">
              Berlangganan Sekarang
            </Button>
            
            {/* Terms */}
            <p className="text-xs text-white/40 mt-6">
              Batalkan kapan saja. Tanpa komitmen. Tanpa biaya tersembunyi.
            </p>
            
            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link 
                href="/explore" 
                className="text-xs text-white/50 hover:text-white transition-colors"
              >
                Kembali ke Jelajahi Destinasi
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
