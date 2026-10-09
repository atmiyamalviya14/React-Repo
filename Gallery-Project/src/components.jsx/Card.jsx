
const Card = (porps) => {
  return (
    <div>
        <a href={porps.elem.url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-2xl'>
        <img className='h-full object-cover w-full' src={porps.elem.download_url} alt="" />
      </div>
      <h2 className='font-bold text-lg'>{porps.elem.author}</h2>
        </a>  
    </div>
  )
}

export default Card