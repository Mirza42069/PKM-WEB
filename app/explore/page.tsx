"use client"

import * as React from "react"

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
    categoryValue: "diving",
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
    categoryValue: "coral-watching",
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
    categoryValue: "wildlife",
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
    categoryValue: "eco-touring",
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
    categoryValue: "wildlife",
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
    categoryValue: "diving",
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

function calculatePlusPrice(price: number) {
  return Math.round(price * 0.9)
}

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedListing, setSelectedListing] = React.useState<number | null>(null)
  const [showPlusPrice, setShowPlusPrice] = React.useState(false)

  // Filter listings based on category and search query
  const filteredListings = listings.filter((listing) => {
    const matchesCategory = activeCategory === "all" || listing.categoryValue === activeCategory
    const matchesSearch = searchQuery === "" || 
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.operator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  function handleDetailClick(listingId: number) {
    setSelectedListing(listingId)
    // Mockup: Just show an alert for now
    const listing = listings.find(l => l.id === listingId)
    if (listing) {
      alert(`Detail untuk: ${listing.title}\n\nIni adalah mockup. Halaman detail akan segera hadir!`)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="border-b py-12">
          <div className="container mx-auto px-4">
            <p className="text-xs text-muted-foreground mb-2 tracking-widest uppercase font-mono">
              Katalog
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Jelajahi Destinasi
            </h1>
            <p className="text-sm text-muted-foreground mb-8 max-w-md">
              Temukan pengalaman ekowisata bahari dengan operator tersertifikasi
            </p>
            
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative max-w-sm flex-1">
                <Input 
                  placeholder="Cari destinasi atau operator…" 
                  className="pl-4 pr-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Cari destinasi atau operator"
                  name="search"
                  autoComplete="off"
                />
                <svg 
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat.value}
                    variant={activeCategory === cat.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat.value)}
                    className={`transition-colors duration-200 ${
                      activeCategory === cat.value 
                        ? "ring-2 ring-primary/20 ring-offset-2 ring-offset-background" 
                        : "hover:bg-accent"
                    }`}
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
            {/* Results count with Marleen Plus toggle */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-xs text-muted-foreground">
                Menampilkan <span className="font-medium text-foreground">{filteredListings.length}</span> hasil
                {activeCategory !== "all" && (
                  <span> untuk kategori <span className="font-medium text-foreground">{categories.find(c => c.value === activeCategory)?.name}</span></span>
                )}
                {searchQuery && (
                  <span> dengan pencarian &ldquo;<span className="font-medium text-foreground">{searchQuery}</span>&rdquo;</span>
                )}
              </p>
              
              <Button
                variant={showPlusPrice ? "default" : "outline"}
                size="sm"
                onClick={() => setShowPlusPrice(!showPlusPrice)}
                className="transition-colors duration-200"
              >
                {showPlusPrice && (
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                Marleen Plus
              </Button>
            </div>
            
            {filteredListings.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Tidak ada destinasi yang cocok dengan filter Anda.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    setActiveCategory("all")
                    setSearchQuery("")
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredListings.map((listing) => (
                  <Card 
                    key={listing.id} 
                    className="group flex flex-col transition-shadow transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
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
                      <CardTitle className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
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
                          <span className="text-foreground text-right max-w-[60%]">{listing.location}</span>
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
                            ~{listing.carbonKg}&nbsp;kg CO2
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter className="flex flex-col gap-3 pt-3 border-t mt-auto">
                      {/* Price Section */}
                      <div className="w-full flex items-center justify-between">
                        <div>
                          {showPlusPrice ? (
                            <>
                              <p className="text-xs line-through text-muted-foreground">
                                {formatPrice(listing.price)}
                              </p>
                              <div className="flex items-center gap-2">
                                <p className="text-sm font-semibold text-primary">
                                  {formatPrice(calculatePlusPrice(listing.price))}
                                </p>
                                <span className="text-xs bg-primary/20 text-primary px-1.5 py-0.5 rounded font-medium">
                                  10% off
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground">per orang</p>
                            </>
                          ) : (
                            <>
                              <p className="text-sm font-semibold text-foreground">
                                {formatPrice(listing.price)}
                              </p>
                              <p className="text-xs text-muted-foreground">per orang</p>
                            </>
                          )}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => handleDetailClick(listing.id)}
                          className="transition-colors duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary"
                        >
                          Detail
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
