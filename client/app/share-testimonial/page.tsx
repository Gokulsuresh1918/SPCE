"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Upload, X, CheckCircle, Image as ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export default function ShareTestimonialPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    eventType: "other",
    eventDate: "",
    rating: 5,
    testimonial: "",
    photos: [] as string[],
  })
  const [photoUrls, setPhotoUrls] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" })
    }
  }

  const handlePhotoUrlAdd = () => {
    const urlInput = document.getElementById("photoUrl") as HTMLInputElement
    const url = urlInput?.value.trim()
    if (url) {
      setPhotoUrls([...photoUrls, url])
      setFormData({ ...formData, photos: [...formData.photos, url] })
      urlInput.value = ""
    }
  }

  const handlePhotoRemove = (index: number) => {
    const newUrls = photoUrls.filter((_, i) => i !== index)
    setPhotoUrls(newUrls)
    setFormData({ ...formData, photos: newUrls })
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}
    
    if (!formData.clientName.trim()) {
      newErrors.clientName = "Name is required"
    }
    if (!formData.clientEmail.trim()) {
      newErrors.clientEmail = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.clientEmail)) {
      newErrors.clientEmail = "Please enter a valid email"
    }
    if (!formData.testimonial.trim()) {
      newErrors.testimonial = "Testimonial is required"
    } else if (formData.testimonial.trim().length < 20) {
      newErrors.testimonial = "Please provide at least 20 characters"
    }
    if (formData.rating < 1 || formData.rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setFormData({
          clientName: "",
          clientEmail: "",
          clientPhone: "",
          eventType: "other",
          eventDate: "",
          rating: 5,
          testimonial: "",
          photos: [],
        })
        setPhotoUrls([])
      } else {
        alert("Error: " + data.message)
      }
    } catch (error) {
      alert("Error submitting testimonial. Please try again.")
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="bg-maroon-900/80 border-white/20">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
              <p className="text-gray-300 mb-6">
                Your testimonial has been submitted successfully. We'll review it and publish it soon.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild className="bg-gold-500 hover:bg-gold-600">
                  <Link href="/">Back to Home</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4">
            Share Your Experience
          </h1>
          <p className="text-xl text-gray-200">
            We'd love to hear about your experience with Sree Padmanabha Event Management
          </p>
        </motion.div>

        <Card className="bg-maroon-900/80 border-white/20">
          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="clientName" className="text-white">
                    Your Name *
                  </Label>
                  <Input
                    id="clientName"
                    name="clientName"
                    value={formData.clientName}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white mt-1"
                    placeholder="Enter your name"
                    required
                  />
                  {errors.clientName && (
                    <p className="text-red-400 text-sm mt-1">{errors.clientName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="clientEmail" className="text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="clientEmail"
                    name="clientEmail"
                    type="email"
                    value={formData.clientEmail}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white mt-1"
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.clientEmail && (
                    <p className="text-red-400 text-sm mt-1">{errors.clientEmail}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="clientPhone" className="text-white">
                  Phone Number (Optional)
                </Label>
                <Input
                  id="clientPhone"
                  name="clientPhone"
                  type="tel"
                  value={formData.clientPhone}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white mt-1"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="eventType" className="text-white">
                    Event Type
                  </Label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-maroon-800 border border-white/20 text-white rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="wedding" className="bg-maroon-800 text-white">Wedding</option>
                    <option value="corporate" className="bg-maroon-800 text-white">Corporate</option>
                    <option value="festival" className="bg-maroon-800 text-white">Festival</option>
                    <option value="birthday" className="bg-maroon-800 text-white">Birthday</option>
                    <option value="sadhya" className="bg-maroon-800 text-white">Sadhya</option>
                    <option value="other" className="bg-maroon-800 text-white">Other</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="eventDate" className="text-white">
                    Event Date (Optional)
                  </Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white mt-1"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <Label className="text-white mb-2 block">Your Rating *</Label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-8 w-8 transition-colors ${
                          star <= formData.rating
                            ? "text-gold-400 fill-gold-400"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-2 text-white font-semibold">{formData.rating}/5</span>
                </div>
                {errors.rating && (
                  <p className="text-red-400 text-sm mt-1">{errors.rating}</p>
                )}
              </div>

              {/* Testimonial */}
              <div>
                <Label htmlFor="testimonial" className="text-white">
                  Your Testimonial *
                </Label>
                <Textarea
                  id="testimonial"
                  name="testimonial"
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-white/10 border-white/20 text-white mt-1"
                  placeholder="Share your experience with us... (minimum 20 characters)"
                  required
                />
                <p className="text-gray-400 text-sm mt-1">
                  {formData.testimonial.length} characters
                </p>
                {errors.testimonial && (
                  <p className="text-red-400 text-sm mt-1">{errors.testimonial}</p>
                )}
              </div>

              {/* Photos */}
              <div>
                <Label className="text-white mb-2 block">Add Photos (Optional)</Label>
                <p className="text-gray-400 text-sm mb-3">
                  Paste image URLs to share photos from your event
                </p>
                <div className="flex gap-2 mb-3">
                  <Input
                    id="photoUrl"
                    type="url"
                    placeholder="Paste image URL here"
                    className="bg-white/10 border-white/20 text-white flex-1"
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        handlePhotoUrlAdd()
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={handlePhotoUrlAdd}
                    className="bg-gold-500 hover:bg-gold-600"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>

                {/* Photo Preview */}
                {photoUrls.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                    {photoUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square relative rounded-lg overflow-hidden border border-white/20">
                          <img
                            src={url}
                            alt={`Photo ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = "/branded-placeholder.svg"
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => handlePhotoRemove(index)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white h-12 text-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Submit Testimonial
                    </>
                  )}
                </Button>
              </div>

              <p className="text-gray-400 text-sm text-center">
                By submitting, you agree that your testimonial may be published on our website.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-gold-400 hover:text-gold-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
