import { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactNode, forwardRef } from "react"
import classNames from "classnames"
import { Size } from "./types"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLButtonElement> {
  type?: | "default" | "primary" | "secondary" | "ghost"
  size?: Size
  rounded?: boolean
  disabled?: boolean
  loading?: boolean
  icon?: ReactNode
}

const LoadingIcon = (props: HTMLAttributes<SVGSVGElement>) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Z" /></svg>
}

const Button = forwardRef(function Button(
  props: Props,
  ref: ForwardedRef<HTMLButtonElement>) {

  const type = props.type || "default"
  const size = props.size || "md"
  return (
    <button
      ref={ref}
      disabled={props.disabled}
      className={classNames(
        props.className,
        { "rounded-full": props.rounded },
        props.disabled
          ? "opacity-80 cursor-no-drop"
          : "active:scale-95 active:brightness-95 hover:brightness-110",

        { "border-2 border-slate-800/10 dark:border-slate-100/10": type === "default" },
        { "bg-[#ff8729] text-white": type === "primary" },
        { "bg-slate-800/10 dark:bg-slate-100/10": type === "secondary" },

        { "h-5 px-1 text-xs rounded-sm": size === "ty" },
        { "h-6 px-2 rounded-sm": size === "sm" },
        { "h-8 px-4 rounded-md": size === "md" },
        { "h-10 px-6 text-lg rounded-md": size === "lg" },
        { "h-12 px-6 text-xl font-bold rounded-lg": size === "xl" },

        "duration-150",
        "inline-flex justify-center items-center",
      )}
      onClick={props.onClick}>
      {props.loading ? (
        <span className="animate-spin mr-1">
          <LoadingIcon style={{
            width: size === 'ty'
              ? '12px'
              : size === 'sm'
                ? '16px' : '20px',
          }} />
        </span>
      ) : props.icon && (
        <span className="mr-1">
          {props.icon}
        </span>
      )}
      {props.children}
    </button>
  )
})

export default Button
