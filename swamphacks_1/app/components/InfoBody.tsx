


export default function InfoPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rizz-pink-100 to-rizz-pink-300">
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-rizz-pink-800 mb-8 flex items-center justify-center">
          Welcome to rizz
        </h1>
        <div className="bg-white bg-opacity-90 rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-rizz-pink-700 mb-4">Who We Are</h2>
          <p className="text-rizz-pink-800 mb-4">
            At rizz, we&apos;re on a mission to help computer science majors navigate the complex algorithm of love. We
            understand that while you can debug code, debugging your love life might be a bit more challenging. That&apos;s
            where we come in!
          </p>
          <h2 className="text-2xl font-semibold text-rizz-pink-700 mb-4">Our Services</h2>
          <ul className="list-disc list-inside text-rizz-pink-800 mb-4">
            <li>Romantic Algorithm Optimization</li>
            <li>Pickup Line Syntax Training</li>
            <li>Social Networking (the offline kind)</li>
            <li>Confidence Compiler</li>
          </ul>
          <h2 className="text-2xl font-semibold text-rizz-pink-700 mb-4">Why Choose rizz?</h2>
          <p className="text-rizz-pink-800 mb-4">
            Because let&apos;s face it, you&apos;ve spent more time with Java than with actual dates. Our team of experts (yes,
            we&apos;ve actually talked to girls before) will help you translate your coding skills into dating success.
            Remember, in love as in programming, it&apos;s all about finding the right input to get the desired output!
          </p>
          <div className="text-center mt-8">
            <a
              href="./datingsites"
              className="inline-block bg-rizz-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-rizz-pink-600 transition-colors"
            >
              Start Your Love.py Journey Today!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

