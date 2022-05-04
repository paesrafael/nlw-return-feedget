import { FeedbackType } from '../../../utils/feedbackTypes'

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackReset: () => void
  onFeedbackSent: () => void
}

interface ScreenshotProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export type {
  FeedbackTypeStepProps,
  FeedbackContentStepProps,
  ScreenshotProps
}