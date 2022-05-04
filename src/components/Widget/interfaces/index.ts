import { FeedbackType } from '../../../utils/feedbackTypes'

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
  FeedbackContentStepProps,
  ScreenshotProps
}