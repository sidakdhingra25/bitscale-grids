"use client"

import { Home, Star, CloudCheck, Coins, AlertCircle } from "lucide-react"

export function Header() {
  return (
    <>
      {/* Top Header */}
      <div className="flex items-center justify-between border-b bg-white px-2 sm:px-4 py-2 shrink-0 gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center gap-1 sm:gap-2 min-w-max">
          <button className="p-1 hover:bg-gray-100 rounded shrink-0 cursor-pointer">
            <Home size={16} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded shrink-0 cursor-pointer">
            <Star size={16} fill="#facc15" className="text-yellow-400" />
          </button>
          <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[120px] sm:max-w-none">
            Workbook - Bitscale UX /UI testing flow
          </span>
          <span className="text-gray-400 hidden sm:inline">/</span>
          <span className="text-xs sm:text-sm text-gray-600 truncate max-w-[100px] sm:max-w-none hidden sm:inline">
            Bitscale grid on...
          </span>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 min-w-max">
          <button className="cursor-pointer">
            <CloudCheck size={16} />
          </button>
          <div className="flex items-center gap-1 text-xs sm:text-sm bg-[#EDF3EC] text-[#438361] rounded-full px-2 py-1 shrink-0">
            <Coins size={16} />
            <span className="hidden sm:inline">500/500</span>
            <span className="rounded-full bg-[#438361] px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs font-medium text-white shrink-0">
              Free
            </span>
          </div>
        </div>
      </div>

      {/* Red Error Banner */}
      <div className="flex items-center justify-center gap-4 bg-red-500 px-4 py-2 text-white shrink-0">
        <div className="flex items-center gap-2">
          <span className="text-sm">Payment failed. 450,000 credits will permanently expire in 30 days</span>
          <AlertCircle size={16} />
        </div>
        <button className="rounded-md bg-white px-4 py-1 text-sm font-medium text-gray-800 hover:bg-gray-100 cursor-pointer">
          Pay Now
        </button>
      </div>
    </>
  )
}
