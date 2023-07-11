import { ReactElement, cloneElement } from "react"

const Icon = (props: { icon: ReactElement, size?: number, className?: string }) => {
  const { size = 20, } = props
  return cloneElement(
    props.icon, {
    ...props.icon.props,
    className: props.className,
    style: { width: `${size}px` },
  })
}

const Close = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.586l4.95-4.95l1.415 1.415l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.95 4.95l-1.413-1.415l4.95-4.95l-4.95-4.95L7.05 5.638l4.95 4.95Z" /></svg>

const Files = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 8v12.993A1 1 0 0 1 20.007 22H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8Zm-2 1h-5V4H5v16h14V9Z" /></svg>

const LeftArrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414l-4.95 4.95Z" /></svg>

const RightArrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m13.171 12l-4.95-4.95l1.415-1.413L16 12l-6.364 6.364l-1.414-1.415l4.95-4.95Z" /></svg>

const DownArrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222l4.95 4.95Z" /></svg>

const UpArrow = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.415 1.414l-4.95-4.95Z" /></svg>

const Check = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15.17l9.193-9.191l1.414 1.414l-10.606 10.606l-6.364-6.364l1.414-1.414l4.95 4.95Z" /></svg>

const EyeOpen = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9c-5.392 0-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3Zm0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19Zm0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z" /></svg>

const EyeClosed = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.883 19.297A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A10.982 10.982 0 0 1 4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415l-3.31-3.31ZM5.936 7.35A8.965 8.965 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604L5.936 7.35Zm6.978 6.978l-3.242-3.241a2.5 2.5 0 0 0 3.241 3.241Zm7.893 2.265l-1.431-1.431A8.935 8.935 0 0 0 20.778 12A9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.593Zm-9.084-9.084a4.5 4.5 0 0 1 4.769 4.769l-4.77-4.77Z" /></svg>

export {
  Icon,
  Close,
  Files,
  LeftArrow,
  RightArrow,
  UpArrow,
  DownArrow,
  Check,
  EyeOpen,
  EyeClosed,
}
