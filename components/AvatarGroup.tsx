import { Children, PropsWithChildren, cloneElement, isValidElement } from "react"
import classNames from "classnames"
import { Size } from "./types"
import Avatar from "./Avatar"

interface Props extends PropsWithChildren {
  more?: number
  textColor?: string
  backgroundColor?: string
  size?: Size
}

const AvatarGroup = (props: Props) => {
  return (
    <div className="flex">
      {Children.map(props.children, (child) => {
        return isValidElement<{
          rounded: boolean
          className: string
        }>(child)
          ? cloneElement(child, {
            rounded: true,
            className: classNames(
              child.props.className,
              "-ml-2"
            )
          })
          : child
      })}
      {props.more && (
        <Avatar
          text={`+${props.more}`}
          textColor={props.textColor}
          backgroundColor={props.backgroundColor}
          size={props.size}
          rounded
          className="-ml-2" />
      )}
    </div>
  )
}

export default AvatarGroup
