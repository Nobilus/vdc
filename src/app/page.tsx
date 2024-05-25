import { FBPost } from '@/components/fb/post'
import Image from 'next/image'

export default function Home() {
  const pageId = ''

  const postIds = ['pfbid02sj3bifJhY81tQcy1tRiC7K2cQCtdL93JoBpr1pmxaXKcFVhY2yv3FWG6TDLm3144l']

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>- Logo -</h1>

      {postIds.map(postId => {
        return <FBPost postId={postId} key={postId} />
      })}
    </main>
  )
}
