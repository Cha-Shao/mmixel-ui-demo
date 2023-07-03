import { Metadata } from "next"
import "../styles/globals.css"
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: "MMixel UI",
  description: "为React打造的UI",
  keywords: "MMixel UI, 映素UI",
}

const misans = localFont({
  src: [{
    path: '../fonts/MiSans-Thin.ttf',
    weight: '100',
    style: 'thin',
  }, {
    path: '../fonts/MiSans-Normal.ttf',
    weight: '300',
    style: 'normal',
  }, {
    path: '../fonts/MiSans-Medium.ttf',
    weight: '500',
    style: 'medium',
  }, {
    path: '../fonts/MiSans-Bold.ttf',
    weight: '700',
    style: 'bold',
  }, {
    path: '../fonts/MiSans-Heavy.ttf',
    weight: '900',
    style: 'heavy',
  }]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={misans.className}>{children}</body>
    </html>
  )
}