import { env } from '@/env'
import React from 'react'

export const PlacesScript = () => {
  const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${env.NEXT_PUBLIC_MAP_API_KEY}&loading=async&libraries=places&callback=initMap`
  return <script async src={scriptSrc}></script>
}
