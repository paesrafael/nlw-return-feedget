import nlwReturnImageUrl from '../../assets/nlw-return.svg'

const Nlw = () => {
  return (
    <div className="nlw-return-background max-w-3xl mx-auto flex flex-col items-center justify-center">
      <span className="mb-2 text-2xl text-highlight-500 uppercase font-bold">O Next Level Week voltou 🚀</span>

      <h2 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight
        text-center dark:text-white">
        Programação na prática para quem busca evolução
      </h2>

      <p className="custom-text mt-10">
        Uma semana inteira para você avançar para o próximo nível construindo uma aplicação completa, exclusiva e inédita.
      </p>
      
      <p className="custom-text m-10">
        Para saber mais acesse o site do evento:
        
        <a
          href="https://lp.rocketseat.com.br/nlw-return"
          target="_blank"
          rel="noopener"
        >
          <img
            src={nlwReturnImageUrl}
            alt="Logo da NLW Return da Rocketseat"
            className="mt-4 w-full"
          />
        </a>
      </p>
    </div>
  )
}

export default Nlw