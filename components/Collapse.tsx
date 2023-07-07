"use client"
import {
  ForwardedRef,
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  useState
} from "react"
import Title from "./Title"
import classNames from "classnames"
import {
  AnimatePresence,
  motion
} from "framer-motion"

interface Props extends
  PropsWithChildren,
  HTMLAttributes<HTMLDivElement> {
  title: string
  initOpen?: boolean
}

const ArrowIcon = (props: HTMLAttributes<SVGSVGElement>) => {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.415 1.414l-4.95-4.95Z" /></svg>
}

const Collapse = forwardRef(function Collapse(
  props: Props,
  ref: ForwardedRef<HTMLDivElement>
) {
  const [expanded, setExpanded] = useState(props.initOpen || false)

  return (
    <div ref={ref} className="m-collapse">
      <div
        className="p-4 flex items-center"
        onClick={() => { setExpanded(!expanded) }}>
        <Title className="flex-grow line-clamp-1">
          {props.title}
        </Title>
        <ArrowIcon className={classNames(
          "shrink-0 duration-200",
          { "rotate-180": expanded }
        )} />
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="m-collapse-children p-4 pt-0">
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default Collapse
