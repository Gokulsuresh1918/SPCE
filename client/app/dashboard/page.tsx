"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  ClipboardList,
  CreditCard,
  Users,
  FileText,
  MessageSquare,
  Settings,
  Menu,
  Package,
  BarChart4,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function DashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Mobile Sidebar Toggle */}
      <div className="fixed z-20 top-20 left-4 md:hidden">
        <Button variant="outline" size="icon" onClick={toggleSidebar} className="bg-white">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`fixed z-10 top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r w-64 transition-transform duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
        >
          <div className="p-4">
            <div className="flex items-center space-x-3 mb-6">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=100&width=100&query=indian businessman in formal attire"
                  alt="Rajesh Kumar"
                />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Rajesh Kumar</p>
                <p className="text-sm text-gray-500">Premium Client</p>
              </div>
            </div>

            <Separator className="my-4" />

            <nav className="space-y-1">
              {[
                { name: "Dashboard", href: "/dashboard", icon: BarChart4, current: true },
                { name: "Events", href: "/dashboard/events", icon: Calendar, current: false },
                { name: "Tasks", href: "/dashboard/tasks", icon: ClipboardList, current: false },
                { name: "Vendors", href: "/dashboard/vendors", icon: Users, current: false },
                { name: "Packages", href: "/dashboard/packages", icon: Package, current: false },
                { name: "Invoices", href: "/dashboard/invoices", icon: CreditCard, current: false },
                { name: "Documents", href: "/dashboard/documents", icon: FileText, current: false },
                { name: "Messages", href: "/dashboard/messages", icon: MessageSquare, current: false },
                { name: "Settings", href: "/dashboard/settings", icon: Settings, current: false },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    item.current ? "bg-gold-50 text-gold-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${item.current ? "text-gold-500" : "text-gray-400"}`} />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "md:ml-64" : "md:ml-64"}`}>
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-serif font-bold text-gray-900 mb-1">Welcome back, Rajesh</h1>
              <p className="text-gray-500 mb-6">Here's what's happening with your upcoming event</p>

              {/* Event Overview */}
              <div className="mb-8">
                <Card className="border-none shadow-md">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      <div className="relative h-48 md:h-auto md:w-1/3">
                        <Image
                          src="/placeholder.svg?height=600&width=400&query=luxury indian wedding ceremony with mandap"
                          alt="Wedding Event"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h2 className="text-xl font-serif font-semibold">Kumar - Sharma Wedding</h2>
                            <p className="text-gray-500">25-28 December 2023 • The Grand Resort, Kochi</p>
                          </div>
                          <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                            Confirmed
                          </div>
                        </div>

                        <div className="mb-6">
                          <p className="text-sm text-gray-500 mb-2">Planning Progress</p>
                          <div className="flex items-center">
                            <Progress value={65} className="h-2 flex-1" />
                            <span className="ml-2 text-sm font-medium">65%</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="bg-ivory-50 p-3 rounded-md">
                            <p className="text-xs text-gray-500">Guests</p>
                            <p className="text-lg font-medium">350</p>
                          </div>
                          <div className="bg-ivory-50 p-3 rounded-md">
                            <p className="text-xs text-gray-500">Budget</p>
                            <p className="text-lg font-medium">₹28.5L</p>
                          </div>
                          <div className="bg-ivory-50 p-3 rounded-md">
                            <p className="text-xs text-gray-500">Vendors</p>
                            <p className="text-lg font-medium">12</p>
                          </div>
                          <div className="bg-ivory-50 p-3 rounded-md">
                            <p className="text-xs text-gray-500">Days Left</p>
                            <p className="text-lg font-medium">42</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" className="bg-gold-500 hover:bg-gold-600">
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Update Guest List
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Stats and Updates */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        { task: "Finalize menu selections", due: "3 days", status: "Pending" },
                        { task: "Review decoration proposal", due: "5 days", status: "Pending" },
                        { task: "Confirm guest accommodations", due: "7 days", status: "In Progress" },
                        { task: "Sign off on invitation design", due: "10 days", status: "Completed" },
                      ].map((task, i) => (
                        <li key={i} className="flex items-start">
                          <div
                            className={`mt-0.5 mr-2 h-4 w-4 flex-shrink-0 rounded-full ${
                              task.status === "Completed"
                                ? "bg-green-400"
                                : task.status === "In Progress"
                                  ? "bg-blue-400"
                                  : "bg-amber-400"
                            }`}
                          />
                          <div className="flex-1">
                            <p
                              className={`text-sm font-medium ${
                                task.status === "Completed" ? "line-through text-gray-400" : "text-gray-900"
                              }`}
                            >
                              {task.task}
                            </p>
                            <p className="text-xs text-gray-500">Due in {task.due}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="mt-4 w-full">
                      View All Tasks
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Messages</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        {
                          name: "Lakshmi Nair",
                          role: "Catering Manager",
                          message: "Menu tasting scheduled for next Tuesday",
                          time: "2 hours ago",
                        },
                        {
                          name: "Anand P",
                          role: "Creative Director",
                          message: "New stage design concepts uploaded",
                          time: "1 day ago",
                        },
                        {
                          name: "Meera K",
                          role: "Decor Head",
                          message: "Please approve the floral arrangements",
                          time: "2 days ago",
                        },
                      ].map((message, i) => (
                        <li key={i} className="flex items-start">
                          <Avatar className="mr-3 mt-1 h-8 w-8">
                            <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex justify-between items-baseline">
                              <p className="text-sm font-medium">{message.name}</p>
                              <p className="text-xs text-gray-400">{message.time}</p>
                            </div>
                            <p className="text-xs text-gray-500">{message.role}</p>
                            <p className="text-sm text-gray-600 mt-1">{message.message}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="mt-4 w-full">
                      View All Messages
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recent Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {[
                        {
                          type: "Venue deposit",
                          amount: "₹3,25,000",
                          date: "Oct 15, 2023",
                          status: "Paid",
                        },
                        {
                          type: "Catering advance",
                          amount: "₹1,50,000",
                          date: "Sep 30, 2023",
                          status: "Paid",
                        },
                        {
                          type: "Decoration package",
                          amount: "₹2,75,000",
                          date: "Sep 15, 2023",
                          status: "Pending",
                        },
                      ].map((payment, i) => (
                        <li key={i} className="flex items-center justify-between">
                          <div className="flex items-start">
                            <div
                              className={`mt-0.5 mr-3 p-2 rounded-full ${
                                payment.status === "Paid"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-amber-100 text-amber-600"
                              }`}
                            >
                              <CreditCard className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{payment.type}</p>
                              <p className="text-xs text-gray-500">{payment.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium">{payment.amount}</p>
                            <p className={`text-xs ${payment.status === "Paid" ? "text-green-600" : "text-amber-600"}`}>
                              {payment.status}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" size="sm" className="mt-4 w-full">
                      View All Payments
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Updates */}
              <div className="mb-8">
                <Card className="border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Recent Updates</CardTitle>
                    <CardDescription>Latest updates for your event</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative pl-6 border-l border-gray-200">
                      {[
                        {
                          title: "Menu tasting scheduled",
                          description: "Your menu tasting has been scheduled for November 12th at 2:00 PM.",
                          date: "Today at 10:30 AM",
                          icon: Calendar,
                          iconClass: "bg-blue-100 text-blue-600",
                        },
                        {
                          title: "Invitation design approved",
                          description: "Your invitation design has been approved and sent for printing.",
                          date: "Yesterday at 2:15 PM",
                          icon: CheckCircle2,
                          iconClass: "bg-green-100 text-green-600",
                        },
                        {
                          title: "New vendor added",
                          description: "Elite Photography has been added to your vendor list.",
                          date: "Oct 18, 2023",
                          icon: Users,
                          iconClass: "bg-purple-100 text-purple-600",
                        },
                        {
                          title: "Payment received",
                          description: "Your payment of ₹3,25,000 for venue booking has been received.",
                          date: "Oct 15, 2023",
                          icon: CreditCard,
                          iconClass: "bg-gold-100 text-gold-600",
                        },
                      ].map((update, i) => (
                        <div key={i} className="mb-8 last:mb-0">
                          <div className="absolute -left-3 mt-1.5 h-6 w-6 rounded-full flex items-center justify-center border-2 border-white">
                            <div className={`p-1 rounded-full ${update.iconClass}`}>
                              <update.icon className="h-3 w-3" />
                            </div>
                          </div>

                          <div className="mb-1">
                            <h3 className="text-md font-medium">{update.title}</h3>
                            <time className="block text-xs text-gray-500">{update.date}</time>
                          </div>
                          <p className="text-sm text-gray-600">{update.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
