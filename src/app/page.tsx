import { FBPost } from '@/components/fb/post'
import { OpeningHours } from '@/components/openingHours'
import { Data } from '@/types/google'
import { convertToLuxonDateTime } from '@/utils'
import { placesFields } from '@/utils/google'
import axios from 'axios'
import Image from 'next/image'
import { env } from 'process'

export default async function Home() {
  const postIds = ['pfbid02sj3bifJhY81tQcy1tRiC7K2cQCtdL93JoBpr1pmxaXKcFVhY2yv3FWG6TDLm3144l']

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1>- Logo -</h1>
      <OpeningHours />
      {postIds.map(postId => {
        return <FBPost postId={postId} key={postId} />
      })}
    </main>
  )
}
