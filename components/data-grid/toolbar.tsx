"use client"

import { ChevronDown, Sheet, Columns, ArrowUpDown, ListFilter, Sparkles, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { DropdownOnRelease } from "./dropdown-on-release"

export function Toolbar() {
  return (
    <div className="border-b bg-gray-50 shrink-0">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex items-center justify-between px-3 py-2 min-w-max">
          <div className="flex items-center">
            {/* Load Data - light gray background with blue badge */}
            <div className="relative">
              <DropdownOnRelease
                trigger={
                  <Button variant="outline" size="sm" className="relative h-8 gap-1.5 bg-white text-xs hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                    <Building2 className="h-3.5 w-3.5 text-teal-600" />
                    Load Data
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                      1
                    </span>
                  </Button>
                }
                content={
                  <DropdownMenuContent>
                    <DropdownMenuItem>Import from CSV</DropdownMenuItem>
                    <DropdownMenuItem>Import from Database</DropdownMenuItem>
                    <DropdownMenuItem>Import from API</DropdownMenuItem>
                  </DropdownMenuContent>
                }
              />
            </div>

            {/* Vertical line divider */}
            <div className="mx-2 h-4 w-px bg-gray-300 shrink-0"></div>

            {/* 2000 Rows */}
            <div className="relative">
              <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded bg-gray-100 whitespace-nowrap cursor-pointer">
                <Sheet size={14} className="text-gray-400" />
                2000 Rows
              </button>
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500"></span>
            </div>

            {/* 16/20 Columns */}
            <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded bg-gray-100 whitespace-nowrap cursor-pointer">
              <Columns size={14} className="text-gray-400" />
              16/20 Columns
            </button>

            {/* Sort by */}
            <div className="relative">
              <DropdownOnRelease
                trigger={
                  <Button variant="outline" size="sm" className="relative h-8 gap-1.5 bg-gray-100 text-xs hover:bg-gray-200 whitespace-nowrap cursor-pointer">
                    <ArrowUpDown size={14} className="text-gray-400" />
                    Sort by
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                    <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-blue-500"></span>
                  </Button>
                }
                content={
                  <DropdownMenuContent>
                    <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
                    <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
                    <DropdownMenuItem>Date (Newest)</DropdownMenuItem>
                    <DropdownMenuItem>Date (Oldest)</DropdownMenuItem>
                    <DropdownMenuItem>Company</DropdownMenuItem>
                    <DropdownMenuItem>Status</DropdownMenuItem>
                  </DropdownMenuContent>
                }
              />
            </div>

            {/* Vertical line divider */}
            <div className="mx-2 h-4 w-px bg-gray-300 shrink-0"></div>

            {/* Filter with blue badge */}
            <div className="relative">
              <DropdownOnRelease
                trigger={
                  <Button variant="outline" size="sm" className="relative h-8 gap-1.5 bg-gray-100 text-xs hover:bg-gray-200 whitespace-nowrap cursor-pointer">
                    <ListFilter size={14} className="text-gray-400"/>
                    Filter
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                    <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-medium text-white">
                      1
                    </span>
                  </Button>
                }
                content={
                  <DropdownMenuContent>
                    <DropdownMenuItem>Status: Email Found</DropdownMenuItem>
                    <DropdownMenuItem>Status: Run condition not met</DropdownMenuItem>
                    <DropdownMenuItem>Company</DropdownMenuItem>
                    <DropdownMenuItem>Date Range</DropdownMenuItem>
                    <DropdownMenuItem>Clear Filters</DropdownMenuItem>
                  </DropdownMenuContent>
                }
              />
            </div>
          </div>

          <div className="flex items-center gap-2 ml-4">
            {/* Action button - light gray background */}
            <DropdownOnRelease
              trigger={
                <Button variant="outline" size="sm" className="h-8 gap-1.5 bg-gray-100 text-xs hover:bg-gray-200 whitespace-nowrap cursor-pointer">
                  Action
                  <ChevronDown size={14} className="text-gray-400" />
                </Button>
              }
              content={
                <DropdownMenuContent>
                  <DropdownMenuItem>Export Data</DropdownMenuItem>
                  <DropdownMenuItem>Delete Selected</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate Rows</DropdownMenuItem>
                  <DropdownMenuItem>Bulk Edit</DropdownMenuItem>
                </DropdownMenuContent>
              }
            />

            {/* Enrichment - dark split button with white sparkle */}
            <DropdownOnRelease
              trigger={
                <div className="flex items-center rounded-lg bg-slate-800 overflow-hidden">
                  <Button variant="ghost" size="sm" className="h-8 gap-1.5 px-3 text-sm font-medium text-white whitespace-nowrap hover:bg-transparent hover:text-white cursor-pointer">
                    <Sparkles size={14} className="text-white" />
                    Enrichment
                  </Button>
                  <div className="w-px h-5 bg-slate-600"></div>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-white hover:bg-transparent hover:text-white cursor-pointer">
                    <ChevronDown size={14} />
                  </Button>
                </div>
              }
              content={
                <DropdownMenuContent>
                  <DropdownMenuItem>Enrich with Email</DropdownMenuItem>
                  <DropdownMenuItem>Enrich with Company Data</DropdownMenuItem>
                  <DropdownMenuItem>Enrich with Social Profiles</DropdownMenuItem>
                  <DropdownMenuItem>Bulk Enrichment</DropdownMenuItem>
                </DropdownMenuContent>
              }
            />

            {/* Gradient circular icon with sparkle */}
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-orange-400 shadow-md shrink-0 cursor-pointer">
              <Sparkles size={14} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
