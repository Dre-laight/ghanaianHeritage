
function Footer() {
  return (
    <footer className="relative w-full bg-[#1A140E] px-6 md:px-16 pt-24 pb-10 text-center">
      <h2 className="font-kablammo text-3xl md:text-5xl text-[#F7E7CE]">
        Ready to explore Ghana?
      </h2>

      <p className="mt-3 text-[#F7E7CE]/70">
        Scan. Learn. Play. Experience.
      </p>

      <button className="mt-8 px-8 py-3 rounded-lg bg-gradient-to-br from-[#A47551] to-[#6B4226] text-[#F7E7CE] uppercase font-bold hover:scale-105 transition-transform duration-300">
        <a href="https://agokansie.vercel.app">
          Start your journey
        </a>
      </button>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#A47551]/20 pt-8 max-w-5xl mx-auto">
        <span className="font-kablammo text-xl text-[#C99A3A]">Heritage Ghana</span>

        <ul className="flex gap-6 text-sm text-[#F7E7CE]/70">
          <li className="cursor-pointer hover:text-[#F7E7CE] transition-colors">Culture</li>
          <li className="cursor-pointer hover:text-[#F7E7CE] transition-colors">Games</li>
          <li className="cursor-pointer hover:text-[#F7E7CE] transition-colors">History</li>
          <li className="cursor-pointer hover:text-[#F7E7CE] transition-colors">About</li>
        </ul>

      </div>

      <p className="mt-8 text-xs text-[#F7E7CE]/40">
        © {new Date().getFullYear()} Heritage Ghana. Built with respect for the culture it celebrates.
      </p>
    </footer>
  )
}

export default Footer