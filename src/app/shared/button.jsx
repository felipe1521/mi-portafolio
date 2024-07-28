'use client';
import React from 'react'

function Button({functionDownload}) {
  return (
    <button className="btn" onClick={functionDownload()}>Descarga mi CV</button>
  )
}

export default Button;