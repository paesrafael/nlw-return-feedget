import Card from '../components/Card'
import Nlw from '../components/Nlw'
import Widget from '../components/Widget'

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">     
      <header>
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight
          text-center dark:text-white"
        >
          Olá, você esta no projeto feito na NLW Return
        </h1>

        <p className="custom-text mt-10">
          Meu nome é <span className="highlighted">Rafael Paes</span>, sou desenvolvedor a mais de 15 anos.
        </p>

        <p className="custom-text">
          Atualmente trabalho como <span className="highlighted">frontend</span> e {` `}
          <span className="highlighted">mobile</span>.
        </p>
      </header>

      <p className="mt-10 mb-2 text-sm">
        Combinamos 3 pilares para você conquistar experiência,
        <span className="block">dominar as ferramentas e saber se posicionar profissionalmente</span>          
      </p>
      
      <div className="flex items-start gap-2 w-full">
        <Card
          image="https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Ftarget.svg&w=96&q=100"
          alt="Imagem de um circulo com um pin indicando um alvo. Retirado do site da Rocketseat"
          title="Foco"
          text="Programação é um universo infinito, logo ter foco é essencial. Nós vamos direto ao ponto no que
            realmente importa para você dominar as ferramentas, não apenas conhecê-las."
        />

        <Card
          image="https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Flaptop.svg&w=96&q=100"
          alt="Imagem de um notebook e um sinal de código. Retirado do site da Rocketseat"
          title="Prática"
          text="A programação é uma disciplina prática. São as horas de código que vão te preparar e dar a
            experiência necessária para tomar as melhores decisões no mundo real."
        />

        <Card
          image="https://www.rocketseat.com.br/_next/image?url=%2Fassets%2Ficons%2Fgroups.svg&w=96&q=100"
          alt="Imagem representando um grupo de pessoas. Retirado do site da Rocketseat"
          title="Grupo"
          text="A conexão entre Devs impulsiona seu repertório técnico, suas habilidades comportamentais e sua rede
            de contatos. Além de ajudar a assimilar e fixar todo aprendizado."
        />
      </div>

      <Nlw />

      <Widget />

      <footer className="w-full flex flex-col items-center justify-center">
        <h4 className="text-sm">
          Desenvolvido por {` `}

          <a
          href="https://github.com/paesrafael"
          target="_blank"
          rel="noopener"
          >
            <span className="highlighted">Rafael Paes</span>
          </a>
        </h4>
       
        <p className="mb-6 text-xs">Alguns materiais foram tirados do próprio site do evento</p>
      </footer>
    </div>
  )
}

export default Home