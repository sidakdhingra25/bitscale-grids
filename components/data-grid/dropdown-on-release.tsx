"use client"

import { useState, useRef } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownOnRelease({ 
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
