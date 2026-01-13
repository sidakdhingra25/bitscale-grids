"use client"

import { useRef, useEffect, useState, useLayoutEffect } from "react"
import { DataEditor } from "@glideapps/glide-data-grid"
import "@glideapps/glide-data-grid/dist/index.css"
import { Header } from "./header"
import { Toolbar } from "./toolbar"
import { Footer } from "./footer"
import { useGridRenderer } from "./grid-renderer"
import { columns } from "./constants"
import { mockData } from "./mock-data"

export function DataGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const dataEditorRef = useRef<any>(null)
  const [dimensions, setDimensions] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 0, 
    height: typeof window !== 'undefined' ? window.innerHeight : 0 
  })
  
  const { getCellContent, drawCell, imagesLoaded } = useGridRenderer(dataEditorRef)

  useLayoutEffect(() => {
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

  return (
    <div className="flex h-dvh flex-col bg-white overflow-hidden">
      <Header />
      <Toolbar />

      {/* Table Container */}
      <div ref={gridRef} className="flex-1 w-full min-h-0 max-h-full overflow-auto cursor-pointer">
        <DataEditor
          ref={dataEditorRef}
          getCellContent={getCellContent}
          drawCell={drawCell}
          columns={columns}
          rows={mockData.length}
          rowMarkers="both"
          headerHeight={40}
          rowHeight={40}
          width={dimensions.width}
          height={dimensions.height}
          smoothScrollX={true}
          key={imagesLoaded ? 'loaded' : 'loading'}
        />
      </div>

      <Footer />
    </div>
  )
}
