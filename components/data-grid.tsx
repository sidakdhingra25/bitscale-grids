"use client"

import {
  ChevronDown,
  Plus,
  ChevronRight,
  ChevronLeft,
  Home,
  Star,
  RefreshCw,
  Maximize2,
  Smile,
  MessageSquare,
  AlertCircle,
  Calendar,
  Table as TableIcon,
  Columns,
  ArrowUpDown,
  Filter,
  Sparkles,
  Settings,
  Link as LinkIcon,
  Mail,
  Play,
  User,
  ExternalLink,
  Check,
  MoreVertical,
  X,
  SquarePlus,
  Building,
  Building2,
  Sheet,
  Coins,
  CloudCheck,
  DeleteIcon,
  Hourglass,
  FlipVertical2,
  ListFilter
} from "lucide-react"
import { DataEditor, GridColumn, GridCell, GridCellKind, Item } from "@glideapps/glide-data-grid"
import "@glideapps/glide-data-grid/dist/index.css"
import { useCallback, useRef, useEffect, useState } from "react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

// Custom wrapper component that opens dropdown only on pointer up
function DropdownOnRelease({ 
  trigger, 
  content 
}: { 
  trigger: React.ReactNode
  content: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const isPointerDown = useRef(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        asChild
        onPointerDown={(e) => {
          e.preventDefault()
          isPointerDown.current = true
        }}
        onPointerUp={(e) => {
          if (isPointerDown.current) {
            setOpen(true)
          }
          isPointerDown.current = false
        }}
        onPointerLeave={() => {
          isPointerDown.current = false
        }}
        onPointerCancel={() => {
          isPointerDown.current = false
        }}
      >
        {trigger}
      </DropdownMenuTrigger>
      {content}
    </DropdownMenu>
  )
}

// Company logo mapping
const companyLogos: Record<string, string> = {
  Google: "/google.png",
  Amazon: "/amazon.png",
  LinkedIn: "/linkedin.png",
  Microsoft: "/microsoft.png",
}

const mockData = [
  {
    id: 1,
    name: "Mike Braham",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Google",
    website: "https://www.example.com",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "G",
  },
  {
    id: 2,
    name: "Alex Johnson",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Amazon",
    website: "https://www.sample.com",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "A",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "LinkedIn",
    website: "https://www.testsite.com",
    linkedin: "https://www.linkedin.com...",
    status: "Run condition not met",
    logo: "L",
  },
  {
    id: 4,
    name: "David Lee",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Microsoft",
    website: "https://www.demo.com",
    linkedin: "https://www.linkedin.com...",
    status: "Run condition not met",
    logo: "M",
  },
  {
    id: 5,
    name: "Emily Carter",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "TED",
    website: "https://www.siteexample...",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "T",
  },
  {
    id: 6,
    name: "James Smith",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Unilever",
    website: "https://www.webpage.com",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "U",
  },
  {
    id: 7,
    name: "Laura White",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Apple",
    website: "https://www.mywebsite.c...",
    linkedin: "https://www.linkedin.com...",
    status: "Run condition not met",
    logo: "A",
  },
  {
    id: 8,
    name: "Chris Brown",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Google",
    website: "https://www.newsite.com",
    linkedin: "https://www.linkedin.com...",
    status: "Run condition not met",
    logo: "G",
  },
  {
    id: 9,
    name: "Jessica Green",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Unilever",
    website: "https://www.uniqueurl.com",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "U",
  },
  {
    id: 10,
    name: "Daniel Harris",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Microsoft",
    website: "https://www.originalsite.c...",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "M",
  },
  {
    id: 11,
    name: "Megan Clark",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Apple",
    website: "https://www.freshpage.c...",
    linkedin: "https://www.linkedin.com...",
    status: "Run condition not met",
    logo: "A",
  },
  {
    id: 12,
    name: "Brian Lewis",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "TED",
    website: "https://www.differentdo...",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "T",
  },
  {
    id: 13,
    name: "Samantha Hall",
    date: "Oct 12, 2024 at 14:08 PM",
    company: "Google",
    website: "https://www.alternativesi...",
    linkedin: "https://www.linkedin.com...",
    status: "Email Found",
    logo: "G",
  },
  { id: 14, name: "Google", date: "", company: "", website: "", linkedin: "", status: "", logo: "" },
  { id: 15, name: "Amazon", date: "", company: "", website: "", linkedin: "", status: "", logo: "" },
]

const columns: GridColumn[] = [
  { title: "", width: 32, id: "id" },
  { title: "Imported Data", width: 200, id: "name" },
  { title: "Last Updated At", width: 180, id: "date" },
  { title: "Company Name", width: 150, id: "company" },
  { title: "Company Website", width: 180, id: "website" },
  { title: "LinkedIn Job URL", width: 180, id: "linkedin" },
  { title: "Email Waterfall", width: 150, id: "status" },
  { title: "Email Address", width: 200, id: "email" },
  { title: "Job Title", width: 180, id: "jobTitle" },
  { title: "Location", width: 150, id: "location" },
  { title: "Phone Number", width: 150, id: "phone" },
  { title: "Tags", width: 150, id: "tags" },
  { title: "Priority", width: 100, id: "priority" },
  { title: "Source", width: 150, id: "source" },
  { title: "Notes", width: 200, id: "notes" },
  { title: "J", width: 30, id: "empty2" },
]

export function DataGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const dataEditorRef = useRef<any>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Store preloaded images
  const preloadedImages = useRef<Map<string, HTMLImageElement>>(new Map())

  // Preload all company logo images
  useEffect(() => {
    const logoPaths = Object.values(companyLogos)
    let loadedCount = 0

    const triggerRedraw = () => {
      if (dataEditorRef.current) {
        const cellsToUpdate: Item[] = []
        mockData.forEach((data, idx) => {
          if (data.company && companyLogos[data.company]) {
            cellsToUpdate.push([3, idx])
          }
        })
        if (cellsToUpdate.length > 0) {
          // Use requestAnimationFrame to ensure grid is ready
          requestAnimationFrame(() => {
            if (dataEditorRef.current) {
              setDimensions(prev => ({ ...prev }))
            }
          })
        }
      }
    }

    logoPaths.forEach((path) => {
      const img = document.createElement('img')
      img.src = path
      img.onload = () => {
        preloadedImages.current.set(path, img)
        loadedCount++
        if (loadedCount === logoPaths.length) {
          setImagesLoaded(true)
          triggerRedraw()
        } else {
          triggerRedraw()
        }
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount === logoPaths.length) {
          setImagesLoaded(true)
        }
      }
    })

    if (logoPaths.length === 0) {
      setImagesLoaded(true)
    }
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (gridRef.current) {
        setDimensions({
          width: gridRef.current.clientWidth,
          height: gridRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Custom cell renderer for company name with logo
  const drawCell = useCallback((args: { ctx: CanvasRenderingContext2D; cell: GridCell; theme: any; rect: { x: number; y: number; width: number; height: number }; col: number; row: number; imageLoader: any }, drawDefault: () => void) => {
    const { ctx, cell, theme, rect, col, row } = args
    const data = mockData[row]

    // Only custom render company name column (column 3)
    if (col === 3 && data?.company) {
      const logoPath = companyLogos[data.company]
      const logoSize = 20
      const padding = 4
      const logoX = rect.x + padding
      const logoY = rect.y + (rect.height - logoSize) / 2
      let textX = logoX
      
      // Use preloaded image if available
      if (logoPath) {
        const img = preloadedImages.current.get(logoPath)
        
        if (img && img.complete && img.naturalWidth > 0) {
          // Draw logo
          ctx.drawImage(img, logoX, logoY, logoSize, logoSize)
          textX = logoX + logoSize + 8
        }
      }
      
      // Draw company name text
      ctx.fillStyle = theme.textDark
      ctx.font = `${theme.baseFontStyle} ${theme.fontFamily}`
      ctx.textBaseline = "middle"
      ctx.fillText(
        data.company,
        textX,
        rect.y + rect.height / 2
      )
      
      return // Custom rendering handled, don't call drawDefault
    }
    
    // Use default rendering for other cells
    drawDefault()
  }, [imagesLoaded])

  const getCellContent = useCallback((cell: Item): GridCell => {
    const [col, row] = cell
    const data = mockData[row]

    if (!data) {
      return {
        kind: GridCellKind.Text,
        data: "",
        displayData: "",
        allowOverlay: false,
      }
    }

    switch (col) {
      case 0: // ID
        return {
          kind: GridCellKind.Number,
          data: data.id,
          displayData: data.id.toString(),
          allowOverlay: false,
        }
      case 1: // Imported Data (name)
        return {
          kind: GridCellKind.Text,
          data: data.name || "",
          displayData: data.name || "",
          allowOverlay: false,
        }
      case 2: // Last Updated At
        return {
          kind: GridCellKind.Text,
          data: data.date || "",
          displayData: data.date || "",
          allowOverlay: false,
        }
      case 3: // Company Name
        return {
          kind: GridCellKind.Text,
          data: data.company || "",
          displayData: data.company || "",
          allowOverlay: false,
        }
      case 4: // Company Website
        return {
          kind: GridCellKind.Uri,
          data: data.website || "",
          displayData: data.website || "",
          allowOverlay: false,
        }
      case 5: // LinkedIn Job URL
        return {
          kind: GridCellKind.Uri,
          data: data.linkedin || "",
          displayData: data.linkedin || "",
          allowOverlay: false,
        }
      case 6: // Email Waterfall (status)
        return {
          kind: GridCellKind.Text,
          data: data.status || "",
          displayData: data.status || "",
          allowOverlay: false,
        }
      case 7: // Email Address
        return {
          kind: GridCellKind.Uri,
          data: data.name ? `${data.name.toLowerCase().replace(/\s+/g, ".")}@${data.company?.toLowerCase() || "example"}.com` : "",
          displayData: data.name ? `${data.name.toLowerCase().replace(/\s+/g, ".")}@${data.company?.toLowerCase() || "example"}.com` : "",
          allowOverlay: false,
        }
      case 8: // Job Title
        return {
          kind: GridCellKind.Text,
          data: data.company ? `${data.company === "Google" ? "Software Engineer" : data.company === "Amazon" ? "Product Manager" : data.company === "Microsoft" ? "Data Scientist" : "Business Analyst"}` : "",
          displayData: data.company ? `${data.company === "Google" ? "Software Engineer" : data.company === "Amazon" ? "Product Manager" : data.company === "Microsoft" ? "Data Scientist" : "Business Analyst"}` : "",
          allowOverlay: false,
        }
      case 9: // Location
        return {
          kind: GridCellKind.Text,
          data: data.company ? `${data.company === "Google" ? "Mountain View, CA" : data.company === "Amazon" ? "Seattle, WA" : data.company === "Microsoft" ? "Redmond, WA" : "New York, NY"}` : "",
          displayData: data.company ? `${data.company === "Google" ? "Mountain View, CA" : data.company === "Amazon" ? "Seattle, WA" : data.company === "Microsoft" ? "Redmond, WA" : "New York, NY"}` : "",
          allowOverlay: false,
        }
      case 10: // Phone Number
        const areaCode = 200 + (data.id % 800)
        const exchange = 200 + ((data.id * 3) % 800)
        const number = 1000 + ((data.id * 7) % 9000)
        return {
          kind: GridCellKind.Text,
          data: `+1 (${areaCode}) ${exchange}-${number}`,
          displayData: `+1 (${areaCode}) ${exchange}-${number}`,
          allowOverlay: false,
        }
      case 11: // Tags
        return {
          kind: GridCellKind.Text,
          data: data.status === "Email Found" ? "Verified, Active" : "Pending, Review",
          displayData: data.status === "Email Found" ? "Verified, Active" : "Pending, Review",
          allowOverlay: false,
        }
      case 12: // Priority
        return {
          kind: GridCellKind.Text,
          data: data.status === "Email Found" ? "High" : "Medium",
          displayData: data.status === "Email Found" ? "High" : "Medium",
          allowOverlay: false,
        }
      case 13: // Source
        return {
          kind: GridCellKind.Text,
          data: "LinkedIn, Company Website",
          displayData: "LinkedIn, Company Website",
          allowOverlay: false,
        }
      case 14: // Notes
        const noteText = data.status === "Email Found" 
          ? `Contacted ${data.name} at ${data.company} successfully. Email verified.`
          : `Awaiting response from ${data.name || data.company || "contact"}. Run condition not met.`
        return {
          kind: GridCellKind.Text,
          data: noteText,
          displayData: noteText,
          allowOverlay: false,
        }
      case 15: // Empty column
        return {
          kind: GridCellKind.Text,
          data: "c",
          displayData: "c",
          allowOverlay: false,
        }
      default:
        return {
          kind: GridCellKind.Text,
          data: "",
          displayData: "",
          allowOverlay: false,
        }
    }
  }, [])

  return (
    <div className="flex h-dvh flex-col bg-white overflow-hidden">
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

      <div className="border-b bg-gray-50 shrink-0">
        <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex items-center justify-between px-3 py-2 min-w-max">
            <div className="flex items-center">
              {/* Load Data - light gray background with blue badge */}
              <div className="relative">
                <DropdownOnRelease
                  trigger={
                    <Button variant="outline" size="sm" className="relative h-8 gap-1.5 bg-white text-xs hover:bg-gray-50 whitespace-nowrap cursor-pointer">
                      <Building2  className="h-3.5 w-3.5 text-teal-600" />
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

              {/* Vertical line divider */}
              {/* <div className="mx-2 h-4 w-px bg-gray-300 shrink-0"></div> */}

              {/* 16/20 Columns */}
              <button className="flex items-center gap-1.5 px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded bg-gray-100 whitespace-nowrap cursor-pointer">
                <Columns size={14} className="text-gray-400" />
                16/20 Columns
              </button>

              {/* Vertical line divider */}
              {/* <div className="mx-2 h-4 w-px bg-gray-300 shrink-0"></div> */}

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

      {/* Table Container */}
      <div ref={gridRef} className="flex-1 w-full min-h-0 max-h-full overflow-auto cursor-pointer">
        <DataEditor
          ref={dataEditorRef}
          getCellContent={getCellContent}
          drawCell={drawCell}
          columns={columns}
          rows={mockData.length}
          rowMarkers="none"
          headerHeight={40}
          rowHeight={40}
          width={dimensions.width}
          height={dimensions.height}
          smoothScrollX={true}
          key={imagesLoaded ? 'loaded' : 'loading'}
        />
      </div>

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
    </div>
  )
}

function CompanyLogo({ company }: { company: string }) {
  const logos: Record<string, { bg: string; text: string; letter: string }> = {
    Google: { bg: "bg-transparent", text: "text-blue-500", letter: "G" },
    Amazon: { bg: "bg-transparent", text: "text-gray-800", letter: "a" },
    LinkedIn: { bg: "bg-blue-600", text: "text-white", letter: "in" },
    Microsoft: { bg: "bg-transparent", text: "text-orange-500", letter: "M" },
    TED: { bg: "bg-red-600", text: "text-white", letter: "TED" },
    Unilever: { bg: "bg-transparent", text: "text-blue-600", letter: "U" },
    Apple: { bg: "bg-transparent", text: "text-gray-800", letter: "" },
  }

  const logo = logos[company] || { bg: "bg-gray-200", text: "text-gray-600", letter: company[0] }

  if (company === "Apple") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    )
  }

  if (company === "Google") {
    return (
      <span className="text-sm font-bold">
        <span className="text-blue-500">G</span>
      </span>
    )
  }

  return (
    <span
      className={`text-xs font-bold ${logo.bg} ${logo.text} ${logo.bg !== "bg-transparent" ? "px-1 py-0.5 rounded" : ""}`}
    >
      {logo.letter}
    </span>
  )
}
