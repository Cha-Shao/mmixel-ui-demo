import {
  Dispatch,
  ForwardRefExoticComponent,
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  PropsWithoutRef,
  RefAttributes,
  SetStateAction,
  forwardRef,
  useRef,
} from "react"
import { Size } from "../types"
import classNames from "classnames"
import RadioGroup from "./radio-group"

interface RadioProps extends
  PropsWithChildren,
  HTMLAttributes<HTMLLabelElement> {
  checked: boolean
  name: string
  value: boolean
  setValue: Dispatch<SetStateAction<boolean>>

  color?: string

  size?: Size
  disabled?: boolean
  onChange?: () => void
}

const Radio = forwardRef(function Radio(
  props: RadioProps,
  ref: ForwardedRef<HTMLLabelElement>
) {
  const radioRef = useRef<HTMLInputElement>(null)

  return (
    <label
      ref={ref}
      {...props}
      className={classNames(
        "m-radio",
        props.className,
        "inline-flex items-center",
        props.disabled ? "opacity-50 cursor-no-drop" : "cursor-pointer",
      )}>
      <input
        ref={radioRef}
        name={props.name}
        type="radio"
        className="m-radio-input hidden"
        disabled={props.disabled}
        onChange={() => { props.setValue(props.value) }}
      />
      <div className="w-4 h-4 border-2 rounded-full mr-1 flex" style={{
        borderColor: props.color || "#ff8729"
      }}>
        <div className={classNames(
          "m-auto",
          "w-2 h-2",
          "rounded-full",
          "duration-100",
          { "scale-0": !props.checked }
        )} style={{
          backgroundColor: props.color || "#ff8729"
        }} />
      </div>
      {props.children}
    </label>
  )
})

type RadioComponent<E, P> = ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<E>
> & {
  Group: typeof RadioGroup
}

export default Radio as RadioComponent<HTMLLabelElement, RadioProps>
