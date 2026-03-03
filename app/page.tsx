"use client"

import { useState } from "react"
import RestaurantCard from "@/components/RestaurantCard"
import RestaurantModal from "@/components/RestaurantModal"
import { Search } from "lucide-react"
import { RESTAURANT_DATA } from "@/lib/data"

export type Restaurant = typeof RESTAURANT_DATA[0]

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)

  // 검색 필터링 로직 (이름, 지역, 목적)
  const filteredData = RESTAURANT_DATA.filter(restaurant =>
    restaurant.이름.includes(searchTerm) ||
    restaurant.지역.includes(searchTerm) ||
    restaurant.목적.includes(searchTerm)
  )

  return (
    <div className="min-h-screen max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8 text-center space-y-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">
          나의 서울 맛집 도감
        </h1>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-gray-800 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all shadow-lg"
            placeholder="이름, 지역, 목적 검색 (예: 강남, 데이트)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      {/* Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              restaurant={restaurant}
              onClick={() => setSelectedRestaurant(restaurant)}
            />
          ))
        ) : (
          <div className="col-span-1 sm:col-span-2 text-center text-gray-500 py-12">
            검색 결과가 없습니다.
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedRestaurant && (
        <RestaurantModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  )
}
