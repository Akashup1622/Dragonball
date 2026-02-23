
import { Link } from "react-router-dom";
const Home=()=>{
    return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">

  {/* 🌟 Hero Section */}
  <header className="relative text-center h-90 py-30 overflow-hidden">
    <div className="absolute  inset-0 bg-[url('https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center opacity-20"></div>
    <div className="relative z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold text-yellow-400 drop-shadow-[0_0_25px_#facc15aa] tracking-wide animate-pulse">
        Welcome to the Dragonball site 
      </h1>
      <p className="mt-4 text-lg md:text-2xl py-4 text-gray-200 italic">
       Dragon Ball: Push your limits. Protect your world. The legendary saga of strength and spirit. ✨
      </p>
      <button className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-[0_0_20px_#facc15] hover:bg-yellow-500 hover:shadow-[0_0_30px_#facc15] transition-all duration-300">
        <Link to="/planets">Start Exploring</Link>
      </button>
    </div>
  </header>

  {/* 🌌 Interactive Cards Section */}
  <section className="flex flex-col md:flex-row justify-center items-center gap-10 mt-16 px-6">

    {/* 🪐 Planet Card */}
    <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-3xl border border-yellow-400 shadow-[0_0_25px_#facc15aa] w-80 p-6 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_35px_#facc15]">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-3xl"></div>
      <img
        className="relative z-10 w-56 h-56 object-cover rounded-2xl mx-auto border border-yellow-400/50 shadow-[0_0_20px_#facc15aa]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFhs5zk_6GKChhUmyD4GIV5w9Y8xlyGQDCPw&s"
        alt="Planet"
      />
      <h3 className="relative z-10 text-2xl font-bold text-yellow-400 mt-5 capitalize">
        Explore the Planets
      </h3>
      <p className="relative z-10 text-gray-300 text-sm mt-3">
        Discover mysterious worlds, their histories, and the powers they hold.
      </p>
      <button className="relative z-10 mt-5 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-[0_0_15px_#facc15] transition-all duration-300">
        <Link to="/planets">Discover Planets</Link>
      </button>
    </div>

    {/* 🧙 Character Card */}
    <div className="relative bg-gradient-to-b from-gray-800 to-black rounded-3xl border border-yellow-400 shadow-[0_0_25px_#facc15aa] w-80 p-6 text-center transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_35px_#facc15]">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center rounded-3xl"></div>
      <img
        className="relative z-10 w-56 h-56 object-cover rounded-2xl mx-auto border border-yellow-400/50 shadow-[0_0_20px_#facc15aa]"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWgOzRS5vo7SkFkBFjgwXnxXQ6Qe9qyseLg&s"
        alt="Character"
      />
      <h3 className="relative z-10 text-2xl font-bold text-yellow-400 mt-5 capitalize">
        Meet the Characters
      </h3>
      <p className="relative z-10 text-gray-300 text-sm mt-3">
        Uncover the stories of warriors, heroes, and villains across galaxies.
      </p>
      <button className="relative z-10 mt-5 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-[0_0_15px_#facc15] transition-all duration-300">
        <Link to="/character">View Characters</Link>
      </button>
    </div>

  </section>

  {/* 🌠 Footer Section */}
  <footer className="text-center mt-20 py-6 border-t border-gray-700 text-gray-400 bg-black/40 backdrop-blur-md">
    <p className="text-sm tracking-wide">
      © 2025 <span className="text-yellow-400 font-semibold">Galaxy Explorer</span> | Built with ❤️ using React + Tailwind
    </p>
    <div className="flex justify-center gap-6 mt-3 text-yellow-400 text-xl">
      <i className="fa-brands fa-facebook hover:text-yellow-300 transition"></i>
      <i className="fa-brands fa-twitter hover:text-yellow-300 transition"></i>
      <i className="fa-brands fa-instagram hover:text-yellow-300 transition"></i>
      <i className="fa-brands fa-github hover:text-yellow-300 transition"></i>
    </div>
  </footer>
</div>

    </>
  );
}
export default Home