import { MapPin } from 'lucide-react'
import larabanga from  '../assets/larabanga.jpg'
import memorialPark from  '../assets/memorialpark.png'
import traditionalBuilding from  '../assets/traditionalbuildings.webp'
import capecoast from  '../assets/capecoast.jpg'
import elmina from  '../assets/elminacastle.jpg'

const heritageSites = [
  {
    name: 'Larabanga Mosque',
    region: 'Northern Region',
    image: larabanga,
    description:
      'One of the oldest mosques in West Africa, built in the Sudano-Sahelian mud-and-timber style. Local tradition traces its origins to the early 15th century, making it a rare surviving example of this architectural tradition in Ghana.',
    tip: 'Visitors are welcome to view the exterior; modest dress is expected out of respect for the active place of worship.',
  },
  {
    name: 'Kwame Nkrumah Mausoleum',
    region: 'Accra',
    image: memorialPark,
    description:
      'A marble memorial park honoring Ghana\'s first president, built on the site where he declared independence in 1957, with an adjoining museum of his personal belongings.',
    tip: 'Admission includes the on-site museum — worth setting aside extra time beyond the memorial grounds.',
  },
  {
    name: 'Cape Coast Castle',
    region: 'Central Region',
    image: capecoast,
    description:
      'A former slave-trading fort on the Atlantic coast, now a UNESCO World Heritage Site preserving a difficult and essential chapter of history.',
    tip: 'Guided tours run regularly and are strongly recommended for historical context.',
  },
  {
    name: 'Elmina Castle',
    region: 'Central Region',
    image: elmina,
    description:
      'Built by the Portuguese in 1482, it\'s the oldest European-built structure in sub-Saharan Africa still standing, and later became a major site in the transatlantic slave trade. A UNESCO World Heritage Site alongside Cape Coast Castle.',
    tip: 'The dungeons can be an emotionally heavy visit — guided tours are recommended over exploring alone.',
  },
  {
    name: 'Ashanti Traditional Buildings',
    region: 'Ashanti Region',
    image: traditionalBuilding,
    description:
      'A small cluster of surviving shrine buildings near Kumasi, built in the traditional Ashanti style of timber, mud plaster, and thatch. Recognized by UNESCO as one of the last examples of this architectural style still standing.',
    tip: 'These are fragile historic structures — several are single-room shrines best appreciated from outside.',
  },
]

function HeritageSiteCard({ site }) {
  return (
    <div className="bg-white/40 border border-[#A47551]/25 rounded-lg overflow-hidden">
      <img
        src={site.image}
        alt={site.name}
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-1.5 text-xs uppercase tracking-wide font-bold text-[#9C3D30]">
          <MapPin className="size-3.5" />
          {site.region}
        </div>

        <h3 className="mt-2 font-kablammo text-2xl text-orange-900">
          {site.name}
        </h3>

        <p className="mt-4 text-sm text-[#3A2A1A] leading-relaxed">
          {site.description}
        </p>

        <div className="mt-4 border-l-2 border-[#C99A3A] pl-4">
          <p className="text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
            Visit tip
          </p>
          <p className="mt-1 text-sm text-[#3A2A1A] italic">{site.tip}</p>
        </div>
      </div>
    </div>
  )
}

function HeritageSitesPage() {
  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-kablammo text-3xl md:text-5xl text-orange-900 text-center">
          Cultural Heritage Sites
        </h1>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-4">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <p className="text-center text-[#6B4226]/80 mb-14 max-w-lg mx-auto">
          Landmarks that carry Ghana's history in stone, mud, and memory.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {heritageSites.map((site) => (
            <HeritageSiteCard key={site.name} site={site} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeritageSitesPage