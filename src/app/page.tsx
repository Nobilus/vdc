import Image from 'next/image'

export default function Home() {
  const pageId = ''

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>- Logo -</h1>
      <div
        className="fb-post"
        data-href={`https://www.facebook.com/${pageId}/posts/pfbid02sj3bifJhY81tQcy1tRiC7K2cQCtdL93JoBpr1pmxaXKcFVhY2yv3FWG6TDLm3144l/`}
        data-width="500"
      ></div>
    </main>
  )
}
