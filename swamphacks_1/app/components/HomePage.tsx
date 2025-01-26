import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rizz-pink-100">
      <h1 className="text-4xl font-bold text-rizz-pink-800 mb-8">Welcome to rizz</h1>
      <p className="text-rizz-pink-700 text-xl mb-8">Helping CS majors find love, one algorithm at a time.</p>
      <Link
        href="/info"
        className="bg-rizz-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-rizz-pink-600 transition-colors"
      >
        Learn More
      </Link>
    </div>
  )
}
