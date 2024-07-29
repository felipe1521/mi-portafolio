'use client';
import React from 'react';

const downloadFile = async () => {
  const response = await fetch('/api/download');
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV-FelipeAlarconContreras.pdf';
  document.body.appendChild(a);
  a.click();
  a.remove();
};

function Button() {
  return (
    <button className="btn" onClick={downloadFile}>Descarga mi CV</button>
  )
}

export default Button;