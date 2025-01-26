"use client"
import { useState } from "react"
import Link from "next/link"


export default function HeaderCard() {
  const [activeTab, setActiveTab] = useState("info")

  const tabs = [
    { id: "info", label: "Info" },
    { id: "tutorial", label: "Tutorial" },
    { id: "pickup", label: "Pickup Lines" },
  ]

  return (
    <header className="bg-pink-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href='./' className="text-3xl font-bold">rizz</Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <Link
                    href={`/${tab.id}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeTab === tab.id ? "bg-pink-700 text-white" : "text-pink-100 hover:bg-pink-600"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

