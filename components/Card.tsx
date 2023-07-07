import classNames from "classnames"
import {
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef
} from "react"
import { Size } from "./types"
import Title from "./Title"

interface Props extends
  PropsWithChildren,
  Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string | ReactNode
  footer?: ReactNode
  size?: Size
  bordered?: boolean
  shadow?: boolean
  closeable?: boolean
  onClose?: () => void
}

const CloseIcon = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z" /></svg>
}

const Card = forwardRef(function Card(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const size = props.size || "md"
  return (
    <div
      ref={ref}
      className={classNames(
        "m-card",
        props.className,
        "relative",
        "overflow-hidden",
        "bg-white dark:bg-zinc-900",
        { "rounded-md": size === "sm" },
        { "rounded-lg": size === "md" },
        { "rounded-xl": size === "lg" },
        { "border-2 border-slate-800/10 dark:border-slate-100/10": props.bordered },
        { "shadow-md": props.shadow }
      )}>
      {props.title && typeof props.title === "string" ? (
        <Title
          size={props.size}
          className={classNames(
            "m-card-title",
            { "p-4 pb-0": size === "sm" },
            { "p-6 pb-0": size === "md" },
            { "p-8 pb-0": size === "lg" },
          )}>
          {props.title}
        </Title>
      ) : props.title}
      {props.closeable && (
        <span className={classNames(
          "m-card-close",
          "cursor-pointer",
          "absolute",
          { "top-4 right-4": size === "sm" },
          { "top-6 right-6": size === "md" },
          { "top-8 right-8": size === "lg" },
        )}
          onClick={props.onClose}>
          <CloseIcon />
        </span>
      )}
      <div className={classNames(
        "m-card-children",
        { "p-4": size === "sm" },
        { "p-6": size === "md" },
        { "p-8": size === "lg" },
      )}>
        {props.children}
      </div>
      {props.footer && (
        <div className={classNames(
          "m-card-footer",
          "bg-slate-800/10 dark:bg-slate-100/10",
          { "p-4": size === "sm" },
          { "p-6": size === "md" },
          { "p-8": size === "lg" },
        )}>
          {props.footer}
        </div>
      )}
    </div>
  )
})

export default Card
