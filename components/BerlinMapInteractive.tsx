'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

type TooltipDirection = 'up' | 'down' | 'left' | 'right'

type Marker = {
  id: string
  name: string
  bezirk: string
  description: string
  imageSrc: string // portrait image for tooltip
  top: number // percentage (0-100)
  left: number // percentage (0-100)
  color: string // hex color for marker dot
  direction: TooltipDirection // where the popup should appear
  radius: number // hitbox radius in px around the marker
}

// 3 fixed markers, positioned in percentages so they stay aligned with the map
const markers: Marker[] = [
  {
    id: '1',
    name: 'KiezSportLotsin',
    bezirk: 'Berlin-Mitte',
    description: 'Seit 2013 aktiv ',
    imageSrc: '/fotos/susanne_buerger.png',
    top: 44,
    left: 41.3,
    color: '#DE5655',
    direction: 'up',
    radius: 40,
  },
  {
    id: '2',
    name: 'Bewegungskoordinator',
    bezirk: 'Tempelhof-Schöneberg',
    description: 'Seit 2023 aktiv',
    imageSrc: '/fotos/portrait_2.png',
    top: 62,
    left: 44.4,
    color: '#7FBF97',
    direction: 'down',
    radius: 30,
  },
  {
    id: '3',
    name: 'Bewegungslotse',
    bezirk: 'Charlottenburg-Wilmersdorf',
    description: 'Seit 2024 aktiv',
    imageSrc: '/fotos/adrian_loescher.png',
    top: 52,
    left: 28,
    color: '#0A74BB',
    direction: 'left',
    radius: 40,
  },
]

function getTooltipPositionClasses(direction: TooltipDirection) {
  switch (direction) {
    case 'up':
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
    case 'down':
      return 'top-full left-1/2 -translate-x-1/2 mt-2'
    case 'left':
      return 'right-full top-1/2 -translate-y-1/2 mr-2'
    case 'right':
      return 'left-full top-1/2 -translate-y-1/2 ml-2'
    default:
      return 'bottom-full left-1/2 -translate-x-1/2 mb-2'
  }
}

function getTooltipAnimationClasses(direction: TooltipDirection) {
  switch (direction) {
    case 'up':
      return 'group-hover:translate-y-0 translate-y-1 group-hover:scale-100 scale-95'
    case 'down':
      return 'group-hover:translate-y-0 -translate-y-1 group-hover:scale-100 scale-95'
    case 'left':
      return 'group-hover:translate-x-0 translate-x-1 group-hover:scale-100 scale-95'
    case 'right':
      return 'group-hover:translate-x-0 -translate-x-1 group-hover:scale-100 scale-95'
    default:
      return 'group-hover:translate-y-0 translate-y-1 group-hover:scale-100 scale-95'
  }
}

export default function BerlinMapInteractive() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className="relative w-full h-96 md:h-[480px] lg:h-[560px]">
      {/* Base map image */}
      <div className="absolute inset-0">
        <Image
          src="/fotos/karte2.png"
          alt="Interaktive Karte der Bewegungslotsen in Berlin"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Fixed markers, aligned via percentage positions (can overflow outside) */}
      <div className="absolute inset-0">
        {markers.map((marker) => {
          // Use 'down' direction for marker id 3 on mobile, otherwise use marker's direction
          const direction = marker.id === '3' && isMobile ? 'down' : marker.direction
          
          // Reduce hitbox radius for marker id 3 to avoid overlap with marker id 2
          // Make it smaller so it doesn't interfere with marker id 2
          const hitboxRadius = marker.id === '3' ? 15 : marker.radius
          
          // Adjust hitbox z-index so marker id 2's hitbox takes priority in overlapping areas
          // Visual z-index remains the same for all markers
          const hitboxZIndex = marker.id === '2' ? 10 : marker.id === '3' ? 1 : 5
          
          return (
            <div
              key={marker.id}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{
                top: `${marker.top}%`,
                left: `${marker.left}%`,
              }}
            >
              {/* Invisible hitbox to control hover radius */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full cursor-default"
                style={{
                  width: `${hitboxRadius * 2}px`,
                  height: `${hitboxRadius * 2}px`,
                  left: '50%',
                  top: '50%',
                  zIndex: hitboxZIndex,
                }}
              />

              {/* Dot */}
              <div
                className="w-4 h-4 rounded-full border-2 border-white shadow-md cursor-default group-hover:scale-110 transition-transform"
                style={{ backgroundColor: marker.color }}
              />
              {/* Tooltip */}
              <div className="opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                <div
                  className={`${getTooltipPositionClasses(
                    direction
                  )} ${getTooltipAnimationClasses(
                    direction
                  )} ${marker.id === '2' ? 'w-64' : 'w-56'} rounded-lg bg-white/95 shadow-lg border border-gray-200 p-3 text-xs md:text-sm absolute transition-all duration-300 ease-out`}
                  style={{
                    pointerEvents: marker.id === '3' ? 'none' : 'auto',
                    zIndex: marker.id === '2' ? 20 : marker.id === '3' ? 1 : 10,
                  }}
                >
                  <div className="flex items-start gap-3">
                    {/* Portrait image */}
                    <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                      <Image
                        src={marker.imageSrc}
                        alt={marker.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{marker.name}</p>
                      <p className="font-medium" style={{ color: marker.color }}>
                        {marker.bezirk}
                      </p>
                      <p className="text-gray-600 mt-1">{marker.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
