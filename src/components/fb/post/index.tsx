import { env } from '@/env'
import React from 'react'

interface PostProps {
  postId: string
}

export const FBPost = ({ postId }: PostProps) => {
  const href = `https://www.facebook.com/${env.NEXT_PUBLIC_FB_PAGE_ID}/posts/${postId}`

  return <div className="fb-post" data-href={href} data-width="500"></div>
}
