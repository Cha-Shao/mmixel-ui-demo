"use client"
import classNames from "classnames"
import { Children, ForwardedRef, HTMLAttributes, PropsWithChildren, ReactElement, cloneElement, forwardRef, isValidElement, useEffect, useRef, useState } from "react"
import Button from "./Button"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLDivElement> {
  autoplay?: boolean
  interval?: number
  delay?: number
  duration?: number

  arrowLeft?: ReactElement
  arrowRight?: ReactElement
  dots?: ReactElement
  dotAction?: ReactElement
  dotDefault?: ReactElement
}

export const LeftIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" ><path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z" /></svg>
}
export const RightIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" ><path fill="currentColor" d="m13.171 12l-4.95-4.95l1.415-1.413L16 12l-6.364 6.364l-1.414-1.415l4.95-4.95Z" /></svg>
}

const Carousel = forwardRef(function Carousel(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const { delay = 0, duration = 300 } = props
  const [page, setPage] = useState(0)
  const [maxPage, setMaxPage] = useState(0)
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextPage = () => {
    setPage(prevPage => (prevPage + 1) % maxPage)
  }
  const prevPage = () => {
    page - 1 < 0 ? setPage(maxPage - 1) : setPage(prevPage => prevPage - 1)
  }

  const clearAutoplay = () => {
    if (intervalId) {
      clearInterval(intervalId)
      setIntervalId(null)
      return
    }
  }
  const setAutoplay = () => {
    clearAutoplay()
    const thisIntervalId = setInterval(() => {
      nextPage()
    }, props.interval || 7000)
    setIntervalId(thisIntervalId)
  }
  useEffect(() => {
    setMaxPage(carouselRef.current?.getElementsByTagName("div").length || 0)
    props.autoplay && setAutoplay()
    return () => {
      clearAutoplay()
    }
  }, [props.children])

  return (<>
    {/* 轮播区域 */}
    <div ref={ref}
      className={classNames(props.className, "overflow-hidden")}
      onMouseEnter={() => { props.autoplay && clearAutoplay() }}
      onMouseLeave={() => { props.autoplay && setAutoplay() }}
    >
      <div ref={carouselRef} className="flex h-full w-full" style={{
        transform: `translateX(${page * -100}%)`,
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}>
        {Children.map(props.children, (child, i) => {
          return isValidElement<{ className: string }>(child)
            ? <div key={i} className="w-full h-full shrink-0">{child}</div>
            : child
        })}
      </div>
    </div>
    {/* 向左箭头 */}
    {props.arrowLeft
      ? cloneElement(props.arrowLeft, {
        ...props.arrowLeft.props,
        onClick: prevPage
      }) : (
        <Button square type="secondary" size="lg"
          className="!bg-gray-800/20 text-white absolute bottom-6 left-[1.5rem]"
          onClick={prevPage}>
          <LeftIcon />
        </Button>
      )}
    {/* 向右箭头 */}
    {props.arrowRight
      ? cloneElement(props.arrowRight, {
        ...props.arrowRight.props,
        onClick: prevPage
      }) : (
        <Button square type="secondary" size="lg"
          className="!bg-gray-800/20 text-white absolute bottom-6 left-[4.5rem]"
          onClick={nextPage}>
          <RightIcon />
        </Button>
      )}
    {/* 轮播进度 */}
    {cloneElement(props.dots
      ? props.dots
      : <div className="flex absolute bottom-10 right-6" />,
      { ...props.dots?.props },
      Array(maxPage).fill(null).map((_, i) =>
        i === page
          // 高亮进度
          ? props.dotAction
            ? cloneElement(props.dotAction, {
              ...props.dotAction.props,
              key: i,
              onClick: () => { setPage(i) }
            })
            : <span
              key={i}
              onClick={() => { setPage(i) }}
              className="w-2 h-2 rounded-full mx-1 bg-white" />
          // 默认进度
          : props.dotDefault
            ? cloneElement(props.dotDefault, {
              ...props.dotDefault.props,
              key: i,
              onClick: () => { setPage(i) }
            })
            : <span
              key={i}
              onClick={() => { setPage(i) }}
              className="w-2 h-2 rounded-full mx-1 bg-white/50" />))}
  </>)
})

export default Carousel