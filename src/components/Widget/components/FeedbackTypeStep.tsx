import { useState } from 'react'

import CloseButton from '../../CloseButton'
import Loading from '../../Loading'

import { FeedbackTypeStepProps } from '../interfaces'

import { FeedbackType, feedbackTypes } from '../../../utils/feedbackTypes'

const FeedbackTypeStep = ({ onFeedbackTypeChanged }: FeedbackTypeStepProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  setTimeout(() => {
    setIsLoading(false)
  }, 730)

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {isLoading ? (
          <div className="w-full flex items-center justify-center">
            <Loading size="4rem" heart />
          </div>
        ) : (
          Object.entries(feedbackTypes).map(([key, value]) =>
            <button
              key={key}
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent
                hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />

              <span>{value.title}</span>
            </button>
          )
        )}
      </div>
    </>
  )
}

export default FeedbackTypeStep