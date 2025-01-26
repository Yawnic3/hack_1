import Image from "next/image"
import Link from "next/link"


const datingSites = [
  { name: "Match.com", url: "https://www.match.com", logo: "/placeholder.svg?height=100&width=200" },
  { name: "eHarmony", url: "https://www.eharmony.com", logo: "./placeholder.svg?height=100&width=200" },
  { name: "OkCupid", url: "https://www.okcupid.com", logo: "./placeholder.svg?height=100&width=200" },
  { name: "Tinder", url: "https://tinder.com", logo: "./placeholder.svg?height=100&width=200" },
  { name: "Bumble", url: "https://bumble.com", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Hinge", url: "https://hinge.co", logo: "/placeholder.svg?height=100&width=200" },
]

export default function DatingSiteDirectory() {
  return (
    <div className="min-h-screen bg-pink-100">
      <header className="bg-pink-500 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Dating Site Directory</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {datingSites.map((site) => (
            <Link
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-4">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={`${site.name} logo`}
                  width={200}
                  height={100}
                  className="w-full h-auto object-contain mb-4"
                />
                <h2 className="text-xl font-semibold text-pink-700 text-center">{site.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <footer className="bg-pink-500 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Dating Site Directory. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

