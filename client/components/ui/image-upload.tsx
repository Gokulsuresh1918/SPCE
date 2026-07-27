"use client"

import { useState, useRef } from "react"
import { Upload, X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface ImageUploadProps {
  folderType: "team" | "dishes" | "gallery" | "events" | "testimonials"
  onUploadComplete: (url: string) => void
  currentImage?: string
  label?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export function ImageUpload({ folderType, onUploadComplete, currentImage, label = "Upload Image" }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file')
      return
    }

    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('Image size must be less than 10MB')
      return
    }

    setError(null)
    setUploading(true)

    // Create preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    // Upload to server
    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch(`${API_BASE_URL}/upload/${folderType}`, {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        onUploadComplete(data.data.url)
        setError(null)
      } else {
        setError(data.message || 'Upload failed')
        setPreview(null)
      }
    } catch (err) {
      setError('Error uploading image. Please try again.')
      setPreview(null)
      console.error('Upload error:', err)
    } finally {
      setUploading(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }
  }

  const handleRemove = () => {
    setPreview(null)
    onUploadComplete('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="space-y-2">
      <Label className="text-white">{label}</Label>
      <div className="flex items-center gap-4">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          id={`image-upload-${folderType}`}
          disabled={uploading}
        />
        <label
          htmlFor={`image-upload-${folderType}`}
          className="cursor-pointer"
        >
          <Button
            type="button"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            disabled={uploading}
          >
            {uploading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="h-4 w-4 mr-2" />
                {preview ? 'Change Image' : 'Upload Image'}
              </>
            )}
          </Button>
        </label>
        {preview && (
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={handleRemove}
            disabled={uploading}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      {preview && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/20">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/branded-placeholder.svg"
            }}
          />
        </div>
      )}
      
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
      
      {currentImage && !preview && (
        <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/20">
          <img
            src={currentImage}
            alt="Current"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/branded-placeholder.svg"
            }}
          />
        </div>
      )}
    </div>
  )
}
