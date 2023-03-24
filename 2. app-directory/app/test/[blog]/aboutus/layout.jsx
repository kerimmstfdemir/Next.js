import React from 'react'

const AboutUsLayout = ({ children, ...rest }) => {
  console.log(rest)
  return (
    <div>
        <h2>About Us Layout</h2>
        <div>{children}</div>
    </div>
  )
}

export default AboutUsLayout