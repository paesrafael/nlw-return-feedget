import { FeedbackType } from '../../../utils/feedbackTypes'

export interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackReset: () => void
  onFeedbackSent: () => void
}
