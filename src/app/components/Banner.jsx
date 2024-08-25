import React from 'react'

function Banner({ params }) {
  return (
    <div className="banner">
        <h1>Banner</h1>
        {params}
    </div>
  )
}
export default Banner;