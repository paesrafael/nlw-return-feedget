import { CircleNotch, Heart } from 'phosphor-react'

import LoadingProps from './interfaces'

const Loading = ({ size, heart }: LoadingProps) => {
  return (
    <div className={`${!size && 'w-6 h-6'} flex items-center justify-center overflow-hidden`}>
      {!heart ? (
        <CircleNotch
          weight="bold"
          size={size}
          className="w-4 h-4 animate-spin"
        />
      ) : (
        <Heart
          weight="thin"
          size={size}
          className={`${!size && 'w-4 h-4'} animate-spin`}
        />
      )}
    </div>
  )
}

export default Loading