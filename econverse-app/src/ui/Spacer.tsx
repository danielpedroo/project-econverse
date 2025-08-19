import React from 'react'

interface SpacerProps {
  height?: number
}

const Spacer: React.FC<SpacerProps> = ({ height = 50 }) => {
  return <div style={{ height }} />
}

export default Spacer
