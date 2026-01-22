import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"

const services = [
  {
    title: "Eco-Touring",
    description: "Perjalanan wisata laut berkelanjutan dengan jejak karbon minimal.",
    price: "Rp1.500.000",
    code: "ECO",
  },
  {
    title: "Coral Watching",
    description: "Saksikan keindahan terumbu karang dengan panduan ahli biologi laut.",
    price: "Rp300.000",
    code: "CRL",
  },
  {
    title: "Wildlife Experience",
    description: "Berinteraksi dengan satwa liar laut secara etis dan aman.",
    price: "Rp500.000",
    code: "WLD",
  },
  {
    title: "Conservation Diving",
    description: "Penyelaman sambil berkontribusi pada restorasi terumbu karang.",
    price: "Rp800.000",
    code: "DIV",
  },
]

const destinations = [
  { name: "Raja Ampat", location: "Papua Barat", rating: "4.9", certified: true },
  { name: "Bunaken", location: "Sulawesi Utara", rating: "4.8", certified: true },
  { name: "Komodo", location: "NTT", rating: "4.9", certified: true },
  { name: "Wakatobi", location: "Sulawesi Tenggara", rating: "4.7", certified: false },
]

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Background Image */}
          <Image
            src="/home page photo.jpg"
            alt="Snorkeling di perairan Indonesia"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-xl">
              <p className="text-xs text-white/70 mb-3 tracking-wide uppercase">
                Platform Ekowisata Bahari
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Wisata Bahari
                <br />
                Berkelanjutan
              </h1>
              <p className="text-sm text-white/80 mb-8 max-w-md leading-relaxed">
                Jelajahi keindahan laut Indonesia sambil berkontribusi pada konservasi. 
                Setiap perjalanan membantu melindungi ekosistem laut.
              </p>
              <Link href="/explore">
                <Button size="lg">Jelajahi Destinasi</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <p className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
                Layanan
              </p>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                Pengalaman Ekowisata
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <Card key={service.title} className="group">
                  <CardHeader className="pb-3">
                    <div className="text-xs text-muted-foreground font-mono mb-2">
                      [{service.code}]
                    </div>
                    <CardTitle className="text-sm font-semibold">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-xs leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm font-semibold text-primary">{service.price}</p>
                    <p className="text-xs text-muted-foreground">per orang</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="border-t py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
                  Destinasi
                </p>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight">
                  Lokasi Populer
                </h2>
              </div>
              <Link href="/explore">
                <Button variant="outline" size="sm">Lihat Semua</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {destinations.map((dest) => (
                <Card key={dest.name} className="group">
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-sm">{dest.name}</h3>
                        <p className="text-xs text-muted-foreground">{dest.location}</p>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {dest.rating}
                      </span>
                    </div>
                    {dest.certified && (
                      <Badge variant="secondary" className="text-xs">
                        Tersertifikasi
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">[01]</p>
                <h3 className="text-sm font-semibold mb-2">Carbon Calculator</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Setiap paket wisata menampilkan estimasi jejak karbon perjalanan Anda.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">[02]</p>
                <h3 className="text-sm font-semibold mb-2">Operator Tersertifikasi</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hanya operator dengan sertifikasi ramah lingkungan yang terdaftar.
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono mb-2">[03]</p>
                <h3 className="text-sm font-semibold mb-2">Konservasi Aktif</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Sebagian hasil perjalanan dialokasikan untuk program konservasi laut.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
