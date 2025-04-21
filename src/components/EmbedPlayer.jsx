import React from 'react'

function EmbedPlayer() {
  return (
    <div>
      <iframe
        // src='http://player.dev.puppydog.io/embed/cbx07c'
        src='http://localhost:5174/embed/cbx07c' // dev url 
        title='Puppydog Demo Player'
        allowFullScreen
        allow=' fullscreen'
        style={{
          width: '100%',
          height: '98vh',
          border: '1px solid #E9E9E9',
          borderRadius: '15px',
        }}
      ></iframe>
    </div>
  )
}

export default EmbedPlayer
