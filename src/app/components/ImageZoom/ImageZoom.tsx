"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,           // ← new
} from "@/app/components/ui/Dialog"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

interface PosterZoomProps {
  src: string
  alt?: string
}

export function ImageZoom({ src, alt }: PosterZoomProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="cursor-zoom-in w-[450px] rounded shadow-lg"
        />
      </DialogTrigger>

      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/80" />

        <DialogContent className="fixed m-0 p-0 border-none bg-transparent shadow-none flex items-center justify-center">
          {/* Required for a11y; hidden visually */}
          <DialogTitle className="sr-only">
            Poster Viewer
          </DialogTitle>

          <div className="w-full h-full cursor-grab">
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={4}
              wheel={{ step: 0.2 }}
              doubleClick={{ disabled: true }}
            >
              <TransformComponent>
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-full object-contain"
                />
              </TransformComponent>
            </TransformWrapper>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  )
}
