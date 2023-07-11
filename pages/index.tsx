import Link from "next/link"
import Button from "../components/Button"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Card from "../components/Card"
import Carousel from "../components/Carousel"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MMixel UI",
  description: "An UI library for react."
}

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

const cards = [{
  title: "简洁",
  content: "基于 TailwindCSS 开发"
}, {
  title: "快速",
  content: ""
}, {
  title: "方便",
  content: "导入即用"
}, {
  title: "定制",
  content: "基于 TailwindCSS 开发"
}]

const images = [
  "/8db06cb6918f35ad86512810c01aa38815b1d6bb0aab60526737647ec4a343d2.png",
  "/9076dccead5d973e870216a55afe95cdcf11ed923c15f0c6e3f41a240a1710fd.png",
  "/cbf8621803f02ced3dfe2f1ca57e290cc0dccebd485b0e9fb2f8f826f38f01bf.png",
  "/d2b1e3aea6add585b7cd5ebb53e2a7de11b74db60b6ebdbf04dc1c81ef2ed633.png",
]

export default function Page() {
  return (
    <main className="min-w-[1024px] relative overflow-hidden bg-[#f0f0f6]">
      <div className="absolute -top-[50vh] -right-[50vw] -rotate-12 bg-[#ff8729] h-[100vh] w-[100vw] rounded-[7rem]" />
      <div className="max-w-screen-2xl m-auto">
        <div className="relative h-[80vh] flex items-center">
          <div className="w-1/2">
            <h1 className="text-[7rem] font-bold text-[#ff8729]">MMixel UI</h1>
            <p className="text-xl">
              基于 {<TailwindCSSLink />} 的快速，简洁，美观的 {<ReactLink />} UI库
            </p>
            <p className="text-xl">支持 {<NextJsLink />} 13</p>
            <div className="mt-6">
              <Link href="/installation" className="mr-2">
                <Button type="primary" size="xl">开始</Button>
              </Link>
              <Link href="/components/avatar" className="mr-2">
                <Button size="xl">浏览组件</Button>
              </Link>
              <CopyToClipboard text="pnpm i -D mmixel-ui">
                <Button size="xl" className="bg-white/50">$ pnpm i -D mmixel-ui</Button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-24">
          {cards.map((card, i) => (
            <Card key={i} title={card.title} shadow>
              {card.content}
            </Card>
          ))}
        </div>
        <div className="relative">
          <Carousel autoplay>
            {images.map((image, i) => (
              <Image
                key={i}
                src={`/carousel${image}`}
                className="w-full object-cover" alt=""
                width={1280} height={720} />
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  )
}
