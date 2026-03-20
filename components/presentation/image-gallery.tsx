"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { X, ZoomIn } from "lucide-react"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain bg-card/50 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-primary" />
              </div>
            </div>
            {image.caption && (
              <div className="p-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-2 glass rounded-full hover:glow-cyan transition-all"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
          {images[selectedImage].caption && (
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-muted-foreground">
              {images[selectedImage].caption}
            </p>
          )}
        </motion.div>
      )}
    </>
  )
}

interface SingleImageProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function SingleImage({ src, alt, caption, className = "" }: SingleImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`glass rounded-xl overflow-hidden ${className}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain bg-card/50"
        />
      </div>
      {caption && (
        <div className="p-4 border-t border-border/50">
          <p className="text-sm text-muted-foreground text-center">{caption}</p>
        </div>
      )}
    </motion.div>
  )
}
