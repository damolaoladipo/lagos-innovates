"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const carouselItems = [
  {
    id: 1,
    category: "Hero Sections",
    title: "Start with the right impression",
    image: "/modern-dashboard-with-analytics-charts-and-dark-th.png",
    content: "Acme Co.",
    description:
      "Create powerful first impressions with our hero section components. These sections are designed to capture attention immediately and guide users toward your primary call-to-action. Features include responsive layouts, compelling headlines, and integrated media support.",
  },
  {
    id: 2,
    category: "Documents",
    title: "Organize your content",
    image: "/document-interface-with-text-editor-and-dark-theme.png",
    content: "Documents",
    description:
      "Streamline content management with intuitive document interfaces. These components provide clean, organized layouts for text-heavy content, featuring advanced typography, search functionality, and collaborative editing capabilities.",
  },
  {
    id: 3,
    category: "Readouts",
    title: "Guide your users like a pro",
    image: "/settings-panel-interface-with-toggles-and-dark-the.png",
    content: "Settings",
    description:
      "Present data and metrics with clarity using our readout components. Perfect for dashboards and analytics, these components transform complex information into digestible, actionable insights with interactive charts and real-time updates.",
  },
  {
    id: 4,
    category: "Testimonials",
    title: "Prove your success",
    image: "/welcome-dashboard-with-user-profile-and-dark-theme.png",
    content: "Welcome back!",
    description:
      "Build trust and credibility with compelling testimonial sections. These components showcase customer success stories, reviews, and social proof in visually appealing formats that convert visitors into customers.",
  },
]

export function ComponentsCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [overlayIndex, setOverlayIndex] = useState<number | null>(null)

  const toggleOverlay = (index: number) => {
    setOverlayIndex(overlayIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">All the components you need</h2>
          <p className="text-lg max-w-2xl mx-auto text-pretty">
            Launch UI provides a comprehensive set of components that includes everything you might need to build an
            effective, modern landing page.
          </p>
        </div>

        {/* Components Grid */}
        <div className="relative">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={cn(
                    "relative bg-gray-900/50 dark:bg-gray-900/50 border border-gray-800 dark:border-gray-800 rounded-lg overflow-hidden transition-all duration-300",
                    hoveredIndex === index && "border-gray-600 dark:border-gray-600 bg-gray-900/70 dark:bg-gray-900/70",
                  )}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-gray-800 dark:bg-gray-800 relative overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-medium text-white/90">{item.content}</div>
                      </div>
                    </div>

                    {/* Action Buttons - Show on Hover */}
                    <div
                      className={cn(
                        "absolute top-3 right-3 flex gap-2 transition-opacity duration-200",
                        hoveredIndex === index ? "opacity-100" : "opacity-0",
                      )}
                    >
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-6 h-6 bg-black/50 hover:bg-black/70 border border-gray-600 dark:border-gray-600"
                        onClick={() => toggleOverlay(index)}
                      >
                        {overlayIndex === index ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-sm font-medium text-white dark:text-white group-hover:text-gray-200 dark:group-hover:text-gray-200 transition-colors flex items-center justify-between">
                      {item.title}
                      {/* Plus Icon Next to Title */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity"
                        onClick={() => toggleOverlay(index)}
                      >
                        {overlayIndex === index ? <X className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                      </Button>
                    </h3>
                  </div>

                  {overlayIndex === index && (
                    <div className="absolute inset-0 bg-black/95 dark:bg-black/95 flex flex-col justify-between p-4 animate-in fade-in duration-200">
                      {/* Top section with X icon */}
                      <div className="flex justify-end">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="w-6 h-6 bg-transparent hover:bg-white/10"
                          onClick={() => toggleOverlay(index)}
                        >
                          <X className="w-4 h-4 text-white" />
                        </Button>
                      </div>

                      {/* Content section */}
                      <div className="flex-1 flex items-start justify-start pt-4">
                        <div className="text-left">
                          <h4 className="text-sm font-semibold text-white mb-3">{item.title}</h4>
                          <p className="text-xs text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-transparent border-gray-600 text-white hover:bg-white/10 text-xs px-3 py-1"
                        >
                          Learn more
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="w-6 h-6 bg-transparent hover:bg-white/10"
                          onClick={() => toggleOverlay(index)}
                        >
                          <X className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
