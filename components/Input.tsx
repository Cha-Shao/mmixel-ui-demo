'use client'
import classNames from "classnames"
import { ChangeEvent, KeyboardEvent, Dispatch, ForwardedRef, SetStateAction, forwardRef, useRef, HTMLAttributes, useState, ReactNode } from "react"

type InputType = | 'text' | 'password'
interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'prefix' | 'suffix'> {
  value: string
  setValue: Dispatch<SetStateAction<string>>

  type?: InputType
  maxLength?: number
  onlyNumber?: boolean
  showCount?: boolean

  onEnter?: () => void
  onFocus?: () => void
  onBlur?: () => void

  prefix?: ReactNode | string
  suffix?: ReactNode | string
}

const EyeOpen = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M1.182 12C2.122 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9c-5.392 0-9.878-3.88-10.818-9ZM12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10Zm0-2a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z" /></svg>
}

const EyeClosed = () => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415l-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A10.982 10.982 0 0 1 4.52 5.935Zm10.238 10.237l-1.464-1.464a3 3 0 0 1-4.001-4.001L7.829 9.243a5 5 0 0 0 6.929 6.929ZM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.593l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.975 3.76Z" /></svg>
}

const Input = forwardRef(function Input(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const inputRef = useRef<HTMLInputElement>(null)
  const type = props.type || 'text'
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    props.onlyNumber && (value = value.replace(/[^0-9]/g, ''))
    props.setValue(value)
  }

  return (
    <div ref={ref}
      className={classNames(
        'px-2',
        'min-h-[2rem]',
        'rounded-md',
        'bg-slate-600/10 dark:bg-slate-200/10',
        'cursor-text',
        'flex items-center',
        props.className
      )}
      onClick={() => { inputRef.current?.focus() }}>
      {props.prefix &&
        <div className="mr-2">{props.prefix}</div>
      }
      <input
        ref={inputRef}
        type={showPassword ? 'text' : type}
        placeholder={props.placeholder}
        className="bg-transparent h-full flex-grow outline-none"
        value={props.value}
        onChange={handleChange}
        maxLength={props.maxLength}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          e.key === 'Enter' && props.onEnter && props.onEnter()
        }}
        onFocus={() => { props.onFocus && props.onFocus() }}
        onBlur={() => { props.onBlur && props.onBlur() }} />
      {type === 'password' ? (
        <div
          onMouseDown={() => { setShowPassword(true) }}
          onMouseUp={() => { setShowPassword(false) }}
          className="cursor-pointer opacity-50">
          {showPassword
            ? <EyeOpen />
            : <EyeClosed />}
        </div>
      ) : (
        <div className="ml-2">
          {props.suffix}
        </div>
      )}
    </div>
  )
})

export default Input
