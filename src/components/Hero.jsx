import React from 'react'

import {logo} from '../../assets'
const Hero = () => {
  return (
   <header className='w-full flex justify-center items-center flex-col'>
 <nav className='flex justify-between items-center
 w-full mb-10 pt-3 '>
    <img src={logo} alt="sumz_logo"
    className="w-28 object-contain"
    />

<button type='button' 
onClick={()=>window.open('https://github.com/stark-akshay3000')

}
className='black_btn'
>GitHub</button>
 </nav>

 <h1 className='head_text'>
    Summarize Article with <br className='max-md:hidden' />
    <span className='orange_gradient'>OpenAi GPT-4</span>
 </h1>
 <h2 className='desc'>
    Summarize your reading with HoloSynopsis,
    an open-source article Summarizer that transform lengthy
    articles into clear concise summaries
 </h2>
   </header>
  )
}

export default Hero
