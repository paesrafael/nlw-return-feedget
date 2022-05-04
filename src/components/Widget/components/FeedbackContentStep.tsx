import { FormEvent, useState } from 'react'
import { ArrowLeft } from 'phosphor-react'

import CloseButton from '../../CloseButton'
import ScreenshotButton from './ScreenshotButton'

import { FeedbackContentStepProps } from '../interfaces'

import { feedbackTypes } from '../../../utils/feedbackTypes'

const FeedbackContentStep = ({ feedbackType, onFeedbackReset, onFeedbackSent }: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [feedbackComment, setFeedbackComment] = useState<string>('')
  
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const handleSubmitFeedback = (event: FormEvent) => {
    event.preventDefault()

    onFeedbackSent()
  }
  
  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackReset}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
      
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={(event) => setFeedbackComment(event.target.value)}
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600
            bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none
              resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="O que você gostaria de nos dizer? :)"
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={!feedbackComment}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm
              hover:bg-brand-300 custom-items-focus transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}

export default FeedbackContentStep