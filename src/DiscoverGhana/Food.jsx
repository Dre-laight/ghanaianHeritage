const dishes = [
  {
    name: 'Jollof',
    emoji: '🍲',
    image: '/assets/food-jollof.jpg',
    ingredients: ['Rice', 'Tomatoes', 'Onions', 'Scotch bonnet pepper', 'Spices', 'Chicken or beef'],
    history:
      'A one-pot rice dish believed to have originated with the Wolof people of Senegal and Gambia, later adopted and adapted across West Africa. Ghana\'s version is known for its deep smoky flavor from charred tomato base.',
    fact: 'Ghana and Nigeria have an ongoing friendly rivalry over whose jollof is better — often called the "Jollof Wars."',
  },
  {
    name: 'Waakye',
    emoji: '🍛',
    image: '/assets/food-waakye.jpg',
    ingredients: ['Rice', 'Black-eyed beans', 'Waakye leaves (sorghum stalks)', 'Spices'],
    history:
      'Cooked together with dried sorghum leaves that give the dish its distinctive reddish-brown color, waakye is a breakfast and lunch staple sold widely across Accra\'s streets.',
    fact: 'The reddish color comes entirely from the leaves used in cooking — no dye or food coloring is involved.',
  },
  {
    name: 'Banku & Tilapia',
    emoji: '🐟',
    image: '/assets/food-banku.jpg',
    ingredients: ['Fermented corn dough', 'Cassava dough', 'Grilled tilapia', 'Pepper sauce'],
    history:
      'Banku is fermented and cooked to a smooth, tangy consistency, traditionally eaten with the hands alongside grilled fish and a fiery pepper sauce — a coastal favorite.',
    fact: 'The fermentation process for banku can take one to two days before it\'s ready to cook.',
  },
  {
    name: 'Kelewele',
    emoji: '🍌',
    image: '/assets/food-kelewele.jpg',
    ingredients: ['Ripe plantain', 'Ginger', 'Pepper', 'Cloves', 'Peanuts (optional)'],
    history:
      'Spiced fried plantain cubes, popular as a street food snack, often sold alongside roasted peanuts in the evenings across Ghanaian cities.',
    fact: 'The signature flavor comes from a ginger-and-pepper marinade the plantain sits in before frying.',
  },
]

function DishCard({ dish }) {
  return (
    <div className="bg-white/40 border border-[#A47551]/25 rounded-lg overflow-hidden">
      <img
        src={dish.image}
        alt={dish.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-6">
        <h3 className="font-kablammo text-2xl text-orange-900 flex items-center gap-2">
          <span>{dish.emoji}</span>
          {dish.name}
        </h3>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-wide font-bold text-[#9C3D30]">
            Ingredients
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {dish.ingredients.map((item) => (
              <li
                key={item}
                className="text-xs bg-[#A47551]/15 text-[#6B4226] px-3 py-1 rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <p className="text-xs uppercase tracking-wide font-bold text-[#9C3D30]">
            History
          </p>
          <p className="mt-2 text-sm text-[#3A2A1A] leading-relaxed">
            {dish.history}
          </p>
        </div>

        <div className="mt-5 border-l-2 border-[#C99A3A] pl-4">
          <p className="text-xs uppercase tracking-wide font-bold text-[#C99A3A]">
            Interesting fact
          </p>
          <p className="mt-1 text-sm text-[#3A2A1A] italic">{dish.fact}</p>
        </div>
      </div>
    </div>
  )
}

function FoodPage() {
  return (
    <section className="w-full bg-[#F7E7CE] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-kablammo text-3xl md:text-5xl text-orange-900 text-center">
          Food of Ghana
        </h1>

        <div className="w-24 h-[4px] flex mx-auto mt-4 mb-16">
          <span className="flex-1 bg-[#C99A3A]" />
          <span className="flex-1 bg-[#9C3D30]" />
          <span className="flex-1 bg-[#6B4226]" />
          <span className="flex-1 bg-[#A47551]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dishes.map((dish) => (
            <DishCard key={dish.name} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FoodPage