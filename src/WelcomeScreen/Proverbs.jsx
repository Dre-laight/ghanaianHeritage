const proverbs = [
  {
    quote: 'Wisdom is like a baobab tree; no one individual can embrace it.',
    origin: 'Akan proverb',
  },
  {
    quote: 'It is the calm and silent water that drowns a man.',
    origin: 'Akan proverb',
  },
  {
    quote: 'When the roots of a tree begin to decay, it spreads death to the branches.',
    origin: 'Ashanti proverb',
  },
]

function Proverbs() {
  return (
    <section className="relative w-full bg-[#241C15] px-6 md:px-16 py-24 md:py-32 overflow-hidden">
      {/* faint adinkra-style watermark, purely decorative */}
      <div
        className="absolute inset-0 opacity-[0.06] bg-center bg-repeat"
        style={{
          backgroundImage: `url('/assets/adinkra-pattern.svg')`,
          backgroundSize: '160px',
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="w-16 h-[3px] flex mx-auto mb-10">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <blockquote className="font-kablammo text-3xl md:text-4xl text-[#F7E7CE] leading-snug">
          "{proverbs[0].quote}"
        </blockquote>
        <p className="mt-4 text-sm uppercase tracking-wide text-[#C99A3A] font-bold">
          {proverbs[0].origin}
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {proverbs.slice(1).map((p) => (
            <div key={p.quote} className="border-l-2 border-[#A47551]/40 pl-5 text-left">
              <p className="text-[#F7E7CE]/85 italic">"{p.quote}"</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-[#C99A3A]/80 font-bold">
                {p.origin}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proverbs