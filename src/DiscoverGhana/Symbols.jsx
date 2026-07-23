import { useState } from 'react'

const symbols = [
  {
    name: 'Sankofa',
    glyph: '☯', // placeholder — swap for your actual Sankofa SVG/icon
    meaning: '"Go back and retrieve."',
    history:
      'Sankofa is often depicted as a bird reaching backward to take an egg off its own back — a reminder that moving forward requires learning from the past.',
    usedIn: 'Jewelry, monuments, and clothing, especially at ceremonies honoring ancestry.',
  },
  {
    name: 'Gye Nyame',
    glyph: '✺',
    meaning: '"Except for God."',
    history:
      'One of the most widely used Adinkra symbols, expressing the supremacy of God over all things — a statement of faith found across Akan visual culture.',
    usedIn: 'Textiles, architecture, and religious contexts.',
  },
  {
    name: 'Adinkrahene',
    glyph: '◎',
    meaning: '"Chief of the Adinkra symbols."',
    history:
      'Three concentric circles representing leadership, greatness, and charisma — considered the symbol from which all other Adinkra designs originated.',
    usedIn: 'Chieftaincy regalia and formal ceremonial cloth.',
  },
  {
    name: 'Akoma',
    glyph: '♥',
    meaning: '"The heart."',
    history:
      'A symbol of patience, tolerance, and consistency — representing the emotional center from which good character grows.',
    usedIn: 'Gifts, wedding cloth, and personal jewelry.',
  },
  {
    name: 'Duafe',
    glyph: '⋔',
    meaning: '"The wooden comb."',
    history:
      'Represents feminine qualities — beauty, hygiene, and the care women take of themselves and their families.',
    usedIn: 'Traditional carvings and cloth for women\'s ceremonies.',
  },
  {
    name: 'Nyame Dua',
    glyph: '☘',
    meaning: '"Tree of God."',
    history:
      'A symbol of God\'s presence and protection, traditionally marked by a tree altar placed outside homes for spiritual offerings.',
    usedIn: 'Household shrines and protective motifs on buildings.',
  },
]

function SymbolCard({ symbol }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      onClick={() => setFlipped((f) => !f)}
      aria-expanded={flipped}
      aria-label={`${symbol.name}, click to ${flipped ? 'show symbol' : 'reveal meaning'}`}
      className="relative w-full h-72 [perspective:1000px] text-left"
    >
      <div
        className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* front */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br from-[#A47551] to-[#6B4226] rounded-lg flex flex-col items-center justify-center gap-4">
          <span className="text-6xl text-[#F7E7CE]">{symbol.glyph}</span>
          <h3 className="font-kablammo text-2xl text-[#F7E7CE]">{symbol.name}</h3>
          <span className="text-xs uppercase tracking-wide text-[#F7E7CE]/70">
            Tap to reveal
          </span>
        </div>

        {/* back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#241C15] rounded-lg p-6 flex flex-col overflow-y-auto">
          <p className="text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
            Meaning
          </p>
          <p className="mt-1 font-kablammo text-lg text-[#F7E7CE]">
            {symbol.meaning}
          </p>

          <p className="mt-4 text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
            History
          </p>
          <p className="mt-1 text-sm text-[#F7E7CE]/85 leading-snug">
            {symbol.history}
          </p>

          <p className="mt-4 text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
            Used in
          </p>
          <p className="mt-1 text-sm text-[#F7E7CE]/85 leading-snug">
            {symbol.usedIn}
          </p>
        </div>
      </div>
    </button>
  )
}

function SymbolsPage() {
  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-kablammo text-3xl md:text-5xl text-orange-900 text-center">
          Adinkra Symbols
        </h1>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-16">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {symbols.map((symbol) => (
            <SymbolCard key={symbol.name} symbol={symbol} />
          ))}
        </div>
      </div>

      
    </section>
  )
}

export default SymbolsPage