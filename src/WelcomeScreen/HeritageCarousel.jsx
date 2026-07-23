import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heritageItems = [
  {
    title: 'Kente',
    desc: 'Woven strip-cloth, each pattern carrying its own meaning.',
    image: '/assets/kente.jpg',
  },
  {
    title: 'Adinkra',
    desc: 'Symbols stamped onto cloth, each one a proverb in shorthand.',
    image: '/assets/adinkra.jpg',
  },
  {
    title: 'Oware',
    desc: 'A board game of strategy and counting, played for generations.',
    image: '/assets/oware.jpg',
  },
  {
    title: 'Homowo',
    desc: 'A harvest festival celebrating triumph over hunger.',
    image: '/assets/homowo.jpg',
  },
]

function FeaturedHeritage() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.8
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="w-full bg-[#241C15] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-kablammo text-4xl md:text-5xl text-[#F7E7CE]">
            Featured Heritage
          </h2>

          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="border border-[#A47551]/50 rounded-full p-2 text-[#F7E7CE] hover:bg-[#A47551]/20 transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="border border-[#A47551]/50 rounded-full p-2 text-[#F7E7CE] hover:bg-[#A47551]/20 transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        {/* kente-stripe divider under the heading */}
        <div className="w-24 h-[4px] flex mb-14">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
        >
          {heritageItems.map((item) => (
            <div
              key={item.title}
              className="snap-start shrink-0 w-[75%] sm:w-[45%] lg:w-[30%] rounded-lg overflow-hidden bg-[#2E2417] border border-[#A47551]/30"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-5">
                <h3 className="font-kablammo text-2xl text-[#C99A3A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[#F7E7CE]/80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedHeritage