import bg from '../assets/bg.png'
import { Menu, ChevronsDown } from 'lucide-react'

function Header() {
  return (
    <header
      className="relative w-full min-h-screen bg-cover sm:bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* contrast wash, tinted to your palette instead of flat black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#241C15]/60 via-[#241C15]/20 to-[#241C15]/70" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8">
        <div className='flex flex-col items-center justify-center'>
          <span
            className="stamp-word text-xs md:text-sm tracking-[0.3em] uppercase font-bold"
            style={{ animationDelay: '0s' }}
          >
            Welcome to
          </span>

          <h1 className="text-5xl md:text-8xl font-bold font-kablammo text-orange-900 flex gap-4 md:gap-6">
            <span className="stamp-word" style={{ animationDelay: '0.15s' }}>Heritage</span>
            <span className="stamp-word" style={{ animationDelay: '0.3s' }}>Ghana</span>
          </h1>

          <p
            className="stamp-word mt-4 text-[16px] md:text-2xl text-[#F7E7CE]"
            style={{ animationDelay: '0.5s' }}
          >
            Discover the culture, history and traditions of Ghana
          </p>
        </div>

        <button
          className="stamp-word flex justify-center gap-2 items-center border-none p-3 w-40 rounded-lg cursor-pointer bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] uppercase hover:scale-105 transition-transform duration-300"
          style={{ animationDelay: '0.65s' }}
        >
          Discover
          <ChevronsDown className='animate-bounce' />
        </button>
      </div>

      <div className='absolute top-0 z-20 w-full h-15 flex items-center justify-between p-5 bg-[#241C15]/40 backdrop-blur-sm'>
        <Menu className='size-7 text-[#F7E7CE]' />
        <p className='font-kablammo text-4xl text-[#C99A3A]'>AGK</p>
        <div></div>

        {/* kente-stripe divider under the top bar, replaces the flat bg-red-900 */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] flex">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>
      </div>
    </header>
  )
}

export default Header