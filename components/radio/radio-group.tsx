import { Children, Dispatch, ForwardedRef, HTMLAttributes, PropsWithChildren, SetStateAction, cloneElement, forwardRef, isValidElement } from "react"
import { Size } from "../types"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLDivElement> {
  setValue: Dispatch<SetStateAction<any>>
  initValue?: string
  size?: Size
}

const RadioGroup = forwardRef(function RadioGroup(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={props.className}>
      {Children.map(props.children, (child) =>
        isValidElement(child)
          ? cloneElement(child, {

          })
          : child
      )}
    </div>
  )
})

export default RadioGroup
