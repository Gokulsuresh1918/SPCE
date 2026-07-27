"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GlassCard from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const eventTypes = [
    { id: "wedding", label: "Wedding", basePrice: 50000 },
    { id: "corporate", label: "Corporate Event", basePrice: 30000 },
    { id: "birthday", label: "Birthday Party", basePrice: 15000 },
    { id: "other", label: "Other Celebration", basePrice: 20000 },
]

const services = [
    { id: "catering", label: "Sadhya Catering", price: 450 }, // per plate
    { id: "decor", label: "Decoration", price: 20000 },
    { id: "photography", label: "Photography", price: 15000 },
    { id: "entertainment", label: "Entertainment", price: 10000 },
]

export default function BookingPage() {
    const [step, setStep] = useState(1)
    const [date, setDate] = useState<Date>()
    const [formData, setFormData] = useState({
        eventType: "",
        guestCount: 100,
        selectedServices: [] as string[],
        name: "",
        email: "",
        phone: "",
    })

    const handleServiceToggle = (serviceId: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(serviceId)
                ? prev.selectedServices.filter((id) => id !== serviceId)
                : [...prev.selectedServices, serviceId],
        }))
    }

    const calculateTotal = () => {
        const eventBase = eventTypes.find((t) => t.id === formData.eventType)?.basePrice || 0
        const cateringCost = formData.selectedServices.includes("catering")
            ? (services.find((s) => s.id === "catering")?.price || 0) * formData.guestCount
            : 0
        const otherServicesCost = formData.selectedServices
            .filter((id) => id !== "catering")
            .reduce((acc, id) => acc + (services.find((s) => s.id === id)?.price || 0), 0)

        return eventBase + cateringCost + otherServicesCost
    }

    const nextStep = () => setStep((s) => Math.min(s + 1, 3))
    const prevStep = () => setStep((s) => Math.max(s - 1, 1))

    return (
        <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 neon-text-gold">
                        Book Your Event
                    </h1>
                    <p className="text-gray-200">Let's plan your perfect celebration together.</p>
                    <p className="text-gray-400 text-sm mt-2 max-w-xl mx-auto">
                        This calculator estimates add-on event services. For full wedding event
                        management (venue, décor, planning), packages start from ₹3,50,000 — see Services.
                        Sadhya-only catering starts from ₹450/plate.
                    </p>
                </div>

                <GlassCard className="p-8">
                    {/* Progress Steps */}
                    <div className="flex justify-between mb-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0" />
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="relative z-10 flex flex-col items-center">
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors duration-300",
                                        step >= s ? "bg-gold-500 text-white shadow-[0_0_15px_rgba(218,165,32,0.5)]" : "bg-white/10 text-gray-400"
                                    )}
                                >
                                    {step > s ? <CheckCircle2 className="h-6 w-6" /> : s}
                                </div>
                                <span className="text-xs mt-2 text-gray-300">
                                    {s === 1 ? "Event Details" : s === 2 ? "Services" : "Contact"}
                                </span>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="text-white">Event Type</Label>
                                        <RadioGroup
                                            value={formData.eventType}
                                            onValueChange={(val) => setFormData({ ...formData, eventType: val })}
                                            className="grid grid-cols-2 gap-4"
                                        >
                                            {eventTypes.map((type) => (
                                                <div key={type.id}>
                                                    <RadioGroupItem value={type.id} id={type.id} className="peer sr-only" />
                                                    <Label
                                                        htmlFor={type.id}
                                                        className="flex flex-col items-center justify-between rounded-md border-2 border-white/10 bg-white/5 p-4 hover:bg-white/10 hover:text-white peer-data-[state=checked]:border-gold-500 peer-data-[state=checked]:text-gold-500 cursor-pointer transition-all"
                                                    >
                                                        <span className="font-semibold">{type.label}</span>
                                                        <span className="text-xs text-gray-400 mt-1">
                                                            {type.id === "wedding"
                                                                ? "Add-on base ₹50,000 (full planning from ₹3,50,000)"
                                                                : `Starts at ₹${type.basePrice.toLocaleString()}`}
                                                        </span>
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label className="text-white">Event Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <NeonButton
                                                        variant="outline"
                                                        className={cn(
                                                            "w-full justify-start text-left font-normal",
                                                            !date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                    </NeonButton>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0 bg-maroon-900 border-gold-500/50 text-white">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        initialFocus
                                                        className="bg-maroon-900 text-white"
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>

                                        <div className="space-y-2">
                                            <Label className="text-white">Guest Count</Label>
                                            <Input
                                                type="number"
                                                min="10"
                                                value={formData.guestCount}
                                                onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 0 })}
                                                className="bg-white/10 border-white/20 text-white focus:border-gold-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <h3 className="text-xl font-serif text-white mb-4">Select Services</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {services.map((service) => (
                                            <div
                                                key={service.id}
                                                className={cn(
                                                    "flex items-center space-x-3 p-4 rounded-lg border transition-all cursor-pointer",
                                                    formData.selectedServices.includes(service.id)
                                                        ? "border-gold-500 bg-gold-500/10"
                                                        : "border-white/10 bg-white/5 hover:bg-white/10"
                                                )}
                                                onClick={() => handleServiceToggle(service.id)}
                                            >
                                                <Checkbox
                                                    checked={formData.selectedServices.includes(service.id)}
                                                    onCheckedChange={() => handleServiceToggle(service.id)}
                                                    className="border-white/50 data-[state=checked]:bg-gold-500 data-[state=checked]:border-gold-500"
                                                />
                                                <div className="flex-1">
                                                    <p className="text-white font-medium">{service.label}</p>
                                                    <p className="text-sm text-gray-400">
                                                        {service.id === "catering"
                                                            ? `₹${service.price}/plate`
                                                            : `₹${service.price.toLocaleString()}`}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-8 p-4 rounded-lg bg-black/30 border border-gold-500/30">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-300">Estimated Total</span>
                                            <span className="text-2xl font-bold text-gold-400">₹{calculateTotal().toLocaleString()}</span>
                                        </div>
                                        <p className="text-xs text-gray-500 text-right">*Final quote may vary based on specific requirements</p>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label className="text-white">Full Name</Label>
                                            <Input
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="bg-white/10 border-white/20 text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white">Email</Label>
                                            <Input
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="bg-white/10 border-white/20 text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label className="text-white">Phone Number</Label>
                                            <Input
                                                type="tel"
                                                placeholder="+91 98765 43210"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="bg-white/10 border-white/20 text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="bg-gold-500/10 p-4 rounded-lg border border-gold-500/20 mt-6">
                                        <h4 className="text-gold-400 font-medium mb-2">Booking Summary</h4>
                                        <div className="text-sm text-gray-300 space-y-1">
                                            <p>Type: {eventTypes.find(t => t.id === formData.eventType)?.label || "Not selected"}</p>
                                            <p>Date: {date ? format(date, "PPP") : "Not selected"}</p>
                                            <p>Guests: {formData.guestCount}</p>
                                            <p>Services: {formData.selectedServices.map(id => services.find(s => s.id === id)?.label).join(", ") || "None"}</p>
                                            <p className="font-bold text-white mt-2">Est. Cost: ₹{calculateTotal().toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex justify-between mt-8">
                                <NeonButton
                                    type="button"
                                    variant="outline"
                                    onClick={prevStep}
                                    disabled={step === 1}
                                    className={step === 1 ? "opacity-0 pointer-events-none" : ""}
                                >
                                    Back
                                </NeonButton>

                                {step < 3 ? (
                                    <NeonButton type="button" onClick={nextStep}>
                                        Next Step
                                    </NeonButton>
                                ) : (
                                    <NeonButton type="submit" className="bg-gold-500 hover:bg-gold-600 text-white">
                                        Confirm Booking
                                    </NeonButton>
                                )}
                            </div>
                        </motion.div>
                    </form>
                </GlassCard>
            </div>
        </div>
    )
}
