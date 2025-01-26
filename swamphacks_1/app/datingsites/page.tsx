
import Image from "next/image"
import Link from "next/link"
import HeaderCard from "../components/headercard"


const datingSites = [
  { name: "Match.com", url: "https://www.match.com", logo: "/images/match.png" },
  { name: "eHarmony", url: "https://www.eharmony.com", logo: "/images/eharmoney.png" },
  { name: "OkCupid", url: "https://www.okcupid.com", logo: "/images/okcupid.png" },
  { name: "Tinder", url: "https://tinder.com", logo: "/images/tinder.png" },
  { name: "Bumble", url: "https://bumble.com", logo: "/images/bumble.png" },
  { name: "Hinge", url: "https://hinge.co", logo: "/images/hinge.png" },
]

export default function DatingSiteDirectory() {
  return (
    <div className="min-h-screen bg-pink-100">

<HeaderCard />

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
      <div className='mt-8'>
          <Link href='./hotsingles' target="_blank">
            <Image
            src={'/images/hotsingles.png'}
            alt='hot singles in your area picture'
            width={2000}
            height={10000}>
            </Image>
            </Link>
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

