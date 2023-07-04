import classNames from "classnames"
import { HTMLAttributes, PropsWithChildren } from "react"
import { FullSize } from "./types"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLHeadingElement> {
  size?: FullSize
}

const Title = (props: Props) => {
  switch (props.size) {
    case "ty":
      return <h5 {...props} className={classNames("text-sm", props.className)}>{props.children}</h5>
    case "sm":
      return <h4 {...props} className={classNames("text-lg", props.className)}>{props.children}</h4>
    default: // md
      return <h3 {...props} className={classNames("text-2xl font-bold", props.className)}>{props.children}</h3>
    case "lg":
      return <h2 {...props} className={classNames("text-3xl font-bold", props.className)}>{props.children}</h2>
    case "xl":
      return <h1 {...props} className={classNames("text-5xl font-bold", props.className)}>{props.children}</h1>
  }
}

export default Title
