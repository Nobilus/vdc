import React, { useEffect } from 'react'

const isDev = process.env.NODE_ENV !== 'production'

export const FBScript = () => {
  const scriptSrc = isDev
    ? 'https://connect.facebook.net/en_US/sdk/debug.js#xfbml=1&version=v3.2'
    : 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2'
  return (
    <>
      <div id="fb-root"></div>
      <script async defer src={scriptSrc}></script>
    </>
  )
}
