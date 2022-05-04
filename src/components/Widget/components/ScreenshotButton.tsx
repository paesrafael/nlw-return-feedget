import { useState } from 'react'
import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'

import Loading from '../../Loading'

import { ScreenshotProps } from '../interfaces'

const ScreenshotButton = ({ screenshot, onScreenshotTook }: ScreenshotProps) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false)
 
  const handleTakeScreenshot = async () => {
    setIsTakingScreenshot(true)
    
    const canvas = await html2canvas(document.querySelector('html')!)

    const base64Image = canvas.toDataURL('image/png')

    onScreenshotTook(base64Image)

    setIsTakingScreenshot(false)
  }

  if (screenshot)
    return (
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400
          hover:text-zinc-100 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'center bottom',
          backgroundSize: 180
        }}
      >
        <Trash weight="fill" />
      </button>
    )
  
  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 custom-items-focus transition-colors"
    >
      {isTakingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6" />
      )}
    </button>
  )
}

export default ScreenshotButton