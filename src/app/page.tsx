import { FBPost } from '@/components/fb/post'
import { OpeningHours } from '@/components/openingHours'
import Image from 'next/image'
import Logo from '../../public/logo.jpg'
import { Blockquote, H2 } from '@/components/typography'

export default async function Home() {
  const postIds = ['pfbid02sj3bifJhY81tQcy1tRiC7K2cQCtdL93JoBpr1pmxaXKcFVhY2yv3FWG6TDLm3144l']

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image alt="Kantoor van de casteele logo" src={Logo} />
      <div className="container">
        <H2>Onze kantoren</H2>
        <OpeningHours />
        <H2>Updates</H2>
        {postIds.map(postId => {
          return <FBPost postId={postId} key={postId} />
        })}
      </div>
    </main>
  )
}
