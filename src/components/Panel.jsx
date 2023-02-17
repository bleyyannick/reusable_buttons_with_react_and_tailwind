import classNames from 'classnames'
import React from 'react'


const Panel = ({children, ...rest}) => {

  const classes = classNames( rest.className, "border rounded p-3 shadow bg-white w-full")
  return (
    <div {...rest} className={classes}>{children}</div>
  )
}

export default Panel