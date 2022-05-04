import CardProps from './interfaces'

const Card = ({ image, alt, title, text }: CardProps) => {
  return (
    <div className="max-w-sm shadow-lg border border-zinc-600 rounded-md p-4 flex flex-col
      items-center justify-center overflow-hidden"
    >
      <img
        src={image}
        alt={alt}
      />

      <h2 className="m-2 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        {title}
      </h2>
      
      <p className="text-lg">{text}</p>
    </div>
  )
}

export default Card