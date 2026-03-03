import { Restaurant } from "@/app/page"

interface RestaurantCardProps {
    restaurant: Restaurant
    onClick: () => void
}

export default function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-[#121212] rounded-2xl p-5 cursor-pointer hover:bg-[#1f1f1f] transition-all duration-300 shadow-sm hover:shadow-md border border-gray-800 hover:border-gray-600 group flex flex-col justify-between h-full"
        >
            <div>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-2 text-sm font-medium">
                        <span className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full">{restaurant.지역}</span>
                        <span className="bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full">{restaurant.종류}</span>
                    </div>
                    <span className="text-gray-400 text-sm whitespace-nowrap bg-gray-900/50 px-2.5 py-1 rounded-full">
                        #{restaurant.목적}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">
                    {restaurant.이름}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {restaurant.한줄평}
                </p>
            </div>

            <div className="mt-auto pt-4 border-t border-gray-800/50 flex justify-between items-center">
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500 mb-1">추천 메뉴</span>
                    <span className="text-sm font-medium text-gray-300">{restaurant.메뉴}</span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs text-gray-500 mb-1">가격대</span>
                    <span className="text-sm font-medium text-gray-300">{restaurant.가격}</span>
                </div>
            </div>
        </div>
    )
}
