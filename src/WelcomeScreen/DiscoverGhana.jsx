const cards = [
  { title: 'Culture', desc: 'Festivals, clothing, traditions', icon: '🥁' },
  { title: 'History', desc: 'Ancient kingdoms, independence, key figures', icon: '📜' },
  { title: 'Symbols', desc: 'Adinkra symbols and their meaning', icon: '🔺' },
  { title: 'Games', desc: 'Oware, Achi, Dame', icon: '⚫' },
  { title: 'Food', desc: 'Dishes, ingredients, regional flavor', icon: '🍲' },
  { title: 'People', desc: 'Rhythms, instruments, dance', icon: '🎶' },
]

function DiscoverGhana() {
  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-kablammo text-4xl md:text-5xl text-orange-900 text-center font-bold">
          Discover Ghana
        </h2>

        {/* kente-stripe divider under the heading, same motif as navbar */}
        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-14">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <button
              key={card.title}
              className="group text-left border-none p-6 rounded-lg cursor-pointer bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] hover:scale-[1.03] transition-transform duration-300"
            >
              <span className="text-3xl">{card.icon}</span>
              <h3 className="mt-4 font-kablammo text-2xl">{card.title}</h3>
              <p className="mt-1 text-sm text-[#F7E7CE]/80">{card.desc}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wide font-bold border-b border-[#F7E7CE]/50 group-hover:border-[#F7E7CE] transition-colors">
                {'Explore'}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiscoverGhana