import CloseButton from '../../CloseButton'

import { FeedbackSuccessProps } from '../interfaces'

import successImage from '../../../assets/success.svg'

const FeedbackSuccessStep = ({ onFeedbackReset }: FeedbackSuccessProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImage} alt="Imagem de um item verificado" className="w-9 h-9" />

        <span className="text-xl mt-2">Agradecemos o feedback</span>

        <button
          type="button"
          onClick={onFeedbackReset}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6
            hover:bg-zinc-700 transition-colors custom-items-focus"
        >Quero enviar outro</button>
      </div>
    </>
  )
}

export default FeedbackSuccessStep