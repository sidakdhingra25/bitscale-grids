"use client"

import { useCallback, useRef, useEffect, useState } from "react"
import { GridCell, GridCellKind, Item } from "@glideapps/glide-data-grid"
import { companyLogos } from "./constants"
import { mockData } from "./mock-data"

export function useGridRenderer(dataEditorRef: React.RefObject<any>) {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const preloadedImages = useRef<Map<string, HTMLImageElement>>(new Map())

  // Preload all company logo images
  useEffect(() => {
    const logoPaths = Object.values(companyLogos)
    let loadedCount = 0


    logoPaths.forEach((path) => {
      const img = document.createElement('img')
      img.src = path
      img.onload = () => {
        preloadedImages.current.set(path, img)
        loadedCount++
        if (loadedCount === logoPaths.length) {
          setImagesLoaded(true)
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
  }, [dataEditorRef])

  // Custom cell renderer for company name with logo
  const drawCell = useCallback((args: { ctx: CanvasRenderingContext2D; cell: GridCell; theme: any; rect: { x: number; y: number; width: number; height: number }; col: number; row: number; imageLoader: any }, drawDefault: () => void) => {
    const { ctx, cell, theme, rect, col, row } = args
    const data = mockData[row]


    if (col === 2 && data?.company) {
      const logoPath = companyLogos[data.company]
      const logoSize = 20
      const padding = 4
      const logoX = rect.x + padding
      const logoY = rect.y + (rect.height - logoSize) / 2
      let textX = logoX
      
      if (logoPath) {
        const img = preloadedImages.current.get(logoPath)
        
        if (img && img.complete && img.naturalWidth > 0) { 
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
      
      return
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
      case 0: // Imported Data (name)
        return {
          kind: GridCellKind.Text,
          data: data.name || "",
          displayData: data.name || "",
          allowOverlay: false,
        }
      case 1: // Last Updated At
        return {
          kind: GridCellKind.Text,
          data: data.date || "",
          displayData: data.date || "",
          allowOverlay: false,
        }
      case 2: // Company Name
        return {
          kind: GridCellKind.Text,
          data: data.company || "",
          displayData: data.company || "",
          allowOverlay: false,
        }
      case 3: // Company Website
        return {
          kind: GridCellKind.Uri,
          data: data.website || "",
          displayData: data.website || "",
          allowOverlay: false,
        }
      case 4: // LinkedIn Job URL
        return {
          kind: GridCellKind.Uri,
          data: data.linkedin || "",
          displayData: data.linkedin || "",
          allowOverlay: false,
        }
      case 5: // Email Waterfall (status)
        return {
          kind: GridCellKind.Text,
          data: data.status || "",
          displayData: data.status || "",
          allowOverlay: false,
        }
      case 6: // Email Address
        return {
          kind: GridCellKind.Uri,
          data: data.email || "",
          displayData: data.email || "",
          allowOverlay: false,
        }
      case 7: // Job Title
        return {
          kind: GridCellKind.Text,
          data: data.company ? `${data.company === "Google" ? "Software Engineer" : data.company === "Amazon" ? "Product Manager" : data.company === "Microsoft" ? "Data Scientist" : "Business Analyst"}` : "",
          displayData: data.company ? `${data.company === "Google" ? "Software Engineer" : data.company === "Amazon" ? "Product Manager" : data.company === "Microsoft" ? "Data Scientist" : "Business Analyst"}` : "",
          allowOverlay: false,
        }
      case 8: // Location
        return {
          kind: GridCellKind.Text,
          data: data.company ? `${data.company === "Google" ? "Mountain View, CA" : data.company === "Amazon" ? "Seattle, WA" : data.company === "Microsoft" ? "Redmond, WA" : "New York, NY"}` : "",
          displayData: data.company ? `${data.company === "Google" ? "Mountain View, CA" : data.company === "Amazon" ? "Seattle, WA" : data.company === "Microsoft" ? "Redmond, WA" : "New York, NY"}` : "",
          allowOverlay: false,
        }
      case 9: // Phone Number
        return {
          kind: GridCellKind.Text,
          data: data.phone || "",
          displayData: data.phone || "",
          allowOverlay: false,
        }
      case 10: // Tags
        return {
          kind: GridCellKind.Text,
          data: data.status === "Email Found" ? "Verified, Active" : "Pending, Review",
          displayData: data.status === "Email Found" ? "Verified, Active" : "Pending, Review",
          allowOverlay: false,
        }
      case 11: // Priority
        return {
          kind: GridCellKind.Text,
          data: data.status === "Email Found" ? "High" : "Medium",
          displayData: data.status === "Email Found" ? "High" : "Medium",
          allowOverlay: false,
        }
      case 12: // Source
        return {
          kind: GridCellKind.Text,
          data: "LinkedIn, Company Website",
          displayData: "LinkedIn, Company Website",
          allowOverlay: false,
        }
      case 13: // Notes
        const noteText = data.status === "Email Found" 
          ? `Contacted ${data.name} at ${data.company} successfully. Email verified.`
          : `Awaiting response from ${data.name || data.company || "contact"}. Run condition not met.`
        return {
          kind: GridCellKind.Text,
          data: noteText,
          displayData: noteText,
          allowOverlay: false,
        }
      case 14: // Empty column
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

  return { getCellContent, drawCell, imagesLoaded }
}
