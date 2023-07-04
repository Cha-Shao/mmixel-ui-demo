import { HTMLAttributes } from 'react'
import Title from './Title'
import classNames from 'classnames'

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: [string, string]
  titleColor?: [string, string]
  blurColor?: [string, string]
}

const BigTitle = (props: Props) => {
  const titleColor = props.titleColor || ["#ff8729", "black"]
  const blurColor = props.blurColor || ["red", "#ff8729"]
  return (
    <div className={classNames(
      props.className,
      "relative w-fit",
    )}>
      <Title
        size="xl"
        className="inline-block z-10"
        style={{ color: titleColor[0] }}>
        {props.title[0]}
      </Title>
      <Title
        size="xl"
        className="inline-block z-10"
        style={{ color: titleColor[1] }}>
        {props.title[1]}
      </Title>
      <h1 className={classNames(
        "text-[5rem]",
        "blur-2xl",
        "absolute left-4 -top-12",
        "select-none",
        "opacity-80"
      )} style={{
        color: blurColor[0]
      }}>模</h1>
      <h1 className={classNames(
        "text-[5rem]",
        "blur-2xl",
        "absolute right-4 -top-4",
        "select-none",
        "opacity-80"
      )} style={{
        color: blurColor[1]
      }}>糊</h1>
    </div>
  )
}

export default BigTitle
