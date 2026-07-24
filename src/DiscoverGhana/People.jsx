import { useState } from 'react'
import nkrumah from '../assets/nkrumah.jpg'
import yaa from '../assets/yaa.jpg'
import amu from '../assets/amu.jpg'
import efua from '../assets/efua.webp'
import annan from '../assets/annan.jpg'

const figures = [
  {
    name: 'Kwame Nkrumah',
    era: '1909–1972',
    title: 'First President of Ghana',
    portrait: nkrumah,
    quote: '"Independence is not given, it is taken."',
    bio:
      'Led Ghana to independence in 1957, becoming the first sub-Saharan African country to break from colonial rule. A leading voice for Pan-Africanism, Nkrumah pushed for African unity throughout his presidency.',
    legacy: ['First President of Ghana', 'Founding figure of Pan-Africanism', 'Founded the Organisation of African Unity'],
  },
  {
    name: 'Yaa Asantewaa',
    era: 'c. 1840–1921',
    title: 'Queen Mother of Ejisu',
    portrait: yaa,
    quote: '"If you the men of Ashanti will not go forward, then we will."',
    bio:
      'Led the Ashanti Empire\'s War of the Golden Stool against British colonial forces in 1900, one of the last major uprisings against colonial rule in the region.',
    legacy: ['Led the War of the Golden Stool', 'Symbol of resistance and leadership', 'One of few women to lead an army in the region\'s history'],
  },
  {
    name: 'Kofi Annan',
    era: '1938–2018',
    title: 'Former UN Secretary-General',
    portrait: annan,
    quote: '"Knowledge is power. Information is liberating."',
    bio:
      'The first Black African to serve as UN Secretary-General, Annan led the organization through major humanitarian and peacekeeping reforms and was awarded the Nobel Peace Prize in 2001.',
    legacy: ['First sub-Saharan African UN Secretary-General', 'Nobel Peace Prize laureate, 2001', 'Advocate for global health and development'],
  },
  {
    name: 'Efua Sutherland',
    era: '1924–1996',
    title: 'Playwright & Cultural Advocate',
    portrait: efua,
    quote: '"The theatre is a place where a community comes to know itself."',
    bio:
      'A pioneering playwright and researcher who helped shape modern Ghanaian theatre, founding institutions that supported the arts and children\'s literacy.',
    legacy: ['Founded the Ghana Drama Studio', 'Pioneer of modern Ghanaian theatre', 'Advocate for children\'s literature and education'],
  },
  {
    name: 'Ephraim Amu',
    era: '1899–1995',
    title: 'Composer & Musicologist',
    portrait: amu,
    quote: '"Our own music, sung in our own tongue, carries our own soul."',
    bio:
      'A composer who championed African musical traditions at a time when Western styles dominated formal music education, blending indigenous rhythm and language into his compositions.',
    legacy: ['Pioneer of African art music', 'Composed the widely sung hymn "Yɛn Ara Asase Ni"', 'Championed indigenous instruments in formal music education'],
  },
]

function FiguresPage() {
  const [selectedName, setSelectedName] = useState(figures[0].name)
  const selected = figures.find((f) => f.name === selectedName)

  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-kablammo text-3xl md:text-5xl text-orange-900 text-center">
          Figures Who Shaped Ghana
        </h1>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-16">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* name list */}
          <ul className="md:w-1/3 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar pb-2 md:pb-0">
            {figures.map((figure) => {
              const isActive = figure.name === selectedName
              return (
                <li key={figure.name} className="shrink-0 md:shrink">
                  <button
                    onClick={() => setSelectedName(figure.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 border ${
                      isActive
                        ? 'bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] border-transparent'
                        : 'bg-transparent text-[#6B4226] border-[#A47551]/30 hover:bg-[#A47551]/10'
                    }`}
                  >
                    <span className="font-kablammo text-base md:text-lg block whitespace-nowrap md:whitespace-normal">
                      {figure.name}
                    </span>
                    <span
                      className={`text-xs ${
                        isActive ? 'text-[#F7E7CE]/75' : 'text-[#6B4226]/60'
                      }`}
                    >
                      {figure.era}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          {/* plaque */}
          <div className="md:w-2/3 bg-[#241C15] rounded-lg p-6 md:p-10">
            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-full border-2 border-[#C99A3A] scale-110" />
                <img
                  src={selected.portrait}
                  alt={selected.name}
                  className="size-28 md:size-32 rounded-full object-cover border-2 border-[#F7E7CE]/20"
                />
              </div>

              <div>
                <h2 className="font-kablammo text-2xl md:text-3xl text-[#F7E7CE]">
                  {selected.name}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
                  {selected.title} · {selected.era}
                </p>
                <p className="mt-4 italic text-[#F7E7CE]/85">{selected.quote}</p>
              </div>
            </div>

            <p className="mt-8 text-sm text-[#F7E7CE]/80 leading-relaxed">
              {selected.bio}
            </p>

            <div className="mt-6 border-t border-[#A47551]/20 pt-6">
              <p className="text-xs uppercase tracking-wide font-bold text-[#C99A3A] mb-3">
                Legacy
              </p>
              <ul className="space-y-2">
                {selected.legacy.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#F7E7CE]/85">
                    <span className="mt-2 size-1.5 rounded-full bg-[#C99A3A] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FiguresPage