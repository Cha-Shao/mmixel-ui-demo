import classNames from "classnames"
import { HTMLAttributes, PropsWithChildren } from "react"
import { Size } from "./types"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLSpanElement> {
  size?: Size
  rounded?: boolean
  closeable?: boolean
  onClose?: () => void
}

const CloseIcon = (props: HTMLAttributes<SVGSVGElement>) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z" /></svg>
}

const Tag = (props: Props) => {
  const { size = "md" } = props
  return (
    <span {...props} className={classNames(
      "m-tag",
      props.className,
      "inline-flex items-center border",
      props.rounded ? "rounded-full" : "rounded-sm",
      { "h-6 text-sm px-1": size === "sm" },
      { "h-7 px-2": size === "md" },
      { "h-9 text-lg px-2": size === "lg" },
    )}>
      {props.children}
      {props.closeable && (
        <CloseIcon
          className="cursor-pointer"
          style={{ width: 18 }}
          onClick={props.onClose} />)}
    </span>
  )
}

export default Tag
