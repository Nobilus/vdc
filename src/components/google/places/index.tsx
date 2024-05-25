import React from 'react'

export const PlacesScript = () => {
  const apiKey = 'test'
  const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&loading=async&libraries=places&callback=initMap`
  return <script async src={scriptSrc}></script>
}
