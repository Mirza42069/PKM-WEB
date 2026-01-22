import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"

const listings = [
  {
    id: 1,
    title: "Raja Ampat Eco-Diving Experience",
    operator: "Blue Ocean Tours",
    location: "Raja Ampat, Papua Barat",
    category: "Conservation Diving",
    price: 2500000,
    rating: 4.9,
    reviews: 128,
    duration: "3 Hari",
    certified: true,
    carbonKg: 45,
  },
  {
    id: 2,
    title: "Bunaken Coral Watching Tour",
    operator: "Marine Green Divers",
    location: "Bunaken, Sulawesi Utara",
    category: "Coral Watching",
    price: 450000,
    rating: 4.8,
    reviews: 89,
    duration: "1 Hari",
    certified: true,
    carbonKg: 12,
  },
  {
    id: 3,
    title: "Komodo Wildlife Expedition",
    operator: "Komodo Eco Adventures",
    location: "Labuan Bajo, NTT",
    category: "Wildlife Experience",
    price: 1800000,
    rating: 4.9,
    reviews: 256,
    duration: "2 Hari",
    certified: true,
    carbonKg: 28,
  },
  {
    id: 4,
    title: "Wakatobi Sustainable Island Hopping",
    operator: "Wakatobi Green Travel",
    location: "Wakatobi, Sulawesi Tenggara",
    category: "Eco-Touring",
    price: 1200000,
    rating: 4.7,
    reviews: 67,
    duration: "2 Hari",
    certified: false,
    carbonKg: 32,
  },
  {
    id: 5,
    title: "Derawan Turtle Sanctuary Visit",
    operator: "Derawan Conservation",
    location: "Derawan, Kalimantan Timur",
    category: "Wildlife Experience",
    price: 650000,
    rating: 4.8,
    reviews: 142,
    duration: "1 Hari",
    certified: true,
    carbonKg: 15,
  },
  {
    id: 6,
    title: "Gili Islands Reef Restoration",
    operator: "Gili Eco Trust",
    location: "Gili Trawangan, NTB",
    category: "Conservation Diving",
    price: 800000,
    rating: 4.6,
    reviews: 98,
    duration: "1 Hari",
    certified: true,
    carbonKg: 8,
  },
]

const categories = [
  { name: "Semua", value: "all" },
  { name: "Eco-Touring", value: "eco-touring" },
  { name: "Coral Watching", value: "coral-watching" },
  { name: "Wildlife", value: "wildlife" },
  { name: "Diving", value: "diving" },
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)
}

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b py-10">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground mb-2 tracking-wide uppercase">
              Katalog
            </p>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
              Jelajahi Destinasi
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              Temukan pengalaman ekowisata bahari dengan operator tersertifikasi
            </p>
            
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Cari destinasi atau operator..." 
                className="max-w-sm"
              />
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat, i) => (
                  <Button
                    key={cat.value}
                    variant={i === 0 ? "default" : "outline"}
                    size="sm"
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground mb-6">
              Menampilkan <span className="font-medium text-foreground">{listings.length}</span> hasil
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {listings.map((listing) => (
                <Card key={listing.id} className="group flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-mono">
                        #{String(listing.id).padStart(2, "0")}
                      </span>
                      {listing.certified && (
                        <Badge variant="secondary" className="text-xs">
                          Tersertifikasi
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-sm font-semibold leading-snug">
                      {listing.title}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {listing.operator}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-3 flex-1">
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Lokasi</span>
                        <span className="text-foreground">{listing.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Durasi</span>
                        <span className="text-foreground">{listing.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Rating</span>
                        <span className="text-foreground">{listing.rating} ({listing.reviews})</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kategori</span>
                        <span className="text-foreground">{listing.category}</span>
                      </div>
                    </div>
                    
                    {/* Carbon Calculator Display */}
                    <div className="mt-4 pt-3 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Estimasi Karbon</span>
                        <span className="text-xs font-mono text-secondary font-medium">
                          ~{listing.carbonKg} kg CO2
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex items-center justify-between pt-3 border-t mt-auto">
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {formatPrice(listing.price)}
                      </p>
                      <p className="text-xs text-muted-foreground">per orang</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Detail
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
