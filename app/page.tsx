"use client"

import dynamic from "next/dynamic"

const DataGrid = dynamic(() => import("@/components/data-grid").then((mod) => ({ default: mod.DataGrid })), {
  ssr: false,
})

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <DataGrid />
    </div>
  )
}
