import Link from "next/link"
import Button from "../components/Button"

const TailwindCSSLink = () => {
  return (
    <a href="https://tailwindcss.com/"
      target="_blank"
      className="text-[#10bef6] font-bold">
      Tailwind CSS
    </a>
  )
}
const ReactLink = () => {
  return (
    <a href="https://react.dev/"
      target="_blank"
      className="text-[#007fa3] font-bold">
      React
    </a>
  )
}
const NextJsLink = () => {
  return (
    <a href="https://nextjs.org/"
      target="_blank"
      className="font-bold">
      Next.js
    </a>
  )
}

const Page = () => {
  return (
    <main>
      <div>
        <h1 className="text-7xl font-bold text-[#ff8729]">MMixel UI</h1>
        <p className="text-lg">
          基于 {<TailwindCSSLink />} 的快速，简洁，美观的 {<ReactLink />} UI库
        </p>
        <p className="text-lg">支持 {<NextJsLink />} 13</p>
        <Link href="/avatar">
          <Button type="primary" rounded size="xl">开始</Button>
        </Link>
      </div>
    </main>
  )
}

export default Page
