import { MapPin, Users, Languages, PartyPopper, ArrowRight } from 'lucide-react'
import cultureHero from '../assets/culture.png'
import galleryOne from '../assets/games.png'
import galleryTwo from '../assets/gobe.jpg'
import galleryThree from '../assets/food.png'
import galleryFour from '../assets/adinkra.png'
import storyImage from '../assets/diversity.png'

const quickFacts = [
  { icon: MapPin, label: 'Origin', value: 'West Africa, Gulf of Guinea coast' },
  { icon: Users, label: 'Ethnic groups', value: 'Akan, Ewe, Ga-Dangme, Mole-Dagbon, and more' },
  { icon: Languages, label: 'Languages', value: 'English (official), Twi, Ga, Ewe, Dagbani' },
  { icon: PartyPopper, label: 'Festivals', value: 'Homowo, Aboakyir, Damba, Odwira' },
]

const galleryImages = [galleryOne, galleryTwo, galleryThree, galleryFour]

function KenteStripe({ className = '' }) {
  return (
    <div className={`h-[3px] flex ${className}`}>
      <span className="flex-1 bg-[#C99A3A]" />
      <span className="flex-1 bg-[#9C3D30]" />
      <span className="flex-1 bg-[#6B4226]" />
      <span className="flex-1 bg-[#A47551]" />
    </div>
  )
}

function CulturePage() {
  return (
    <div className="w-full bg-[#F7E7CE]">
      {/* Hero */}
      <section
        className="relative w-full h-[70vh] min-h-[420px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${cultureHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#241C15]/80 via-[#241C15]/20 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 pb-14 w-full">
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-bold text-[#C99A3A]">
            Culture
          </span>
          <h1 className="mt-2 font-kablammo text-4xl md:text-6xl text-[#F7E7CE]">
            Traditions that define Ghana
          </h1>
        </div>
        <KenteStripe className="absolute bottom-0 left-0 w-full" />
      </section>

      {/* Quick Facts */}
      <section className="px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-kablammo text-2xl md:text-3xl text-orange-900">
            Quick facts
          </h2>
          <KenteStripe className="w-16 mt-3 mb-10" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickFacts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 bg-white/40 border border-[#A47551]/25 rounded-lg p-5"
              >
                <Icon className="size-6 text-[#9C3D30] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wide font-bold text-[#6B4226]/70">
                    {label}
                  </p>
                  <p className="mt-1 text-[#3A2A1A]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 md:px-16 py-16 md:py-20 bg-[#EFDFC0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-kablammo text-2xl md:text-3xl text-orange-900">
            Story
          </h2>
          <KenteStripe className="w-16 mt-3 mb-10" />

          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <p className="text-[#3A2A1A] leading-relaxed">
                Ghanaian culture is woven from the traditions of dozens of ethnic
                groups, each contributing its own language, dress, music, and
                ceremony to a shared national identity. From the kente looms of
                the Ashanti to the drumming traditions of the Ga, everyday life
                carries visible threads of history — in the clothes people wear
                to festivals, the proverbs elders share, and the naming
                ceremonies that welcome new life into a community. Despite
                this diversity, common threads run through it all: respect for
                elders, communal celebration, and a deep relationship between
                people, land, and ancestry.
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <img
                src={storyImage}
                alt="Traditional Ghanaian cultural scene"
                className="w-full h-72 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-kablammo text-2xl md:text-3xl text-orange-900">
            Gallery
          </h2>
          <KenteStripe className="w-16 mt-3 mb-10" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Ghanaian culture, image ${i + 1}`}
                className="w-full h-40 md:h-48 object-cover rounded-lg hover:scale-[1.03] transition-transform duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Did You Know */}
      <section className="px-6 md:px-16 py-16 md:py-20 bg-[#241C15]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
            Did you know?
          </p>
          <p className="mt-4 font-kablammo text-xl md:text-2xl text-[#F7E7CE] leading-snug">
            The naming of a Ghanaian child often follows the day of the week
            they were born — a tradition called "day names," still practiced
            widely today.
          </p>
        </div>
      </section>

      {/* Explore Next */}
      <section className="px-6 md:px-16 py-14">
        <div className="max-w-5xl mx-auto flex justify-end">
          <a
            href="/history"
            className="flex items-center gap-2 text-[#6B4226] font-bold uppercase text-sm tracking-wide hover:text-[#9C3D30] transition-colors"
            >
            Explore History
            <ArrowRight className="size-4" />
          </a>
        </div>
      </section>
    </div>
  )
}

export default CulturePage