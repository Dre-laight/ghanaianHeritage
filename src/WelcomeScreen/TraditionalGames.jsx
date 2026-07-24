import { useState } from 'react'
import achiBoard from '../assets/achiimage.webp'
import owareBoard from '../assets/owareImage.jpg'
import dameBoard from '../assets/dameboard.jpg'

const games = [
  {
    name: 'Oware',
    tagline: 'A game of counting, capturing, and strategy.',
    detail:
      'Played across two rows of pits, players sow seeds and try to capture their opponent\'s. One of the oldest board games still played today.',
    image: owareBoard,
  },
  {
    name: 'Achi',
    tagline: 'Three in a row wins it.',
    detail:
      'A simple but sharp game of placement and movement on a small grid — easy to learn, hard to master.',
    image: achiBoard,
  },
  {
    name: 'Dame',
    tagline: 'Ghana\'s take on draughts.',
    detail:
      'A tactical board game of jumps and captures, played on a checkered board passed down through generations.',
    image: dameBoard,
  },
]

function TraditionalGames() {
  const [active, setActive] = useState(games[0].name)
  const activeGame = games.find((g) => g.name === active)

  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-kablammo text-4xl md:text-5xl text-orange-900 text-center">
          Experience Ghanaian Games
        </h2>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-4">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <p className="text-center text-[#6B4226]/80 mb-14 max-w-lg mx-auto">
          Learn the rules. Play with Agokansie. Discover the history.
        </p>

        {/* game tabs */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {games.map((game) => (
            <button
              key={game.name}
              onClick={() => setActive(game.name)}
              className={`px-6 py-2 rounded-lg font-kablammo text-lg transition-colors duration-300 ${
                active === game.name
                  ? 'bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE]'
                  : 'bg-transparent text-[#6B4226] border border-[#A47551]/40 hover:bg-[#A47551]/10'
              }`}
            >
              {game.name}
            </button>
          ))}
        </div>

        {/* active game panel */}
        <div className="bg-white/40 border border-[#A47551]/30 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="font-kablammo text-3xl text-orange-900">
              {activeGame.name}
            </h3>
            <p className="mt-1 text-sm uppercase tracking-wide text-[#9C3D30] font-bold">
              {activeGame.tagline}
            </p>
            <p className="mt-4 text-[#3A2A1A]">{activeGame.detail}</p>

            <div className="mt-6 flex gap-3 flex-wrap items-center justify-center">
              <button className="px-5 py-2 rounded-lg bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] font-bold uppercase text-sm hover:scale-105 transition-transform duration-300">
                <a href="https://agokansie.vercel.app/selectionScreen">
                  Learn the rules
                </a>
              </button>
              <button className="px-5 py-2 rounded-lg bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] font-bold uppercase text-sm hover:scale-105 transition-transform duration-300">
                <a href="https://agokansie.vercel.app/selectionScreen">
                  Play with Agokansie
                </a>
              </button>

            </div>
          </div>

          {/* board illustration placeholder */}
          <div className="w-full md:w-1/2 aspect-video rounded-lg bg-[#241C15]/10 flex items-center justify-center text-[#6B4226]/50 text-sm">
          <img src={activeGame.image} className='h-80'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TraditionalGames