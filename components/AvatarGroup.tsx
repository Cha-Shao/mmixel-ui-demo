import { Children, PropsWithChildren, cloneElement, isValidElement } from "react"
import classNames from "classnames"
import { Size } from "./types"

interface Props extends PropsWithChildren {
  more?: number
  size?: Size
}

const AvatarGroup = (props: Props) => {

  return (
    <div className="flex">
      {Children.map(props.children, (child) => {
        return isValidElement<{ className: string }>(child)
          ? cloneElement(child, {
            className: classNames(
              child.props.className,
              "-ml-2"
            )
          })
          : child
      })}
    </div>
  )
}

export default AvatarGroup
