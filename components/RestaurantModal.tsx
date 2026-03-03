import { Restaurant } from "@/app/page"
import { X, MapPin } from "lucide-react"

interface RestaurantModalProps {
  restaurant: Restaurant
  onClose: () => void
}

export default function RestaurantModal({ restaurant, onClose }: RestaurantModalProps) {
  // 모달 배경 클릭시 닫힘 처리
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // 네이버 지도 열기
  const openNaverMap = () => {
    const searchUrl = `https://map.naver.com/v5/search/${encodeURIComponent(restaurant.주소 + " " + restaurant.이름)}`
    window.open(searchUrl, "_blank")
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#121212] w-full max-w-md rounded-2xl shadow-xl border border-gray-800 overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Modal Header */}
        <div className="relative p-6 border-b border-gray-800">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex gap-2 mb-3">
            <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md">{restaurant.지역}</span>
            <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-md">{restaurant.종류}</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{restaurant.이름}</h2>
          <p className="text-gray-400 text-sm flex items-start gap-1.5">
            <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
            <span>{restaurant.주소}</span>
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">생생 한줄평</h4>
            <p className="text-gray-200 text-lg leading-relaxed">
              "{restaurant.한줄평}"
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900/30 rounded-xl p-3 border border-gray-800/50">
              <span className="block text-xs text-gray-500 mb-1">추천 메뉴</span>
              <span className="block text-sm font-medium text-gray-200">{restaurant.메뉴}</span>
            </div>
            <div className="bg-gray-900/30 rounded-xl p-3 border border-gray-800/50">
              <span className="block text-xs text-gray-500 mb-1">추천 목적</span>
              <span className="block text-sm font-medium text-gray-200">{restaurant.목적}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 pt-0">
          <button
            onClick={openNaverMap}
            className="w-full flex items-center justify-center gap-2 bg-[#03C75A] hover:bg-[#02b350] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-lg hover:shadow-[#03C75A]/20 active:scale-[0.98]"
          >
            네이버 지도 보기
          </button>
        </div>
      </div>
    </div>
  )
}
