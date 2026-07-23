import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const milestones = [
  {
    year: 'c. 1200s–1600s',
    title: 'Ancient kingdoms',
    summary:
      'Early states such as Bono and Dagbon formed around trade in gold, kola nuts, and salt, laying the groundwork for the empires that followed.',
  },
  {
    year: '1701–1900s',
    title: 'Ashanti Empire',
    summary:
      'The Ashanti rose to become one of West Africa\'s most powerful states, built on gold trade, military organization, and the unifying symbol of the Golden Stool.',
  },
  {
    year: '1874–1957',
    title: 'Colonial era',
    summary:
      'Britain formalized control as the Gold Coast, reshaping governance, trade, and education while resistance movements grew across the region.',
  },
  {
    year: '1957',
    title: 'Independence',
    summary:
      'Led by Kwame Nkrumah, Ghana became the first sub-Saharan African country to gain independence from colonial rule, inspiring movements across the continent.',
  },
  {
    year: '1957–present',
    title: 'Modern Ghana',
    summary:
      'A republic navigating shifts in governance, economic growth, and cultural revival, while playing a leading role in African politics and identity.',
  },
]

function HistoryTimeline() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-kablammo text-3xl md:text-5xl text-orange-900 text-center">
          History of Ghana
        </h1>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-16">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <ol className="relative">
          {/* connecting line */}
          <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[#A47551]/30" />

          {milestones.map((milestone, index) => {
            const isOpen = openIndex === index
            return (
              <li key={milestone.title} className="relative pl-10 pb-10 last:pb-0">
                {/* dot */}
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className={`absolute left-0 top-1 size-[22px] rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                    isOpen
                      ? 'bg-[#9C3D30] border-[#9C3D30]'
                      : 'bg-[#F7E7CE] border-[#A47551]'
                  }`}
                >
                  <span
                    className={`size-2 rounded-full ${
                      isOpen ? 'bg-[#F7E7CE]' : 'bg-[#A47551]'
                    }`}
                  />
                </button>

                {/* clickable header */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-xs uppercase tracking-wide font-bold text-[#9C3D30]">
                      {milestone.year}
                    </p>
                    <h2 className="font-kablammo text-xl md:text-2xl text-orange-900 group-hover:text-[#9C3D30] transition-colors">
                      {milestone.title}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`size-5 text-[#6B4226] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* expandable explanation */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 mt-3' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#3A2A1A] leading-relaxed pr-4">
                    {milestone.summary}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default HistoryTimeline