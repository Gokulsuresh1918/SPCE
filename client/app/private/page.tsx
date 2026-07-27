"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  Image, 
  Utensils, 
  Calendar, 
  Users, 
  Plus,
  Edit,
  Trash2,
  Upload,
  Save,
  X,
  TrendingUp,
  BarChart3,
  Star,
  Link as LinkIcon,
  Copy
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { ImageUpload } from "@/components/ui/image-upload"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export default function ManagementDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [gallery, setGallery] = useState([])
  const [dishes, setDishes] = useState([])
  const [events, setEvents] = useState([])
  const [team, setTeam] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const [galleryRes, dishesRes, eventsRes, teamRes, testimonialsRes] = await Promise.all([
        fetch(`${API_BASE_URL}/gallery`),
        fetch(`${API_BASE_URL}/dishes`),
        fetch(`${API_BASE_URL}/events`),
        fetch(`${API_BASE_URL}/team`),
        fetch(`${API_BASE_URL}/testimonials?admin=true`),
      ])
      
      const galleryData = await galleryRes.json()
      const dishesData = await dishesRes.json()
      const eventsData = await eventsRes.json()
      const teamData = await teamRes.json()
      const testimonialsData = await testimonialsRes.json()

      if (galleryData.success) setGallery(galleryData.data)
      if (dishesData.success) setDishes(dishesData.data)
      if (eventsData.success) setEvents(eventsData.data)
      if (teamData.success) setTeam(teamData.data)
      if (testimonialsData.success) setTestimonials(testimonialsData.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (endpoint, method = "POST", id = null) => {
    setLoading(true)
    try {
      const url = id ? `${API_BASE_URL}/${endpoint}/${id}` : `${API_BASE_URL}/${endpoint}`
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (data.success) {
        await fetchData()
        setEditingItem(null)
        setFormData({})
        alert("Saved successfully!")
      } else {
        alert("Error: " + data.message)
      }
    } catch (error) {
      alert("Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (endpoint, id) => {
    if (!confirm("Are you sure you want to delete this item?")) return
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, { method: "DELETE" })
      const data = await response.json()
      if (data.success) {
        await fetchData()
        alert("Deleted successfully!")
      }
    } catch (error) {
      alert("Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusUpdate = async (id, status) => {
    setLoading(true)
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      const data = await response.json()
      if (data.success) {
        await fetchData()
        alert(`Testimonial ${status} successfully!`)
      }
    } catch (error) {
      alert("Error: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      {/* Header */}
      <header className="bg-maroon-900/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white font-serif">Management Dashboard</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 bg-maroon-900/50 border border-white/20">
            <TabsTrigger value="dashboard" className="text-white data-[state=active]:bg-gold-500">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="gallery" className="text-white data-[state=active]:bg-gold-500">
              <Image className="h-4 w-4 mr-2" />
              Gallery
            </TabsTrigger>
            <TabsTrigger value="dishes" className="text-white data-[state=active]:bg-gold-500">
              <Utensils className="h-4 w-4 mr-2" />
              Dishes
            </TabsTrigger>
            <TabsTrigger value="events" className="text-white data-[state=active]:bg-gold-500">
              <Calendar className="h-4 w-4 mr-2" />
              Events
            </TabsTrigger>
            <TabsTrigger value="team" className="text-white data-[state=active]:bg-gold-500">
              <Users className="h-4 w-4 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="text-white data-[state=active]:bg-gold-500">
              <BarChart3 className="h-4 w-4 mr-2" />
              Testimonials
            </TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="mt-6">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
              <Card className="bg-maroon-900/80 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Image className="h-8 w-8 text-gold-400" />
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">{gallery.length}</div>
                  <div className="text-gray-300 text-sm">Gallery Items</div>
                </CardContent>
              </Card>
              <Card className="bg-maroon-900/80 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Utensils className="h-8 w-8 text-gold-400" />
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">{dishes.length}</div>
                  <div className="text-gray-300 text-sm">Dishes</div>
                </CardContent>
              </Card>
              <Card className="bg-maroon-900/80 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="h-8 w-8 text-gold-400" />
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">{events.length}</div>
                  <div className="text-gray-300 text-sm">Total Events</div>
                </CardContent>
              </Card>
              <Card className="bg-maroon-900/80 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Users className="h-8 w-8 text-gold-400" />
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">{team.length}</div>
                  <div className="text-gray-300 text-sm">Team Members</div>
                </CardContent>
              </Card>
              <Card className="bg-maroon-900/80 border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Star className="h-8 w-8 text-gold-400" />
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  </div>
                  <div className="text-3xl font-bold text-gold-400 mb-1">{testimonials.length}</div>
                  <div className="text-gray-300 text-sm">Testimonials</div>
                </CardContent>
              </Card>
            </div>

            {/* Charts and Analytics */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Event Status Chart */}
              <Card className="bg-maroon-900/80 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-gold-400" />
                    Event Status Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EventStatusChart events={events} />
                </CardContent>
              </Card>

              {/* Gallery Category Chart */}
              <Card className="bg-maroon-900/80 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-gold-400" />
                    Gallery by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CategoryChart items={gallery} type="gallery" />
                </CardContent>
              </Card>

              {/* Dish Category Chart */}
              <Card className="bg-maroon-900/80 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-gold-400" />
                    Dishes by Category
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CategoryChart items={dishes} type="dish" />
                </CardContent>
              </Card>

              {/* Team Role Distribution */}
              <Card className="bg-maroon-900/80 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-gold-400" />
                    Team by Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TeamRoleChart team={team} />
                </CardContent>
              </Card>
            </div>

            {/* Recent Events */}
            <Card className="bg-maroon-900/80 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Recent Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {events.slice(0, 5).map((event) => (
                    <div key={event._id} className="flex items-center justify-between p-3 bg-maroon-800/50 rounded-lg">
                      <div>
                        <div className="text-white font-semibold">{event.title || 'Untitled Event'}</div>
                        <div className="text-gray-400 text-sm">
                          {event.client?.name} • {event.eventDate ? new Date(event.eventDate).toLocaleDateString() : 'No date'}
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'completed' ? 'bg-green-500' :
                        event.status === 'confirmed' ? 'bg-blue-500' :
                        event.status === 'in-progress' ? 'bg-yellow-500' :
                        'bg-gray-500'
                      }`}>
                        {event.status || 'pending'}
                      </span>
                    </div>
                  ))}
                  {events.length === 0 && (
                    <p className="text-gray-400 text-center py-4">No events yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Gallery Management</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gold-500 hover:bg-gold-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Photo
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-maroon-900 border-white/20 text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add Gallery Item</DialogTitle>
                  </DialogHeader>
                  <GalleryForm formData={formData} setFormData={setFormData} onSubmit={() => handleSubmit("gallery")} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gallery.map((item) => (
                <Card key={item._id} className="bg-maroon-900/80 border-white/20">
                  <CardContent className="p-4">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover rounded mb-4" />
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white font-semibold flex-1">{item.title}</h3>
                      <span className="ml-2 px-2 py-1 bg-gold-500/20 text-gold-400 text-xs font-medium rounded-full capitalize">
                        {item.category || 'other'}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => { setEditingItem(item); setFormData(item) }}>
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete("gallery", item._id)}>
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Dishes Tab */}
          <TabsContent value="dishes" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Dish Management</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gold-500 hover:bg-gold-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Dish
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-maroon-900 border-white/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add Dish</DialogTitle>
                  </DialogHeader>
                  <DishForm formData={formData} setFormData={setFormData} onSubmit={() => handleSubmit("dishes")} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dishes.map((dish) => (
                <Card key={dish._id} className="bg-maroon-900/80 border-white/20">
                  <CardContent className="p-4">
                    {dish.image && <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded mb-4" />}
                    <h3 className="text-white font-semibold mb-2">{dish.name}</h3>
                    <p className="text-gray-300 text-sm mb-2">{dish.description}</p>
                    <div className="flex gap-2 text-xs text-gray-400 mb-4">
                      <span>{dish.cookingTime}</span>
                      <span>•</span>
                      <span>{dish.spiceLevel}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => { setEditingItem(dish); setFormData(dish) }}>
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete("dishes", dish._id)}>
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Event Management</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gold-500 hover:bg-gold-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-maroon-900 border-white/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add Event</DialogTitle>
                  </DialogHeader>
                  <EventForm formData={formData} setFormData={setFormData} onSubmit={() => handleSubmit("events")} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event._id} className="bg-maroon-900/80 border-white/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-white font-semibold text-xl mb-2">{event.title}</h3>
                        <p className="text-gray-300 mb-2">{event.client.name} • {event.client.phone}</p>
                        <p className="text-gray-400 text-sm">
                          {new Date(event.eventDate).toLocaleDateString()} • {event.numberOfGuests} guests
                        </p>
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
                          event.status === 'completed' ? 'bg-green-500' :
                          event.status === 'confirmed' ? 'bg-blue-500' :
                          event.status === 'in-progress' ? 'bg-yellow-500' :
                          'bg-gray-500'
                        }`}>
                          {event.status}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => { setEditingItem(event); setFormData(event) }}>
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDelete("events", event._id)}>
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Team Management</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gold-500 hover:bg-gold-600">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Team Member
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-maroon-900 border-white/20 text-white max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add Team Member</DialogTitle>
                  </DialogHeader>
                  <TeamForm formData={formData} setFormData={setFormData} onSubmit={() => handleSubmit("team")} />
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {team.map((member) => (
                <Card key={member._id} className="bg-maroon-900/80 border-white/20">
                  <CardContent className="p-4">
                    {member.photo && (
                      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "/branded-placeholder.svg" }} />
                      </div>
                    )}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{member.name}</h3>
                        <p className="text-gold-400 text-sm capitalize mb-1">{member.role}</p>
                        {member.experience > 0 && (
                          <p className="text-gray-400 text-xs mb-1">{member.experience} years experience</p>
                        )}
                        {member.rating > 0 && (
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="h-3 w-3 text-gold-400 fill-gold-400" />
                            <span className="text-gold-400 text-xs">{member.rating}/5</span>
                          </div>
                        )}
                      </div>
                      {member.availability && (
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          member.availability === 'available' ? 'bg-green-500' :
                          member.availability === 'busy' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}>
                          {member.availability}
                        </span>
                      )}
                    </div>
                    {member.bio && (
                      <p className="text-gray-300 text-xs mb-3 line-clamp-2">{member.bio}</p>
                    )}
                    <div className="mb-3">
                      <p className="text-gray-400 text-xs mb-1">Contact:</p>
                      <p className="text-gray-300 text-xs">{member.phone}</p>
                      {member.email && (
                        <p className="text-gray-300 text-xs">{member.email}</p>
                      )}
                    </div>
                    {member.specialization && member.specialization.length > 0 && (
                      <div className="mb-3">
                        <p className="text-gray-400 text-xs mb-1">Specializations:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.specialization.slice(0, 3).map((spec, idx) => (
                            <span key={idx} className="bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded text-xs">
                              {spec}
                            </span>
                          ))}
                          {member.specialization.length > 3 && (
                            <span className="text-gray-400 text-xs">+{member.specialization.length - 3} more</span>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => { setEditingItem(member); setFormData(member) }}>
                        <Edit className="h-3 w-3 mr-1" />
                        Edit
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete("team", member._id)}>
                        <Trash2 className="h-3 w-3 mr-1" />
                        Delete
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Testimonials Tab */}
          <TabsContent value="testimonials" className="mt-6">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
              <h2 className="text-2xl font-bold text-white">Testimonials Management</h2>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="text-gray-300 text-sm">
                  Total: {testimonials.length} | 
                  Pending: {testimonials.filter((t: any) => t.status === 'pending').length} |
                  Approved: {testimonials.filter((t: any) => t.status === 'approved').length}
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      const url = `${window.location.origin}/share-testimonial`
                      navigator.clipboard.writeText(url)
                      alert("Testimonial link copied to clipboard!")
                    }}
                    className="bg-gold-500 hover:bg-gold-600"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Link
                  </Button>
                  <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    <Link href="/share-testimonial" target="_blank">
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Open Page
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {testimonials.map((testimonial: any) => (
                <Card key={testimonial._id} className="bg-maroon-900/80 border-white/20">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-white font-semibold text-lg">{testimonial.clientName}</h3>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= testimonial.rating
                                    ? "text-gold-400 fill-gold-400"
                                    : "text-gray-500"
                                }`}
                              />
                            ))}
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            testimonial.status === 'approved' ? 'bg-green-500' :
                            testimonial.status === 'pending' ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}>
                            {testimonial.status}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{testimonial.clientEmail}</p>
                        {testimonial.eventType && (
                          <span className="inline-block px-2 py-1 bg-gold-500/20 text-gold-400 text-xs rounded-full capitalize mr-2">
                            {testimonial.eventType}
                          </span>
                        )}
                        <p className="text-gray-200 mt-3">{testimonial.testimonial}</p>
                        
                        {/* Photos */}
                        {testimonial.photos && testimonial.photos.length > 0 && (
                          <div className="grid grid-cols-3 gap-2 mt-4">
                            {testimonial.photos.map((photo: string, idx: number) => (
                              <img
                                key={idx}
                                src={photo}
                                alt={`Photo ${idx + 1}`}
                                className="w-full h-24 object-cover rounded"
                                onError={(e) => {
                                  e.currentTarget.src = "/branded-placeholder.svg"
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col gap-2 ml-4">
                        {testimonial.status === 'pending' && (
                          <>
                            <Button
                              size="sm"
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => handleStatusUpdate(testimonial._id, 'approved')}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleStatusUpdate(testimonial._id, 'rejected')}
                            >
                              Reject
                            </Button>
                          </>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete("testimonials", testimonial._id)}
                        >
                          <Trash2 className="h-3 w-3 mr-1" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              {testimonials.length === 0 && (
                <p className="text-gray-400 text-center py-8">No testimonials yet</p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Form Components
function GalleryForm({ formData, setFormData, onSubmit }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="space-y-4">
      <div>
        <Label className="text-white">Title</Label>
        <Input value={formData.title || ""} onChange={(e) => setFormData({...formData, title: e.target.value})} className="bg-white/10 border-white/20 text-white" />
      </div>
      <div>
        <Label className="text-white">Description</Label>
        <Textarea value={formData.description || ""} onChange={(e) => setFormData({...formData, description: e.target.value})} className="bg-white/10 border-white/20 text-white" />
      </div>
      <ImageUpload
        folderType="gallery"
        onUploadComplete={(url) => setFormData({...formData, imageUrl: url})}
        currentImage={formData.imageUrl}
        label="Gallery Image"
      />
      <div>
        <Label className="text-white">Category</Label>
        <select value={formData.category || "other"} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full px-3 py-2 bg-maroon-800 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500">
          <option value="wedding" className="bg-maroon-800 text-white">Wedding</option>
          <option value="corporate" className="bg-maroon-800 text-white">Corporate</option>
          <option value="festival" className="bg-maroon-800 text-white">Festival</option>
          <option value="birthday" className="bg-maroon-800 text-white">Birthday</option>
          <option value="sadhya" className="bg-maroon-800 text-white">Sadhya</option>
          <option value="decoration" className="bg-maroon-800 text-white">Decoration</option>
          <option value="venue" className="bg-maroon-800 text-white">Venue</option>
          <option value="other" className="bg-maroon-800 text-white">Other</option>
        </select>
      </div>
      <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600">
        <Save className="h-4 w-4 mr-2" />
        Save
      </Button>
    </form>
  )
}

function DishForm({ formData, setFormData, onSubmit }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="space-y-4">
      <div>
        <Label className="text-white">Dish Name</Label>
        <Input value={formData.name || ""} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-white/10 border-white/20 text-white" required />
      </div>
      <div>
        <Label className="text-white">Description</Label>
        <Textarea value={formData.description || ""} onChange={(e) => setFormData({...formData, description: e.target.value})} className="bg-white/10 border-white/20 text-white" required />
      </div>
      <ImageUpload
        folderType="dishes"
        onUploadComplete={(url) => setFormData({...formData, image: url})}
        currentImage={formData.image}
        label="Dish Image"
      />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-white">Cooking Time</Label>
          <Input value={formData.cookingTime || ""} onChange={(e) => setFormData({...formData, cookingTime: e.target.value})} className="bg-white/10 border-white/20 text-white" />
        </div>
        <div>
          <Label className="text-white">Spice Level</Label>
          <select value={formData.spiceLevel || "Mild"} onChange={(e) => setFormData({...formData, spiceLevel: e.target.value})} className="w-full px-3 py-2 bg-maroon-800 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500">
            <option value="Mild" className="bg-maroon-800 text-white">Mild</option>
            <option value="Medium" className="bg-maroon-800 text-white">Medium</option>
            <option value="Hot" className="bg-maroon-800 text-white">Hot</option>
            <option value="Sweet" className="bg-maroon-800 text-white">Sweet</option>
            <option value="None" className="bg-maroon-800 text-white">None</option>
          </select>
        </div>
      </div>
      <div>
        <Label className="text-white">Ingredients (comma separated)</Label>
        <Input value={formData.ingredients?.join(", ") || ""} onChange={(e) => setFormData({...formData, ingredients: e.target.value.split(",").map(i => i.trim())})} className="bg-white/10 border-white/20 text-white" />
      </div>
      <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600">
        <Save className="h-4 w-4 mr-2" />
        Save
      </Button>
    </form>
  )
}

function EventForm({ formData, setFormData, onSubmit }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="space-y-4">
      <div>
        <Label className="text-white">Event Title</Label>
        <Input value={formData.title || ""} onChange={(e) => setFormData({...formData, title: e.target.value})} className="bg-white/10 border-white/20 text-white" required />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="text-white">Client Name</Label>
          <Input value={formData.client?.name || ""} onChange={(e) => setFormData({...formData, client: {...formData.client, name: e.target.value}})} className="bg-white/10 border-white/20 text-white" required />
        </div>
        <div>
          <Label className="text-white">Phone</Label>
          <Input value={formData.client?.phone || ""} onChange={(e) => setFormData({...formData, client: {...formData.client, phone: e.target.value}})} className="bg-white/10 border-white/20 text-white" required />
        </div>
      </div>
      <div>
        <Label className="text-white">Event Date</Label>
        <Input type="date" value={formData.eventDate ? new Date(formData.eventDate).toISOString().split('T')[0] : ""} onChange={(e) => setFormData({...formData, eventDate: e.target.value})} className="bg-white/10 border-white/20 text-white" required />
      </div>
      <div>
        <Label className="text-white">Number of Guests</Label>
        <Input type="number" value={formData.numberOfGuests || ""} onChange={(e) => setFormData({...formData, numberOfGuests: parseInt(e.target.value)})} className="bg-white/10 border-white/20 text-white" required />
      </div>
      <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600">
        <Save className="h-4 w-4 mr-2" />
        Save
      </Button>
    </form>
  )
}

function TeamForm({ formData, setFormData, onSubmit }) {
  const [specializationInput, setSpecializationInput] = useState("")

  const handleAddSpecialization = () => {
    if (specializationInput.trim()) {
      const currentSpecializations = Array.isArray(formData.specialization) ? formData.specialization : []
      setFormData({
        ...formData,
        specialization: [...currentSpecializations, specializationInput.trim()]
      })
      setSpecializationInput("")
    }
  }

  const handleRemoveSpecialization = (index) => {
    const currentSpecializations = Array.isArray(formData.specialization) ? formData.specialization : []
    setFormData({
      ...formData,
      specialization: currentSpecializations.filter((_, i) => i !== index)
    })
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="text-white">Name *</Label>
          <Input value={formData.name || ""} onChange={(e) => setFormData({...formData, name: e.target.value})} className="bg-white/10 border-white/20 text-white" required />
        </div>
        <div>
          <Label className="text-white">Role *</Label>
          <select value={formData.role || "other"} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full px-3 py-2 bg-maroon-800 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500">
            <option value="chef" className="bg-maroon-800 text-white">Chef</option>
            <option value="manager" className="bg-maroon-800 text-white">Manager</option>
            <option value="coordinator" className="bg-maroon-800 text-white">Coordinator</option>
            <option value="decorator" className="bg-maroon-800 text-white">Decorator</option>
            <option value="photographer" className="bg-maroon-800 text-white">Photographer</option>
            <option value="videographer" className="bg-maroon-800 text-white">Videographer</option>
            <option value="waiter" className="bg-maroon-800 text-white">Waiter</option>
            <option value="driver" className="bg-maroon-800 text-white">Driver</option>
            <option value="other" className="bg-maroon-800 text-white">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="text-white">Phone *</Label>
          <Input value={formData.phone || ""} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-white/10 border-white/20 text-white" required />
        </div>
        <div>
          <Label className="text-white">Email</Label>
          <Input type="email" value={formData.email || ""} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/10 border-white/20 text-white" />
        </div>
      </div>

      <ImageUpload
        folderType="team"
        onUploadComplete={(url) => setFormData({...formData, photo: url, imageUrl: url})}
        currentImage={formData.photo || formData.imageUrl}
        label="Team Member Photo"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label className="text-white">Experience (Years)</Label>
          <Input type="number" min="0" value={formData.experience || ""} onChange={(e) => setFormData({...formData, experience: parseInt(e.target.value) || 0})} className="bg-white/10 border-white/20 text-white" placeholder="e.g., 5" />
        </div>
        <div>
          <Label className="text-white">Rating (0-5)</Label>
          <Input type="number" min="0" max="5" step="0.1" value={formData.rating || ""} onChange={(e) => setFormData({...formData, rating: parseFloat(e.target.value) || 0})} className="bg-white/10 border-white/20 text-white" placeholder="e.g., 4.5" />
        </div>
      </div>

      <div>
        <Label className="text-white">Availability</Label>
        <select value={formData.availability || "available"} onChange={(e) => setFormData({...formData, availability: e.target.value})} className="w-full px-3 py-2 bg-maroon-800 border border-white/20 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500">
          <option value="available" className="bg-maroon-800 text-white">Available</option>
          <option value="busy" className="bg-maroon-800 text-white">Busy</option>
          <option value="unavailable" className="bg-maroon-800 text-white">Unavailable</option>
        </select>
      </div>

      <div>
        <Label className="text-white">Bio/Description</Label>
        <Textarea value={formData.bio || ""} onChange={(e) => setFormData({...formData, bio: e.target.value})} className="bg-white/10 border-white/20 text-white" rows={4} placeholder="Brief description about the team member..." />
      </div>

      <div>
        <Label className="text-white">Specializations</Label>
        <div className="flex gap-2 mb-2">
          <Input value={specializationInput} onChange={(e) => setSpecializationInput(e.target.value)} className="bg-white/10 border-white/20 text-white flex-1" placeholder="e.g., South Indian Cuisine" onKeyPress={(e) => { if (e.key === 'Enter') { e.preventDefault(); handleAddSpecialization(); } }} />
          <Button type="button" onClick={handleAddSpecialization} className="bg-gold-500 hover:bg-gold-600">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        {Array.isArray(formData.specialization) && formData.specialization.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {formData.specialization.map((spec, index) => (
              <span key={index} className="inline-flex items-center gap-1 bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full text-sm">
                {spec}
                <button type="button" onClick={() => handleRemoveSpecialization(index)} className="hover:text-red-400">
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        )}
      </div>

      <Button type="submit" className="w-full bg-gold-500 hover:bg-gold-600">
        <Save className="h-4 w-4 mr-2" />
        Save
      </Button>
    </form>
  )
}

// Chart Components
function EventStatusChart({ events }) {
  const statusCounts = events.reduce((acc, event) => {
    const status = event.status || 'pending'
    acc[status] = (acc[status] || 0) + 1
    return acc
  }, {})

  const total = events.length || 1
  const statuses = ['planning', 'confirmed', 'in-progress', 'completed', 'cancelled', 'postponed']
  const colors = {
    'planning': 'bg-blue-500',
    'confirmed': 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    'completed': 'bg-purple-500',
    'cancelled': 'bg-red-500',
    'postponed': 'bg-gray-500',
  }

  return (
    <div className="space-y-4">
      {statuses.map((status) => {
        const count = statusCounts[status] || 0
        const percentage = (count / total) * 100
        return (
          <div key={status}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-300 text-sm capitalize">{status.replace('-', ' ')}</span>
              <span className="text-white font-semibold">{count}</span>
            </div>
            <div className="w-full bg-maroon-800 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${colors[status] || 'bg-gray-500'}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function CategoryChart({ items, type }) {
  const categoryCounts = items.reduce((acc, item) => {
    const category = item.category || 'other'
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})

  const total = items.length || 1
  const categories = Object.keys(categoryCounts).sort((a, b) => categoryCounts[b] - categoryCounts[a])

  return (
    <div className="space-y-4">
      {categories.slice(0, 6).map((category) => {
        const count = categoryCounts[category]
        const percentage = (count / total) * 100
        return (
          <div key={category}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-300 text-sm capitalize">{category.replace('-', ' ')}</span>
              <span className="text-white font-semibold">{count}</span>
            </div>
            <div className="w-full bg-maroon-800 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gold-500 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
      {categories.length === 0 && (
        <p className="text-gray-400 text-center py-4">No data available</p>
      )}
    </div>
  )
}

function TeamRoleChart({ team }) {
  const roleCounts = team.reduce((acc, member) => {
    const role = member.role || 'other'
    acc[role] = (acc[role] || 0) + 1
    return acc
  }, {})

  const total = team.length || 1
  const roles = Object.keys(roleCounts).sort((a, b) => roleCounts[b] - roleCounts[a])

  return (
    <div className="space-y-4">
      {roles.map((role) => {
        const count = roleCounts[role]
        const percentage = (count / total) * 100
        return (
          <div key={role}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-300 text-sm capitalize">{role}</span>
              <span className="text-white font-semibold">{count}</span>
            </div>
            <div className="w-full bg-maroon-800 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-gold-500 transition-all duration-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
      {roles.length === 0 && (
        <p className="text-gray-400 text-center py-4">No team members yet</p>
      )}
    </div>
  )
}
