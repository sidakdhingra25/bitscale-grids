"use client"

import { Plus, ChevronLeft, ChevronRight, MoreVertical, DeleteIcon, Hourglass, FlipVertical2 } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <div className="border-t bg-white shrink-0">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center justify-between px-3 py-2 min-w-max">
          <div className="flex items-center gap-1">
            {/* + Grid - plain text */}
            <button className="flex items-center gap-1 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded whitespace-nowrap cursor-pointer">
              <Plus size={16} />
              Grid
            </button>

            {/* Active tab - underlined */}
            <button className="px-2 py-1 text-sm font-medium text-blue-600 border-b-2 border-blue-600 whitespace-nowrap cursor-pointer">
              Bitscale grid only
            </button>

            {/* Three dots menu */}
            <button className="px-1 py-1 text-gray-400 hover:bg-gray-100 rounded shrink-0 cursor-pointer">
              <MoreVertical size={14} />
            </button>

            {/* Tab names - plain gray text */}
            <span className="px-2 py-1 text-sm text-gray-400 whitespace-nowrap">User Engagement...</span>
            <span className="px-2 py-1 text-sm text-gray-400 whitespace-nowrap">Customer Insights...</span>
            <span className="px-2 py-1 text-sm text-gray-400 whitespace-nowrap">Audience Interact...</span>
            <span className="px-2 py-1 text-sm text-gray-400 whitespace-nowrap">Lead Generation...</span>

            {/* Navigation arrows */}
            <button className="p-1 text-gray-400 hover:bg-gray-100 rounded shrink-0 cursor-pointer">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 text-gray-400 hover:bg-gray-100 rounded shrink-0 cursor-pointer">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2 ml-4">
            {/* Kill Run - red text only, no background */}
            <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-red-500 hover:bg-red-50 rounded whitespace-nowrap cursor-pointer">
              <DeleteIcon size={14} />
              Kill Run
            </button>

            {/* Auto Run - plain text with blue dot */}
            <div className="relative">
              <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-800 border rounded-md hover:bg-gray-100 whitespace-nowrap cursor-pointer">
                <Hourglass size={14} className="text-gray-500" />
                Auto Run
              </button>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500"></span>
            </div>

            {/* Auto Dedupe - plain text with blue dot */}
            <div className="relative">
              <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-800 border rounded-md hover:bg-gray-100 whitespace-nowrap cursor-pointer">
                <FlipVertical2 size={14} className="text-gray-500"/>
                Auto Dedupe
              </button>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500"></span>
            </div>

            {/* Support - plain text */}
            <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-800 border rounded-full hover:bg-gray-100 whitespace-nowrap cursor-pointer">
              <Image src="/bitscale-favicon.png" alt="Support" width={13} height={13}/>
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
