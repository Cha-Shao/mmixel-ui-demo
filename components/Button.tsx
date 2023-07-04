import { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactNode, forwardRef } from "react"
import classNames from "classnames"
import { Size } from "./types"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLButtonElement> {
  type?: | "default" | "primary" | "secondary" | "ghost"
  size?: Size
  rounded?: boolean
  square?: boolean
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
        // 形状
        props.rounded
          ? "rounded-full"
          : classNames(
            { "rounded-sm": size === "ty" },
            { "rounded-sm": size === "sm" },
            { "rounded-md": size === "md" },
            { "rounded-md": size === "lg" },
            { "rounded-lg": size === "xl" }
          ),
        props.square ? classNames(
          { "w-5": size === "ty" },
          { "w-6": size === "sm" },
          { "w-8": size === "md" },
          { "w-10": size === "lg" },
          { "w-12": size === "xl" },
        ) : classNames(
          { "px-1": size === "ty" },
          { "px-2": size === "sm" },
          { "px-4": size === "md" },
          { "px-6": size === "lg" },
          { "px-6": size === "xl" },
        ),

        props.disabled
          ? "opacity-80 cursor-no-drop"
          : "active:scale-95 active:brightness-95 hover:brightness-110",
        // 样式
        { "border-2 border-slate-800/10 dark:border-slate-100/10": type === "default" },
        { "bg-[#ff8729] text-white shadow-md shadow-[#ff8729]/25": type === "primary" },
        { "bg-slate-800/10 dark:bg-slate-100/10": type === "secondary" },
        // 大小，padding在上面square的地方
        { "h-5 text-xs": size === "ty" },
        { "h-6 text-sm": size === "sm" },
        { "h-8": size === "md" },
        { "h-10 text-lg": size === "lg" },
        { "h-12 text-xl font-bold": size === "xl" },
        // 默认
        "duration-150",
        "inline-flex justify-center items-center",
      )}
      onClick={props.onClick} >
      {
        props.loading || props.icon && (
          <span className={classNames(
            { "animate-spin": props.loading },
            { "mr-1": props.children }
          )}>
            {props.loading ? (
              <LoadingIcon style={{
                width: size === 'ty'
                  ? '12px'
                  : size === 'sm'
                    ? '16px' : '20px',
              }} />
            ) : props.icon
            }
          </span>
        )
      }
      {props.children}
    </button >
  )
})

export default Button
