const dances = [
  {
    name: 'Adowa',
    region: 'Ashanti',
    occasion: 'Funerals and formal ceremonies',
    energy: 'slow',
    description:
      'A graceful, symbolic dance performed with controlled hand and foot gestures, often accompanied by a female lead responding to talking drums.',
  },
  {
    name: 'Kpanlogo',
    region: 'Ga',
    occasion: 'Social gatherings and celebrations',
    energy: 'medium',
    description:
      'A energetic dance built around conga-style drumming, developed in the 1960s and known for its playful hip and shoulder movement.',
  },
  {
    name: 'Agbadza',
    region: 'Ewe',
    occasion: 'Festivals and communal events',
    energy: 'medium',
    description:
      'A war dance turned social dance, performed in a group formation with sweeping arm movements that mimic historical battle gestures.',
  },
  {
    name: 'Azonto',
    region: 'Greater Accra',
    occasion: 'Contemporary social dance, nightlife',
    energy: 'fast',
    description:
      'A modern street dance that spread rapidly through popular music, built on quick footwork paired with gestures that mime everyday actions.',
  },
  {
    name: 'Bamaya',
    region: 'Dagbon',
    occasion: 'Celebration and storytelling',
    energy: 'fast',
    description:
      'Traditionally performed by men dressed as women, Bamaya combines fast waist movement with a story of resolving drought through dance.',
  },
]

const energySpeed = {
  slow: '1.6s',
  medium: '1s',
  fast: '0.6s',
}

function PulseBars({ energy }) {
  const heights = [40, 70, 100, 60]
  return (
    <div className="flex items-end gap-1 h-8">
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-1.5 bg-[#C99A3A] rounded-full pulse-bar"
          style={{
            height: `${h}%`,
            animationDuration: energySpeed[energy],
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  )
}

function DanceCard({ dance }) {
  return (
    <div className="bg-white/40 border border-[#A47551]/25 rounded-lg p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-kablammo text-2xl text-orange-900">{dance.name}</h3>
          <p className="text-xs uppercase tracking-wide font-bold text-[#9C3D30] mt-1">
            {dance.region}
          </p>
        </div>
        <PulseBars energy={dance.energy} />
      </div>

      <p className="mt-4 text-sm text-[#3A2A1A] leading-relaxed">
        {dance.description}
      </p>

      <div className="mt-4 flex items-center gap-2 text-xs text-[#6B4226]/80">
        <span className="uppercase tracking-wide font-bold">Occasion</span>
        <span>·</span>
        <span>{dance.occasion}</span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs">
        <span className="uppercase tracking-wide font-bold text-[#6B4226]/80">Tempo</span>
        <span className="capitalize text-[#6B4226]">{dance.energy}</span>
      </div>
    </div>
  )
}

function DancePage() {
  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-kablammo text-3xl md:text-5xl text-orange-900 text-center">
          Dances of Ghana
        </h1>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-4">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <p className="text-center text-[#6B4226]/80 mb-14 max-w-lg mx-auto">
          Every region moves to its own rhythm — watch the tempo bars pulse to the feel of each dance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dances.map((dance) => (
            <DanceCard key={dance.name} dance={dance} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DancePage