import { useState } from 'react'

import FeedbackContentStep from './FeedbackContentStep'
import FeedbackSuccessStep from './FeedbackSuccessStep'
import FeedbackTypeStep from './FeedbackTypeStep'

import { FeedbackType } from '../../../utils/feedbackTypes'

const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

  const handleFeedbackReset = () => {
    setFeedbackSent(false)    
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)]
      md:w-auto"
    >
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackReset={handleFeedbackReset} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackReset={handleFeedbackReset}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por {` `}
       
        <a
          className="underline underline-offset-2"
          href="https://github.com/paesrafael"
          target="_blank"
          rel="noopener"
        >Rafael Paes</a> |{` `}
       
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
          target="_blank"
          rel="noopener"
        >Rocketseat</a>
      </footer>
    </div>
  )
}

export default WidgetForm