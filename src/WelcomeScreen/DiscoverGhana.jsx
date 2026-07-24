import { useNavigate } from "react-router-dom"
import cultureImage from '../assets/culture.png'
import foodImage from '../assets/food.png'
import gamesImage from '../assets/games.png'
import adinkraImage from '../assets/adinkra.png'
import people from '../assets/people.png'
import places from '../assets/places.png'
import independence from '../assets/independence.png'



function DiscoverGhana() {
  const navigate = useNavigate()

  const cards = [
    { title: 'Culture', desc: 'Festivals, clothing, traditions', icon: '🥁', route: '/culture', image: cultureImage,  },
    { title: 'History', desc: 'Ancient kingdoms, independence, key figures', icon: '📜', route: '/history', image: independence  },
    { title: 'Symbols', desc: 'Adinkra symbols and their meaning', icon: '🔺', route: '/symbols', image: adinkraImage  },
    { title: 'Places', desc: 'Kwame Nkrumah Mausoleum, Larabanga mosque, ', icon: '⚫', route: '/heritagesite', image: places  },
    { title: 'Food', desc: 'Dishes, ingredients, regional flavor', icon: '🍲', route: '/food', image: foodImage  },
    { title: 'People', desc: 'Key figures, pioneers, change makers', icon: '🎶', route: '/people', image: people  },
  ]


  return (
    <section id="discover" className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
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
              <button  style={{
                    backgroundImage: `
                          linear-gradient(to bottom right, rgba(0,0,0,0.55), rgba(0,0,0,0.5)),
                          url(${card.image})
                        `,                      
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                key={card.title}
                className="group text-left border-none h-45 w-full p-6 rounded-lg cursor-pointer bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] hover:scale-[1.03] transition-transform duration-300 flex flex-col justify-end" onClick={() => navigate(card.route)}>
              
              <h3 className="mt-4 font-kablammo text-5xl text-center">{card.title}</h3>
              
              <div className="flex items-center justify-between">
                <p className="mt-1 text-sm text-[#F7E7CE]/80">{card.desc}</p>
              <span className="mt-4 inline-block text-xs uppercase tracking-wide font-bold border-b border-[#F7E7CE]/50 group-hover:border-[#F7E7CE] transition-colors" onClick={() => navigate(card.route)}>
                {'Explore'}
              </span>
              </div>
              
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DiscoverGhana